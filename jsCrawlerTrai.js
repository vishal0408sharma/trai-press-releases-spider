//These are the three libraries in this web crawler
//Request is used to make HTTP requests. 
//Cheerio is used to parse and select HTML elements on the page. And 
//URL is used to parse URLs.

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

//We use the library request to visit the page and then 
//execute a callback after we get the response. 
//The callback is the anonymous function that looks like function(error, response, body) {...}

var START_URL = "http://trai.gov.in/Content/PressReleases.aspx";
var MAX_PAGES_TO_VISIT = 5000;

var pagesVisited = {};
var pdfsVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];
var pdfLinks = [];

var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;

fs = require('fs');

pagesToVisit.push(START_URL);
crawl();


function crawl() 
{
  if(numPagesVisited >= MAX_PAGES_TO_VISIT) 
  {
    console.log("Reached max limit of number of pages to visit.");
    console.log("Total number of links found = " + pdfLinks.length);
    console.log("All the pdf links are ");


    for(var i=0;i<pdfLinks.length;i++)
    {
        console.log(pdfLinks[i]);

    }

    return;
  }
 
  var nextPage = pagesToVisit.pop();
 
  if (nextPage in pagesVisited) 
  {
    // We've already visited this page, so repeat the crawl
    crawl();
  } 
 
  else 
  {
    // New page we haven't visited
    visitPage(nextPage, crawl);
  }

}

function visitPage(url, callback) 
{
  // Add page to our set
  pagesVisited[url] = true;
  numPagesVisited++;

  // Make the request
  console.log("Visiting page " + url);
  request(url, function(error, response, body) 
  {
     // Check status code (200 is HTTP OK)
     console.log("Status code: " + response.statusCode);
     if(response.statusCode !== 200) 
     {
         //in case of error, run callback function again
           callback();
           return;
     }
    
     // Parse the document body
     var $ = cheerio.load(body);
     collectInternalLinks($);
     // In this short program, our callback is just calling crawl()
     callback();

  });

}

function collectInternalLinks($) 
{
    var relativeLinks = $("a[href^='/']");
    console.log("Found " + relativeLinks.length + " relative links on page");

    relativeLinks.each(function() 
    {
        var lnk=baseUrl + $(this).attr('href');
        
      var substring = "pdf";
      var regex = new RegExp( substring );

      var result = regex.test( lnk );
        
        if(result)
        {
            //this is pdf link
            console.log("Found PDF " + lnk);
            var filename = lnk.split('/').pop()
            console.log("Filename " + filename);
            console.log("\n");
            
            fs.appendFile('traiPdfLinksFinal.txt', lnk+'\n', function (err) 
            {
              if (err) 
                  return console.log(err);

            });
        
            pdfLinks.push(lnk);
           
            //download file
            //??? missing this part 
            //download complete
        }

        else
            pagesToVisit.push(baseUrl + $(this).attr('href'));
    });
}


