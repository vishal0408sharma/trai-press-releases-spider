# trai-press-releases-spider
javascript spider to downloaded all the pdf files accessible on this link: http://trai.gov.in/Content/PressReleases.aspx


USAGE MANUAL

Pre-requisites-

node.js
npm (node package manager)
python 2.7

After you have installed all the above tools, install the javascript libraries required for the crawler

Create a file named package.json with the following contents

{
  "name": "simple-webcrawler-javascript",
  "version": "0.0.0",
  "description": "A simple webcrawler written in JavaScript",
  "main": "crawler.js",
  "author": "Stephen",
  "license": "ISC",
  "dependencies": {
    "cheerio": "^0.19.0",
    "url-parse": "^1.0.5",
    "request": "^2.65.0"
  }
}

Now, type in the terminal
npm install

This will install all these libraries. Now, you are ready to start crawling. 

To run the crawler, type in the terminal, 
nodejs jsCrawlerTrai.js

This will create a text file traiPdfLinksFinal.txt in your script directory. This text file contains all the links to the pdf files in the trai website. 

As long as the script keeps running, it will keep add more links of pdf files to the text file. If you are just testing, you can interrupt this by pressing CTRL+C. 

Now, you have the links ready with you. You can download the pdf files by running the python script downloadPdf.py
Type in the terminal, 
python downloadPdf.py

Downloading of the files will be started. 