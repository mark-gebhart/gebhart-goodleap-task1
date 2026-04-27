# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Accessibility\accessibility.spec.js >> Accessibility Checks >> Cart page accessibility
- Location: tests\Accessibility\accessibility.spec.js:31:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 303

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
+         "html": "<div class=\"header_secondary_container\" data-test=\"secondary-header\"><span class=\"title\" data-test=\"title\">Your Cart</span></div>",
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
+         "html": "<div class=\"cart_quantity_label\" data-test=\"cart-quantity-label\">QTY</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".cart_quantity_label",
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
+         "html": "<div class=\"cart_desc_label\" data-test=\"cart-desc-label\">Description</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".cart_desc_label",
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
+         "html": "<div class=\"cart_quantity\" data-test=\"item-quantity\">1</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".cart_quantity",
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
+         "html": "<a href=\"#\" id=\"item_4_title_link\" data-test=\"item-4-title-link\"><div class=\"inventory_item_name\" data-test=\"inventory-item-name\">Sauce Labs Backpack</div></a>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#item_4_title_link",
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
+         "html": "<div class=\"inventory_item_desc\" data-test=\"inventory-item-desc\">carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item_desc",
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
+         "html": "<div class=\"inventory_item_price\" data-test=\"inventory-item-price\">$29.99</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item_price",
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
      - generic [ref=e16]: Your Cart
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]: QTY
        - generic [ref=e21]: Description
        - generic [ref=e22]:
          - generic [ref=e23]: "1"
          - generic [ref=e24]:
            - link "Sauce Labs Backpack" [ref=e25] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e26]: Sauce Labs Backpack
            - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e28]:
              - generic [ref=e29]: $29.99
              - button "Remove" [ref=e30] [cursor=pointer]
      - generic [ref=e31]:
        - button "Go back Continue Shopping" [ref=e32] [cursor=pointer]:
          - img "Go back" [ref=e33]
          - text: Continue Shopping
        - button "Checkout" [ref=e34] [cursor=pointer]
  - contentinfo [ref=e35]:
    - list [ref=e36]:
      - listitem [ref=e37]:
        - link "Twitter" [ref=e38] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e39]:
        - link "Facebook" [ref=e40] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e41]:
        - link "LinkedIn" [ref=e42] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e43]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 36 |     expect(results.violations).toEqual([]);
     |                                ^ Error: expect(received).toEqual(expected) // deep equality
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