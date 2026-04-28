const { test, expect, request } = require('@playwright/test');
const { PetstoreApi } = require('../helpers/petstoreApi');
const {
  createPetData,
  updatePetData,
  createOrderData,
  createUserData,
} = require('../test-data/petstoreTestData');

const smallPngBuffer = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=',
  'base64'
);

async function createApiContext() {
  return await request.newContext();
}

async function cleanupResource(resourceFn, resourceId) {
  try {
    await resourceFn(resourceId);
  } catch (_) {
    // Ignore cleanup failures for shared service state.
  }
}

test.describe('Petstore API - Pet operations', () => {
  test('Create, retrieve, update and delete a pet', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const pet = createPetData();

    try {
      const createResponse = await api.createPet(pet);
      expect(createResponse.status()).toBe(200);
      const createdPet = await createResponse.json();
      expect(createdPet.id).toBe(pet.id);
      expect(createdPet.name).toBe(pet.name);
      expect(createdPet.status).toBe(pet.status);

      const getResponse = await api.getPetById(pet.id);
      expect(getResponse.status()).toBe(200);
      const fetchedPet = await getResponse.json();
      expect(fetchedPet.name).toBe(pet.name);
      expect(fetchedPet.category.name).toBe(pet.category.name);

      const updatedPetPayload = updatePetData(pet, { status: 'sold' });
      const updateResponse = await api.updatePet(updatedPetPayload);
      expect(updateResponse.status()).toBe(200);
      const updatedPet = await updateResponse.json();
      expect(updatedPet.status).toBe('sold');
      expect(updatedPet.name).toContain('-updated');

      const deleteResponse = await api.deletePet(pet.id);
      expect(deleteResponse.status()).toBe(200);

      const missingResponse = await api.getPetById(pet.id);
      expect(missingResponse.status()).toBe(404);
    } finally {
      await cleanupResource(api.deletePet.bind(api), pet.id);
      await apiRequest.dispose();
    }
  });

  test('Search pets by status and tags returns valid results', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const pet = createPetData();

    try {
      const createResponse = await api.createPet(pet);
      expect(createResponse.status()).toBe(200);

      const searchByStatusResponse = await api.findPetsByStatus('available');
      expect(searchByStatusResponse.status()).toBe(200);
      const petsByStatus = await searchByStatusResponse.json();
      expect(Array.isArray(petsByStatus)).toBe(true);
      expect(petsByStatus.some((entry) => entry.id === pet.id)).toBe(true);

      const searchByTagsResponse = await api.findPetsByTags(['api-test', 'regression']);
      expect(searchByTagsResponse.status()).toBe(200);
      const petsByTags = await searchByTagsResponse.json();
      expect(Array.isArray(petsByTags)).toBe(true);
      expect(petsByTags.some((entry) => entry.id === pet.id)).toBe(true);
    } finally {
      await cleanupResource(api.deletePet.bind(api), pet.id);
      await apiRequest.dispose();
    }
  });

  test('Upload image for a pet and verify photoUrls persist', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const pet = createPetData();

    try {
      const createResponse = await api.createPet(pet);
      expect(createResponse.status()).toBe(200);

      const uploadResponse = await api.uploadPetImage(pet.id, smallPngBuffer, 'test-pet.png');
      expect(uploadResponse.status()).toBe(200);
      const uploadBody = await uploadResponse.json();
      expect(uploadBody.code).toBe(200);
      expect(uploadBody.message.toLowerCase()).toContain('file uploaded');

      const getResponse = await api.getPetById(pet.id);
      expect(getResponse.status()).toBe(200);
      const fetchedPet = await getResponse.json();
      expect(Array.isArray(fetchedPet.photoUrls)).toBe(true);
      expect(fetchedPet.photoUrls.length).toBeGreaterThanOrEqual(1);
    } finally {
      await cleanupResource(api.deletePet.bind(api), pet.id);
      await apiRequest.dispose();
    }
  });

  test('Returns 404 when fetching a non-existent pet', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const invalidPetId = 999999999999;

    try {
      const response = await api.getPetById(invalidPetId);
      expect(response.status()).toBe(404);
      const body = await response.text();
      expect(body.toLowerCase()).toContain('not found');
    } finally {
      await apiRequest.dispose();
    }
  });
});

