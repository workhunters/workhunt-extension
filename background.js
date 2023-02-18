console.log("BACKGROUND",localStorage)
// chrome.runtime.openOptionsPage();

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("SF")
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting === "hello"){

            chrome.storage.sync.get(['userprofile'],(getData)=>{
                console.log(getData)
                if('userprofile' in getData){
                    getData = getData['userprofile']
                    
                    let value = JSON.parse(getData);
                    sendResponse(value);
                
                }
            })


      }
        
    }
  );