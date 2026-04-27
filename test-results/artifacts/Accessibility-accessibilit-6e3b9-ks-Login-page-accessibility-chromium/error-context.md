# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Accessibility\accessibility.spec.js >> Accessibility Checks >> Login page accessibility
- Location: tests\Accessibility\accessibility.spec.js:20:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 171

- Array []
+ Array [
+   Object {
+     "description": "Ensure the document has a main landmark",
+     "help": "Document should have one main landmark",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright",
+     "id": "landmark-one-main",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-main",
+             "impact": "moderate",
+             "message": "Document does not have a main landmark",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Document does not have a main landmark",
+         "html": "<html lang=\"en\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+   Object {
+     "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
+     "help": "Page should contain a level-one heading",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright",
+     "id": "page-has-heading-one",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-heading-one",
+             "impact": "moderate",
+             "message": "Page must have a level-one heading",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Page must have a level-one heading",
+         "html": "<html lang=\"en\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+   Object {
+     "description": "Ensure all page content is contained by landmarks",
+     "help": "All page content should be contained by landmarks",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/region?application=playwright",
+     "id": "region",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"login_logo\">Swag Labs</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".login_logo",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"form_group\"><input class=\"input_error form_input\" placeholder=\"Username\" type=\"text\" data-test=\"username\" id=\"user-name\" name=\"user-name\" autocorrect=\"off\" autocapitalize=\"none\" value=\"\"></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".form_group:nth-child(1)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"form_group\"><input class=\"input_error form_input\" placeholder=\"Password\" type=\"password\" data-test=\"password\" id=\"password\" name=\"password\" autocorrect=\"off\" autocapitalize=\"none\" value=\"\"></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".form_group:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"login_credentials_wrap\" data-test=\"login-credentials-container\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".login_credentials_wrap",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "best-practice",
+       "RGAAv4",
+       "RGAA-9.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const { test } = require('../../fixtures/auth');
  3  | const { runAxe } = require('../../utils/testHelpers');
  4  | const LoginPage = require('../../pages/LoginPage');
  5  | const InventoryPage = require('../../pages/InventoryPage');
  6  | const CartPage = require('../../pages/CartPage');
  7  | const CheckoutPage = require('../../pages/CheckoutPage');
  8  | const testData = require('../../test-data/test-data.json');
  9  | 
  10 | test.describe('Accessibility Checks', { tag: '@accessibility' }, () => {
  11 |   let loginPage, inventoryPage, cartPage, checkoutPage;
  12 | 
  13 |   test.beforeEach(async ({ authenticatedPage }) => {
  14 |     loginPage = new LoginPage(authenticatedPage);
  15 |     inventoryPage = new InventoryPage(authenticatedPage);
  16 |     cartPage = new CartPage(authenticatedPage);
  17 |     checkoutPage = new CheckoutPage(authenticatedPage);
  18 |   });
  19 | 
  20 |   test('Login page accessibility', async ({ page }) => {
  21 |     await loginPage.goto();
  22 |     const results = await runAxe(page);
> 23 |     expect(results.violations).toEqual([]);
     |                                ^ Error: expect(received).toEqual(expected) // deep equality
  24 |   });
  25 | 
  26 |   test('Inventory page accessibility', async ({ authenticatedPage: page }) => {
  27 |     const results = await runAxe(page);
  28 |     expect(results.violations).toEqual([]);
  29 |   });
  30 | 
  31 |   test('Cart page accessibility', async ({ authenticatedPage: page }) => {
  32 |     await inventoryPage.addFirstProductToCart();
  33 |     await cartPage.goto();
  34 |     await cartPage.isLoaded();
  35 |     const results = await runAxe(page);
  36 |     expect(results.violations).toEqual([]);
  37 |   });
  38 | 
  39 |   test('Checkout page accessibility', async ({ authenticatedPage: page }) => {
  40 |     await inventoryPage.addFirstProductToCart();
  41 |     await cartPage.goto();
  42 |     await cartPage.checkout();
  43 |     await page.waitForLoadState('networkidle');
  44 |     const results = await runAxe(page);
  45 |     expect(results.violations).toEqual([]);
  46 |   });
  47 | });
```