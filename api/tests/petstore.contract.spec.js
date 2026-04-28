const { test, expect, request } = require('@playwright/test');
const { PetstoreApi } = require('../helpers/petstoreApi');
const { createPetData, createOrderData, createUserData } = require('../test-data/petstoreTestData');
const { validateSchema, petSchema, petListSchema, orderSchema, userSchema, apiResponseSchema } = require('../schemas/petstoreContractSchemas');

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

test.describe('Petstore API - Contract tests', () => {
  test('Pet contract should match expected schema after create and retrieve', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const pet = createPetData();

    try {
      const createResponse = await api.createPet(pet);
      expect(createResponse.status()).toBe(200);
      const createdPet = await createResponse.json();
      validateSchema(createdPet, petSchema, 'createPet');

      const getResponse = await api.getPetById(createdPet.id);
      expect(getResponse.status()).toBe(200);
      const fetchedPet = await getResponse.json();
      validateSchema(fetchedPet, petSchema, 'getPetById');
    } finally {
      await cleanupResource(api.deletePet.bind(api), pet.id);
      await apiRequest.dispose();
    }
  });

  test('Pet search by status returns a list matching the pet schema', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const pet = createPetData();

    try {
      const createResponse = await api.createPet(pet);
      expect(createResponse.status()).toBe(200);

      const searchResponse = await api.findPetsByStatus('available');
      expect(searchResponse.status()).toBe(200);
      const results = await searchResponse.json();
      validateSchema(results, petListSchema, 'findPetsByStatus');
    } finally {
      await cleanupResource(api.deletePet.bind(api), pet.id);
      await apiRequest.dispose();
    }
  });

  test('Order contract should match expected schema after create and retrieve', async () => {
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
      validateSchema(createdOrder, orderSchema, 'createOrder');

      const getOrderResponse = await api.getOrderById(order.id);
      expect(getOrderResponse.status()).toBe(200);
      const fetchedOrder = await getOrderResponse.json();
      validateSchema(fetchedOrder, orderSchema, 'getOrderById');
    } finally {
      await cleanupResource(api.deleteOrder.bind(api), order.id);
      await cleanupResource(api.deletePet.bind(api), pet.id);
      await apiRequest.dispose();
    }
  });

  test('User contract should match expected schema after create and retrieve', async () => {
    const apiRequest = await createApiContext();
    const api = new PetstoreApi(apiRequest);
    const user = createUserData();

    try {
      const createUserResponse = await api.createUser(user);
      expect(createUserResponse.status()).toBe(200);
      const createUserBody = await createUserResponse.json();
      validateSchema(createUserBody, apiResponseSchema, 'createUser');

      const getUserResponse = await api.getUser(user.username);
      expect(getUserResponse.status()).toBe(200);
      const fetchedUser = await getUserResponse.json();
      validateSchema(fetchedUser, userSchema, 'getUser');
    } finally {
      await cleanupResource(api.deleteUser.bind(api), user.username);
      await apiRequest.dispose();
    }
  });
});
