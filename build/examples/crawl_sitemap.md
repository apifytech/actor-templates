---
id: crawl-sitemap
title: Crawl a sitemap
---

This example downloads and crawls the URLs from a sitemap.

<!--DOCUSAURUS_CODE_TABS-->

<!-- BasicCrawler -->

```javascript
const Apify = require("apify");

// A link to a list of Fortune 500 companies' websites available on GitHub.
const CSV_LINK =
    "https://gist.githubusercontent.com/hrbrmstr/ae574201af3de035c684/raw/f1000.csv";

Apify.main(async () => {
    // Add URLs to a RequestList from a sitemap
    const requestList = new Apify.RequestList({
        sources: [{ requestsFromUrl: CSV_LINK }] // Sitemap url goes here
    });
    // Initialize the RequestList
    await requestList.initialize();
    // Function called for each URL
    const handleRequestFunction = async ({ request }) => {
        console.log(request.url);
    };
    // Create a BasicCrawler
    const crawler = new Apify.BasicCrawler({
        requestList,
        handleRequestFunction,
        maxRequestsPerCrawl: 10 // Limitation for only 10 requests (do not use if you want to crawl a sitemap)
    });
    // Run the crawler
    await crawler.run();
});
```

<!-- CheerioCrawler -->

```javascript
const Apify = require("apify");

const CSV_LINK =
    "https://gist.githubusercontent.com/hrbrmstr/ae574201af3de035c684/raw/f1000.csv";

Apify.main(async () => {
    // Add URLs to a RequestList from a sitemap
    const requestList = new Apify.RequestList({
        sources: [{ requestsFromUrl: CSV_LINK }] // Sitemap url goes here
    });
    // Initialize the RequestList
    await requestList.initialize();
    // Function called for each URL
    const handlePageFunction = async ({ request, $ }) => {
        console.log(request.url);
    };
    // Create a CheerioCrawler
    const crawler = new Apify.CheerioCrawler({
        requestList,
        handlePageFunction,
        maxRequestsPerCrawl: 10 // Limitation for only 10 requests (do not use if you want to crawl a sitemap)
    });
    // Run the crawler
    await crawler.run();
});
```

<!-- PuppeteerCrawler -->

 > To run this example on the Apify Platform, select the `Node.js 12 + Chrome on Debian (apify/actor-node-chrome)` 
 >base image on the **Source** tab when configuring the actor.

```javascript
const Apify = require("apify");

const CSV_LINK =
    "https://gist.githubusercontent.com/hrbrmstr/ae574201af3de035c684/raw/f1000.csv";

Apify.main(async () => {
    // Add URLs to a RequestList from a sitemap
    const requestList = new Apify.RequestList({
        sources: [{ requestsFromUrl: CSV_LINK }] // Sitemap url goes here
    });
    // Initialize the RequestList
    await requestList.initialize();
    // Function called for each URL
    const handlePageFunction = async ({ request, page }) => {
        console.log(request.url);
    };
    // Create a PuppeteerCrawler
    const crawler = new Apify.PuppeteerCrawler({
        requestList,
        handlePageFunction,
        maxRequestsPerCrawl: 10 // Limitation for only 10 requests (do not use if you want to crawl a sitemap)
    });
    // Run the crawler
    await crawler.run();
});
```

<!--END_DOCUSAURUS_CODE_TABS-->