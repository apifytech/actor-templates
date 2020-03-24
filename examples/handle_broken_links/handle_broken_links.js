const Apify = require("apify");

Apify.main(async () => {
    const requestList = new Apify.RequestList({
        sources: [
            { url: "http://www.example.com/page-1" },
            { url: "http://www.example.com/page-2" },
            { url: "http://www.example.com/page-3" }
        ]
    });
    await requestList.initialize();
    // Function called for each successful request
    const handleRequestFunction = async ({ request }) => {
        console.log(`[success] ${request.url}`);
    };
    // Function called for each failed request
    const handleFailedRequestFunction = async ({ request }) => {
        console.log(`[failed] ${request.url}`);
    };
    // Create a BasicCrawler
    const crawler = new Apify.BasicCrawler({
        requestList,
        handleRequestFunction,
        handleFailedRequestFunction
    });
    // Run the crawler
    await crawler.run();
});
