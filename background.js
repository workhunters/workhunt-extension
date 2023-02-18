console.log("BACKGROUND")

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
   
      if (request === "fillTheForm"){
        // // FILLNOW()
        // let x = document.getElementById("body")
        // console.log("SD",x)
        // sendResponse(100)

        //     // chrome.storage.sync.get(['userprofile'],(getData)=>{
        //     //     console.log(getData)
        //     //     if('userprofile' in getData){
        //     //         getData = getData['userprofile']
                    
        //     //         let value = JSON.parse(getData);
        //     //         FILLNOW()
        //     //         sendResponse(value);
                
        //     //     }
        //     // })


      }
        
    }
  );