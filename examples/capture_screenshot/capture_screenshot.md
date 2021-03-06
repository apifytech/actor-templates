---
id: capture-screenshot
title: Capture a screenshot
---

> To run this example on the Apify Platform, select the `apify/actor-node-puppeteer-chrome` image for your Dockerfile.

This example captures a screenshot of a web page using `Puppeteer`. It would look almost exactly the same with `Playwright`.

<!--DOCUSAURUS_CODE_TABS-->

<!-- PageScreenshot -->
\
Using `page.screenshot()`:

{{#code}}puppeteer_page_screenshot.js{{/code}}

<!-- ApifySnapshot -->
\
Using `Apify.utils.puppeteer.saveSnapshot()`:

{{#code}}puppeteer_apify_snapshot.js{{/code}}

<!--END_DOCUSAURUS_CODE_TABS-->

This example captures a screenshot of multiple web pages when using `PuppeteerCrawler`:

<!--DOCUSAURUS_CODE_TABS-->

<!-- PageScreenshot -->
\
Using `page.screenshot()`:

{{#code}}puppeteer_crawler_page_screenshot.js{{/code}}

<!-- ApifySnapshot -->
\
Using `Apify.utils.puppeteer.saveSnapshot()`:

{{#code}}puppeteer_crawler_apify_snapshot.js{{/code}}

<!--END_DOCUSAURUS_CODE_TABS-->

In both examples using `page.screenshot()`, a `key` variable is created based on the URL of the web page.
 This variable is used as the key when saving each screenshot into a key-value store.
