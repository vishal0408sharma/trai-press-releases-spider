import urllib2
import re

links=open("traiPdfLinksFinal.txt")

def download_file(download_url):
    filename=download_url.rsplit('/', 1)[-1]
    filename=re.match('(.*)pdf',filename).group()
    filename=filename.replace("%20"," ");

    print "Downloading ",filename, "..."
  
    try: 
        response = urllib2.urlopen(download_url)

    except urllib2.URLError as e:
            print e.reason  

    except urllib2.HTTPError as e:
        print 'The server couldn\'t fulfill the request.'
        print 'Error code: ', e.code
    
    except URLError as e:
        print 'We failed to reach a server.'
        print 'Reason: ', e.reason
   
    else: 
        # everything is fine   
  
        file = open(filename, 'wb')
        file.write(response.read())
        
        file.close()
        print("Completed\n")

for line in links:
    print "new link ", line
    download_file(line)
    



