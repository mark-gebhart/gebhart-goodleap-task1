# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Accessibility\accessibility.spec.js >> Accessibility Checks >> Inventory page accessibility
- Location: tests\Accessibility\accessibility.spec.js:26:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 652

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
+         "html": "<span class=\"title\" data-test=\"title\">Products</span>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".title",
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
+         "html": "<select class=\"product_sort_container\" data-test=\"product-sort-container\"><option value=\"az\">Name (A to Z)</option><option value=\"za\">Name (Z to A)</option><option value=\"lohi\">Price (low to high)</option><option value=\"hilo\">Price (high to low)</option></select>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "select",
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
+         "html": "<div class=\"inventory_item_img\"><a href=\"#\" id=\"item_4_img_link\" data-test=\"item-4-img-link\"><img alt=\"Sauce Labs Backpack\" class=\"inventory_item_img\" src=\"/static/media/sauce-backpack-1200x1500.0a0b85a385945026062b.jpg\" data-test=\"inventory-item-sauce-labs-backpack-img\"></a></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(1) > .inventory_item_img",
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
+         "html": "<div class=\"inventory_item_label\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(1) > .inventory_item_description[data-test=\"inventory-item-description\"] > .inventory_item_label",
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
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(1) > .inventory_item_description[data-test=\"inventory-item-description\"] > .pricebar > .inventory_item_price[data-test=\"inventory-item-price\"]",
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
+         "html": "<div class=\"inventory_item_img\"><a href=\"#\" id=\"item_0_img_link\" data-test=\"item-0-img-link\"><img alt=\"Sauce Labs Bike Light\" class=\"inventory_item_img\" src=\"/static/media/bike-light-1200x1500.37c843b09a7d77409d63.jpg\" data-test=\"inventory-item-sauce-labs-bike-light-img\"></a></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(2) > .inventory_item_img",
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
+         "html": "<div class=\"inventory_item_label\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(2) > .inventory_item_description[data-test=\"inventory-item-description\"] > .inventory_item_label",
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
+         "html": "<div class=\"inventory_item_price\" data-test=\"inventory-item-price\">$9.99</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(2) > .inventory_item_description[data-test=\"inventory-item-description\"] > .pricebar > .inventory_item_price[data-test=\"inventory-item-price\"]",
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
+         "html": "<div class=\"inventory_item_img\"><a href=\"#\" id=\"item_1_img_link\" data-test=\"item-1-img-link\"><img alt=\"Sauce Labs Bolt T-Shirt\" class=\"inventory_item_img\" src=\"/static/media/bolt-shirt-1200x1500.c2599ac5f0a35ed5931e.jpg\" data-test=\"inventory-item-sauce-labs-bolt-t-shirt-img\"></a></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(3) > .inventory_item_img",
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
+         "html": "<div class=\"inventory_item_label\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(3) > .inventory_item_description[data-test=\"inventory-item-description\"] > .inventory_item_label",
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
+         "html": "<div class=\"inventory_item_price\" data-test=\"inventory-item-price\">$15.99</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(3) > .inventory_item_description[data-test=\"inventory-item-description\"] > .pricebar > .inventory_item_price[data-test=\"inventory-item-price\"]",
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
+         "html": "<div class=\"inventory_item_img\"><a href=\"#\" id=\"item_5_img_link\" data-test=\"item-5-img-link\"><img alt=\"Sauce Labs Fleece Jacket\" class=\"inventory_item_img\" src=\"/static/media/sauce-pullover-1200x1500.51d7ffaf301e698772c8.jpg\" data-test=\"inventory-item-sauce-labs-fleece-jacket-img\"></a></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(4) > .inventory_item_img",
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
+         "html": "<div class=\"inventory_item_label\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(4) > .inventory_item_description[data-test=\"inventory-item-description\"] > .inventory_item_label",
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
+         "html": "<div class=\"inventory_item_price\" data-test=\"inventory-item-price\">$49.99</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(4) > .inventory_item_description[data-test=\"inventory-item-description\"] > .pricebar > .inventory_item_price[data-test=\"inventory-item-price\"]",
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
+         "html": "<div class=\"inventory_item_img\"><a href=\"#\" id=\"item_2_img_link\" data-test=\"item-2-img-link\"><img alt=\"Sauce Labs Onesie\" class=\"inventory_item_img\" src=\"/static/media/red-onesie-1200x1500.2ec615b271ef4c3bc430.jpg\" data-test=\"inventory-item-sauce-labs-onesie-img\"></a></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(5) > .inventory_item_img",
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
+         "html": "<div class=\"inventory_item_label\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(5) > .inventory_item_description[data-test=\"inventory-item-description\"] > .inventory_item_label",
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
+         "html": "<div class=\"inventory_item_price\" data-test=\"inventory-item-price\">$7.99</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(5) > .inventory_item_description[data-test=\"inventory-item-description\"] > .pricebar > .inventory_item_price[data-test=\"inventory-item-price\"]",
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
+         "html": "<div class=\"inventory_item_img\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(6) > .inventory_item_img",
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
+         "html": "<div class=\"inventory_item_label\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(6) > .inventory_item_description[data-test=\"inventory-item-description\"] > .inventory_item_label",
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
+         "html": "<div class=\"inventory_item_price\" data-test=\"inventory-item-price\">$15.99</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".inventory_item[data-test=\"inventory-item\"]:nth-child(6) > .inventory_item_description[data-test=\"inventory-item-description\"] > .pricebar > .inventory_item_price[data-test=\"inventory-item-price\"]",
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
+   Object {
+     "description": "Ensure select element has an accessible name",
+     "help": "Select element must have an accessible name",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright",
+     "id": "select-name",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<select class=\"product_sort_container\" data-test=\"product-sort-container\"><option value=\"az\">Name (A to Z)</option><option value=\"za\">Name (Z to A)</option><option value=\"lohi\">Price (low to high)</option><option value=\"hilo\">Price (high to low)</option></select>",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "select",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.forms",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.n",
+       "TTv5",
+       "TT5.c",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.1.1",
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
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - combobox [ref=e18]:
          - option "Name (A to Z)" [selected]
          - option "Name (Z to A)"
          - option "Price (low to high)"
          - option "Price (high to low)"
    - generic [ref=e22]:
      - generic [ref=e23]:
        - link "Sauce Labs Backpack" [ref=e25]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e26]
        - generic [ref=e27]:
          - generic [ref=e28]:
            - link "Sauce Labs Backpack" [ref=e29]:
              - /url: "#"
              - generic [ref=e30]: Sauce Labs Backpack
            - generic [ref=e31]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e32]:
            - generic [ref=e33]: $29.99
            - button "Add to cart" [ref=e34] [cursor=pointer]
      - generic [ref=e35]:
        - link "Sauce Labs Bike Light" [ref=e37]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e38]
        - generic [ref=e39]:
          - generic [ref=e40]:
            - link "Sauce Labs Bike Light" [ref=e41]:
              - /url: "#"
              - generic [ref=e42]: Sauce Labs Bike Light
            - generic [ref=e43]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e44]:
            - generic [ref=e45]: $9.99
            - button "Add to cart" [ref=e46] [cursor=pointer]
      - generic [ref=e47]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e49]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e50]
        - generic [ref=e51]:
          - generic [ref=e52]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e53]:
              - /url: "#"
              - generic [ref=e54]: Sauce Labs Bolt T-Shirt
            - generic [ref=e55]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e56]:
            - generic [ref=e57]: $15.99
            - button "Add to cart" [ref=e58] [cursor=pointer]
      - generic [ref=e59]:
        - link "Sauce Labs Fleece Jacket" [ref=e61]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e62]
        - generic [ref=e63]:
          - generic [ref=e64]:
            - link "Sauce Labs Fleece Jacket" [ref=e65]:
              - /url: "#"
              - generic [ref=e66]: Sauce Labs Fleece Jacket
            - generic [ref=e67]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e68]:
            - generic [ref=e69]: $49.99
            - button "Add to cart" [ref=e70] [cursor=pointer]
      - generic [ref=e71]:
        - link "Sauce Labs Onesie" [ref=e73]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]:
            - link "Sauce Labs Onesie" [ref=e77]:
              - /url: "#"
              - generic [ref=e78]: Sauce Labs Onesie
            - generic [ref=e79]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e80]:
            - generic [ref=e81]: $7.99
            - button "Add to cart" [ref=e82] [cursor=pointer]
      - generic [ref=e83]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e85]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e86]
        - generic [ref=e87]:
          - generic [ref=e88]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e89]:
              - /url: "#"
              - generic [ref=e90]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e91]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e92]:
            - generic [ref=e93]: $15.99
            - button "Add to cart" [ref=e94] [cursor=pointer]
  - contentinfo [ref=e95]:
    - list [ref=e96]:
      - listitem [ref=e97]:
        - link "Twitter" [ref=e98]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e99]:
        - link "Facebook" [ref=e100]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e101]:
        - link "LinkedIn" [ref=e102]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e103]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 28 |     expect(results.violations).toEqual([]);
     |                                ^ Error: expect(received).toEqual(expected) // deep equality
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