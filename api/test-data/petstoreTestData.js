function generateUniqueId() {
  return Date.now() + Math.floor(Math.random() * 10000);
}

function createPetData() {
  const uniqueId = generateUniqueId();
  return {
    id: uniqueId,
    category: { id: 1000, name: 'api-test-category' },
    name: `api-pet-${uniqueId}`,
    photoUrls: ['https://example.com/pet.png'],
    tags: [{ id: 1000, name: 'api-test' }, { id: 1001, name: 'regression' }],
    status: 'available',
  };
}

function updatePetData(pet, overrides = {}) {
  return {
    ...pet,
    name: overrides.name || `${pet.name}-updated`,
    status: overrides.status || 'sold',
    ...overrides,
  };
}

function createOrderData(petId) {
  const uniqueId = generateUniqueId();
  return {
    id: uniqueId,
    petId,
    quantity: 1,
    shipDate: new Date().toISOString(),
    status: 'placed',
    complete: true,
  };
}

function createUserData() {
  const uniqueId = generateUniqueId();
  return {
    id: uniqueId,
    username: `api_user_${uniqueId}`,
    firstName: 'Api',
    lastName: 'Tester',
    email: `api_user_${uniqueId}@example.com`,
    password: 'P@ssw0rd!',
    phone: '555-0100',
    userStatus: 0,
  };
}

module.exports = {
  createPetData,
  updatePetData,
  createOrderData,
  createUserData,
};