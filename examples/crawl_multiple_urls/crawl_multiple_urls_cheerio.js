const Apify = require('apify');

Apify.main(async () => {
    // Create a RequestList
    const requestList = await Apify.openRequestList('start-urls',
        [
            { url: 'http://www.example.com/page-1' },
            { url: 'http://www.example.com/page-2' },
            { url: 'http://www.example.com/page-3' },
        ]);
    // Function called for each URL
    const handlePageFunction = async ({ request, $ }) => {
        const title = $('title').text();
        console.log(`URL: ${request.url}\nTITLE: ${title}`);
    };
    // Create a CheerioCrawler
    const crawler = new Apify.CheerioCrawler({
        requestList,
        handlePageFunction,
    });
    // Run the crawler
    await crawler.run();
});
