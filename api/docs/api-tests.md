# Petstore API Test Scenarios

This folder contains a maintainable Playwright-based API test suite for the Swagger Petstore service at `https://petstore.swagger.io/v2`.

## Test coverage areas

1. Pet lifecycle
   - Create a new pet
   - Retrieve the created pet by ID
   - Update pet metadata and status
   - Delete the pet
   - Verify missing pet returns `404`

2. Pet search and filter
   - Find pets by status
   - Find pets by tags
   - Validate results include the created test pet

3. Store order operations
   - Create a new order for a test pet
   - Retrieve the order by ID
   - Delete the order
   - Validate invalid order lookup returns `404`

4. User lifecycle
   - Create a user account
   - Retrieve the created user
   - Login and logout successfully
   - Validate retrieving an unknown user returns `404`

5. Contract tests
   - Validate response payloads match expected API contracts
   - Verify create and retrieve flows for pets, orders, and users
   - Confirm search endpoints return arrays of valid pet objects

## Maintainability principles

- Shared API helper in `helpers/petstoreApi.js`
- Reusable test data factory in `test-data/petstoreTestData.js`
- Contract schemas under `schemas/petstoreContractSchemas.js`
- Focused test suites under `tests/`
- Clean test data on teardown when possible
- Explicit assertions for HTTP status and response schema
- Focused scenarios with one behavior per test

## Running the API suite

Use the dedicated npm script:

```bash
npm run test:api
```

This will execute `playwright test api` against the Petstore API files in the `api` folder.
