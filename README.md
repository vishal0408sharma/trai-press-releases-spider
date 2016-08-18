# trai-press-releases-spider
javascript spider to download all the pdf files accessible on this link: http://trai.gov.in/Content/PressReleases.aspx


USAGE MANUAL

Pre-requisites-

node.js<br>
npm (node package manager)<br>
python 2.7<br>

After you have installed all the above tools, install the javascript libraries required for the crawler

Create a file named package.json with the following contents(this file is available in this repository, so no need to create it)

{
  "name": "simple-webcrawler-javascript",<br>
  "version": "0.0.0",<br>
  "description": "A simple webcrawler written in JavaScript",<br>
  "main": "crawler.js",<br>
  "author": "Stephen",<br>
  "license": "ISC",<br>
  "dependencies": {<br>
    "cheerio": "^0.19.0",<br>
    "url-parse": "^1.0.5",<br>
    "request": "^2.65.0"<br>
  }<br>
}<br>

Now, type in the terminal<br>
npm install<br>

This will install all these libraries. Now, you are ready to start crawling. 

To run the crawler, type in the terminal, <br>
nodejs jsCrawlerTrai.js<br>

This will create a text file traiPdfLinksFinal.txt in your script directory. This text file contains all the links to the pdf files in the trai website. 

As long as the script keeps running, it will keep add more links of pdf files to the text file. If you are just testing, you can interrupt this by pressing CTRL+C. 

Now, you have the links ready with you. You can download the pdf files by running the python script downloadPdf.py
Type in the terminal, <br>
python downloadPdf.py

Downloading of the files will be started. 
