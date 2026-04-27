# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Accessibility\accessibility.spec.js >> Accessibility Checks >> Checkout page accessibility
- Location: tests\Accessibility\accessibility.spec.js:39:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 193

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
+         "html": "<img src=\"data:image/png;base6...\" class=\"bm-icon\" srcset=\"/static/media/menu3x...\" alt=\"Open Menu\" data-test=\"open-menu\" style=\"width: 100%; height:...\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".bm-icon",
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
+         "html": "<div class=\"header_label\"><div class=\"app_logo\">Swag Labs</div></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".header_label",
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
+         "html": "<div id=\"shopping_cart_container\" class=\"shopping_cart_container\"><a class=\"shopping_cart_link\" data-test=\"shopping-cart-link\"><span class=\"shopping_cart_badge\" data-test=\"shopping-cart-badge\">1</span></a></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#shopping_cart_container",
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
+         "html": "<div class=\"header_secondary_container\" data-test=\"secondary-header\"><span class=\"title\" data-test=\"title\">Checkout: Your Information</span></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".header_secondary_container",
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
+         "html": "<div class=\"checkout_info\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".checkout_info",
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
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "1"
      - generic [ref=e16]: "Checkout: Your Information"
    - generic [ref=e19]:
      - generic [ref=e20]:
        - textbox "First Name" [ref=e22]
        - textbox "Last Name" [ref=e24]
        - textbox "Zip/Postal Code" [ref=e26]
      - generic [ref=e28]:
        - button "Go back Cancel" [ref=e29] [cursor=pointer]:
          - img "Go back" [ref=e30]
          - text: Cancel
        - button "Continue" [ref=e31] [cursor=pointer]
  - contentinfo [ref=e32]:
    - list [ref=e33]:
      - listitem [ref=e34]:
        - link "Twitter" [ref=e35] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e36]:
        - link "Facebook" [ref=e37] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e38]:
        - link "LinkedIn" [ref=e39] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e40]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  23 |     expect(results.violations).toEqual([]);
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
> 45 |     expect(results.violations).toEqual([]);
     |                                ^ Error: expect(received).toEqual(expected) // deep equality
  46 |   });
  47 | });
```