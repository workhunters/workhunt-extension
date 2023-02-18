let FILLNOW = ()=>{
    let fillInput = (input, data)=>{
        if(input.name === 'name'){
            input.value = data['firstname'] + ' ' + data['lastname'];
        }
    
        if(input.name === 'firstname' || input.name === 'first_name' || input.id === 'firstname'||input.id === 'first_name'){
            input.value = data['firstname'];
        }
        if(input.name === 'lastname' || input.name === 'last_name' || input.id === 'lastname'||input.id === 'last_name'){
            input.value = data['lastname'];
        }
        if(input.name === 'email' || input.id === 'email'){
            input.value = data['email'];
        }
        if(input.name === 'number' || input.id === 'number' || input.name === 'phone' || input.id === 'phone' || input.name === 'phonenumber' || input.id === 'phonenumber'){
            input.value = data['phone'];
        }
    
    
        // Lever.co
        if(input.name === 'urls[LinkedIn]' || input.name === 'job_application_answers_attributes_0_text_value' || input.id === 'job_application_answers_attributes_0_text_value'){
            input.value = data['linkedin'];
        }
        // Lever.co
        if(input.name === 'urls[Twitter]'){
            input.value = data['twitter'];
        }
        // Lever.co
        if(input.name === 'urls[GitHub]'){
            input.value = data['github'];
        }
    }
    
    (async ()=>{
        try{
            let response = await chrome.storage.sync.get(['userprofile'])
            response = response['userprofile']
            let data = JSON.parse(response);
            console.log(data)
    
    
            let inputs = document.getElementsByTagName('input');
            console.log(inputs)
    
            for(let input of inputs){
                console.log(input.name)
                fillInput(input, data)
            }
        }catch(error){
            console.error(error)
        }
    })();
    
    
}
chrome.runtime.onMessage.addListener(function (response, sendResponse) {
    console.log(response);
    if(response.todo === 'fillTheForm'){
        FILLNOW();
    }
});
document.onreadystatechange = function () {
    console.log("NOW", document.readyState,chrome)
    FILLNOW();
    if (document.readyState == "interactive") {
        // Initialize your application or run some code.
       
    }
}
// chrome.runtime.openOptionsPage();
// FILLNOW();
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {

//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
   
//       if (request === "autofill-now"){
//         FILLNOW()
//         sendResponse(100)

//             // chrome.storage.sync.get(['userprofile'],(getData)=>{
//             //     console.log(getData)
//             //     if('userprofile' in getData){
//             //         getData = getData['userprofile']
                    
//             //         let value = JSON.parse(getData);
//             //         FILLNOW()
//             //         sendResponse(value);
                
//             //     }
//             // })


//       }
        
//     }
//   );