test.describe('Petstore API - Store order operations', () => {
  test('Create, retrieve and delete an order', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const pet = createPetData();
    const order = createOrderData(pet.id);

    try {
      const createPetResponse = await api.createPet(pet);
      expect(createPetResponse.status()).toBe(200);
      const createOrderResponse = await api.createOrder(order);
      expect(createOrderResponse.status()).toBe(200);
      const createdOrder = await createOrderResponse.json();
      expect(createdOrder.id).toBe(order.id);
      expect(createdOrder.petId).toBe(order.petId);

      const getOrderResponse = await api.getOrderById(order.id);
      expect(getOrderResponse.status()).toBe(200);
      const fetchedOrder = await getOrderResponse.json();
      expect(fetchedOrder.status).toBe(order.status);

      const deleteOrderResponse = await api.deleteOrder(order.id);
      expect(deleteOrderResponse.status()).toBe(200);
    } finally {
      await cleanupResource(api.deleteOrder.bind(api), order.id);
      await cleanupResource(api.deletePet.bind(api), pet.id);
      await apiRequest.dispose();
    }
  });

  test('Returns 404 for invalid order lookup', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const invalidOrderId = 999999999999;

    try {
      const response = await api.getOrderById(invalidOrderId);
      expect(response.status()).toBe(404);
      const body = await response.text();
      expect(body.toLowerCase()).toContain('not found');
    } finally {
      await apiRequest.dispose();
    }
  });
});

test.describe('Petstore API - User lifecycle', () => {
  test('Create user, login, and logout successfully', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const user = createUserData();

    try {
      const createUserResponse = await api.createUser(user);
      expect(createUserResponse.status()).toBe(200);

      const getUserResponse = await api.getUser(user.username);
      expect(getUserResponse.status()).toBe(200);
      const fetchedUser = await getUserResponse.json();
      expect(fetchedUser.username).toBe(user.username);
      expect(fetchedUser.email).toBe(user.email);

      const loginResponse = await api.login(user.username, user.password);
      expect(loginResponse.status()).toBe(200);
      const loginBody = await loginResponse.text();
      expect(loginBody).toContain('logged in user session');

      const logoutResponse = await api.logout();
      expect(logoutResponse.status()).toBe(200);
      const logoutBody = await logoutResponse.text();
      expect(logoutBody).toContain('ok');
    } finally {
      await cleanupResource(api.deleteUser.bind(api), user.username);
      await apiRequest.dispose();
    }
  });

  test('Login before user session actions and verify session flow', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const user = createUserData();

    try {
      const createUserResponse = await api.createUser(user);
      expect(createUserResponse.status()).toBe(200);

      const loginResponse = await api.login(user.username, user.password);
      expect(loginResponse.status()).toBe(200);
      const loginBody = await loginResponse.text();
      expect(loginBody.toLowerCase()).toContain('logged in user session');

      const getUserResponse = await api.getUser(user.username);
      expect(getUserResponse.status()).toBe(200);
      const fetchedUser = await getUserResponse.json();
      expect(fetchedUser.username).toBe(user.username);

      const logoutResponse = await api.logout();
      expect(logoutResponse.status()).toBe(200);
      const logoutBody = await logoutResponse.text();
      expect(logoutBody.toLowerCase()).toContain('ok');
    } finally {
      await cleanupResource(api.deleteUser.bind(api), user.username);
      await apiRequest.dispose();
    }
  });

  test('Validate user session actions before and after login', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const user = createUserData();

    try {
      const createUserResponse = await api.createUser(user);
      expect(createUserResponse.status()).toBe(200);

      const preLoginResponse = await api.getUser(user.username);
      if (preLoginResponse.status() === 200) {
        const preLoginUser = await preLoginResponse.json();
        expect(preLoginUser.username).toBe(user.username);
      } else {
        expect([401, 403, 404]).toContain(preLoginResponse.status());
      }

      const loginResponse = await api.login(user.username, user.password);
      expect(loginResponse.status()).toBe(200);
      const loginBody = await loginResponse.text();
      expect(loginBody.toLowerCase()).toContain('logged in user session');

      const authenticatedResponse = await api.getUser(user.username);
      expect(authenticatedResponse.status()).toBe(200);
      const authenticatedUser = await authenticatedResponse.json();
      expect(authenticatedUser.username).toBe(user.username);
    } finally {
      await cleanupResource(api.deleteUser.bind(api), user.username);
      await apiRequest.dispose();
    }
  });

  test('Returns 404 when retrieving an unknown user', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const unknownUsername = 'unknown_user_api_test';

    try {
      const response = await api.getUser(unknownUsername);
      expect(response.status()).toBe(404);
      const body = await response.text();
      expect(body.toLowerCase()).toContain('not found');
    } finally {
      await apiRequest.dispose();
    }
  });
});
