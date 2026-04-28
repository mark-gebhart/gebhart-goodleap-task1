class PetstoreApi {
  static BASE_URL = 'https://petstore.swagger.io/v2';

  constructor(apiRequest) {
    this.apiRequest = apiRequest;
  }

  buildUrl(path) {
    return `${PetstoreApi.BASE_URL}${path}`;
  }

  async createPet(pet) {
    return this.apiRequest.post(this.buildUrl('/pet'), {
      data: JSON.stringify(pet),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getPetById(petId) {
    return this.apiRequest.get(this.buildUrl(`/pet/${petId}`));
  }

  async updatePet(pet) {
    return this.apiRequest.put(this.buildUrl('/pet'), {
      data: JSON.stringify(pet),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async updatePetForm(petId, update) {
    return this.apiRequest.post(this.buildUrl(`/pet/${petId}`), {
      data: update,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  async deletePet(petId) {
    return this.apiRequest.delete(this.buildUrl(`/pet/${petId}`));
  }

  async findPetsByStatus(status) {
    return this.apiRequest.get(this.buildUrl('/pet/findByStatus'), { params: { status } });
  }

  async findPetsByTags(tags) {
    return this.apiRequest.get(this.buildUrl('/pet/findByTags'), { params: { tags: tags.join(',') } });
  }

  async uploadPetImage(petId, fileBuffer, fileName = 'pet-image.png') {
    return this.apiRequest.post(this.buildUrl(`/pet/${petId}/uploadImage`), {
      multipart: {
        file: {
          name: fileName,
          mimeType: 'image/png',
          buffer: fileBuffer,
        },
      },
    });
  }

  async createOrder(order) {
    return this.apiRequest.post(this.buildUrl('/store/order'), {
      data: JSON.stringify(order),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getOrderById(orderId) {
    return this.apiRequest.get(this.buildUrl(`/store/order/${orderId}`));
  }

  async deleteOrder(orderId) {
    return this.apiRequest.delete(this.buildUrl(`/store/order/${orderId}`));
  }

  async createUser(user) {
    return this.apiRequest.post(this.buildUrl('/user'), {
      data: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getUser(username) {
    return this.apiRequest.get(this.buildUrl(`/user/${username}`));
  }

  async deleteUser(username) {
    return this.apiRequest.delete(this.buildUrl(`/user/${username}`));
  }

  async login(username, password) {
    return this.apiRequest.get(this.buildUrl('/user/login'), { params: { username, password } });
  }

  async logout() {
    return this.apiRequest.get(this.buildUrl('/user/logout'));
  }
}

module.exports = { PetstoreApi };