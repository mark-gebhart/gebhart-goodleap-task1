function validateSchema(value, schema, path = 'value') {
  if (schema.nullable && value === null) {
    return;
  }

  if (schema.type === 'object') {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
      throw new Error(`${path} should be an object`);
    }

    if (schema.required) {
      for (const key of schema.required) {
        if (!(key in value)) {
          throw new Error(`${path}.${key} is required`);
        }
      }
    }

    const properties = schema.properties || {};
    for (const [key, propertySchema] of Object.entries(properties)) {
      if (key in value) {
        validateSchema(value[key], propertySchema, `${path}.${key}`);
      }
    }

    if (schema.additionalProperties === false) {
      for (const key of Object.keys(value)) {
        if (!Object.prototype.hasOwnProperty.call(properties, key)) {
          throw new Error(`${path}.${key} is not allowed`);
        }
      }
    }
    return;
  }

  if (schema.type === 'array') {
    if (!Array.isArray(value)) {
      throw new Error(`${path} should be an array`);
    }
    if (schema.items) {
      for (let index = 0; index < value.length; index++) {
        validateSchema(value[index], schema.items, `${path}[${index}]`);
      }
    }
    return;
  }

  if (schema.type === 'string') {
    if (typeof value !== 'string') {
      throw new Error(`${path} should be a string`);
    }
    return;
  }

  if (schema.type === 'number') {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error(`${path} should be a number`);
    }
    return;
  }

  if (schema.type === 'integer') {
    if (typeof value !== 'number' || !Number.isInteger(value)) {
      throw new Error(`${path} should be an integer`);
    }
    return;
  }

  if (schema.type === 'boolean') {
    if (typeof value !== 'boolean') {
      throw new Error(`${path} should be a boolean`);
    }
    return;
  }

  throw new Error(`${path} has unsupported schema type ${schema.type}`);
}

const petSchema = {
  type: 'object',
  required: ['id', 'name', 'photoUrls', 'status', 'category', 'tags'],
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    category: {
      type: 'object',
      required: ['id', 'name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
      },
      additionalProperties: false,
    },
    photoUrls: {
      type: 'array',
      items: { type: 'string' },
    },
    tags: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'name'],
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
        },
        additionalProperties: false,
      },
    },
    status: { type: 'string' },
  },
  additionalProperties: true,
};

const petListItemSchema = {
  type: 'object',
  required: ['id', 'status'],
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    category: {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
      },
      additionalProperties: false,
    },
    photoUrls: {
      type: 'array',
      items: { type: 'string' },
    },
    tags: {
      type: 'array',
      items: {
        type: 'object',
        required: [],
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
        },
        additionalProperties: false,
      },
    },
    status: { type: 'string' },
  },
  additionalProperties: true,
};

const petListSchema = {
  type: 'array',
  items: petListItemSchema,
};

const orderSchema = {
  type: 'object',
  required: ['id', 'petId', 'quantity', 'shipDate', 'status', 'complete'],
  properties: {
    id: { type: 'integer' },
    petId: { type: 'integer' },
    quantity: { type: 'integer' },
    shipDate: { type: 'string' },
    status: { type: 'string' },
    complete: { type: 'boolean' },
  },
  additionalProperties: true,
};

const userSchema = {
  type: 'object',
  required: ['id', 'username', 'firstName', 'lastName', 'email', 'password', 'phone', 'userStatus'],
  properties: {
    id: { type: 'integer' },
    username: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    phone: { type: 'string' },
    userStatus: { type: 'integer' },
  },
  additionalProperties: true,
};

const apiResponseSchema = {
  type: 'object',
  required: ['code', 'type', 'message'],
  properties: {
    code: { type: 'integer' },
    type: { type: 'string' },
    message: { type: 'string' },
  },
  additionalProperties: true,
};

module.exports = {
  validateSchema,
  petSchema,
  petListSchema,
  orderSchema,
  userSchema,
  apiResponseSchema,
};
