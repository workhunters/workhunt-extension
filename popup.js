let createBtn = document.getElementById('create')
let editBtn = document.getElementById('edit')
let autofillBtn = document.getElementById('autofill')

let loginBtn = document.getElementById('login')
let signupBtn = document.getElementById('signup')

let afterlogin = document.getElementById('afterlogin');
let beforelogin = document.getElementById('beforelogin');

let emaillogin = document.getElementsByName('emaillogin')[0];
let passwordlogin = document.getElementsByName('passwordlogin')[0];


const moveToOptions = function() {

    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options.html'));
    }
};

// OnClick Events
autofillBtn.onclick = ()=>{
    console.log("SEND")
    chrome.tabs.query({
        active: !0,
        currentWindow: !0
    }, function(t) {
        console.log("SEND TO MYSCRIPT")
        chrome.tabs.sendMessage(t[0].id, {
            todo: "fillTheForm"
        })
    })
}
// LOGIN EVENT
loginBtn.onclick = async ()=>{
    console.log("LOGIN")
    let emailValue = emaillogin.value;
    let passwordValue = passwordlogin.value;
    
    let key = "SDFGDSFGDGD";    
    let x = {"title":"mr","firstname":"sdffdsa","middlename":"","lastname":"Vishwakarma","email":"pushpendra@factis.ddf","phone":"sdf","country":"","state":"","city":"","addressline1":"","addressline2":"","pincode":"","yoe":"","linkedin":"","twitter":"","github":"","stackoverflow":"","gender":"male"};

    chrome.storage.sync.set({'userprofile':JSON.stringify(x)},(e)=>{
        alert("SAVED")
        console.log(e)
    })
    chrome.storage.sync.set({'user':JSON.stringify({
        isLoggedIn: true,
        data:{},
        key: null
    })},(e)=>{
        console.log(e)
        checkInitialDirty()
    })

}
signupBtn.onclick = async ()=>{
    
    console.log("SIGNUP")
    moveToOptions()
    
}
editBtn.onclick = moveToOptions;
createBtn.onclick = moveToOptions;


// Intiial Dirty Check
let checkInitialDirty = (user)=>{
    if(user?.isLoggedIn === false){

        // afterlogin.style.display = "block";
        // beforelogin.style.display = "none";
        afterlogin.style.display = "none";
        beforelogin.style.display = "block";
    }else{
        afterlogin.style.display = "block";
        beforelogin.style.display = "none";
        
    }
}

// initial undefined state
let initialState = {
    profile:{

    }
}
let state = null;
state = localStorage.getItem("state");

if(state === null){
    state = initialState;
}
localStorage.setItem("state",JSON.stringify(initialState))
console.log({
    createBtn,
    editBtn,
    autofillBtn
})


let initialAuth = ()=>{
    // afterlogin()
    afterlogin.style.display = "block";
    beforelogin.style.display = "none";
    editBtn.style.display = 'none'
    
    // chrome.storage.sync.get(['user'],(getData)=>{
    //     console.log(getData)
    //     if('user' in getData){
    //         let user = JSON.parse(getData.user);
    //         console.log(user)
    //         checkInitialDirty(user);

    //     }else{
    //         afterlogin.style.display = "none";
    //         beforelogin.style.display = "block";
    //         chrome.storage.sync.set({
    //             user:JSON.stringify({
    //                 isLoggedIn: false,
    //                 data:{},
    //                 key: null
    //             })
    //         },(e)=>{
    //             console.log("CREATED STORAGWE",e)
    //         })
    //     }
    // })
    // chrome.storage.sync.get(['userprofile'],(getData)=>{
    //     console.log(getData)
    //     if('userprofile' in getData){
    //         getData = getData['userprofile']
            
    //         let value = JSON.parse(getData);
    //         console.log(value)
    //         createBtn.style.display = 'none';
    //         editBtn.style.display = 'block';
            
    //     }else{
    //         createBtn.style.display = 'block';
    //         editBtn.style.display = 'none';

    //     }
    // })
}
initialAuth()