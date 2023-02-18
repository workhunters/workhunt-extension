let createBtn = document.getElementById('create')
let editBtn = document.getElementById('edit')
let autofillBtn = document.getElementById('autofill')

let loginBtn = document.getElementById('login')
let signupBtn = document.getElementById('signup')

let afterlogin = document.getElementById('afterlogin');
let beforelogin = document.getElementById('beforelogin');


// OnClick Events
loginBtn.onclick = async ()=>{
    let data = await fetch('https://api.github.com/users/pushpendrahpx')
    console.log(data)
}


// Intiial Dirty Check
let checkInitialDirty = (user)=>{
    if(user?.isLoggedIn === false){

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
document.querySelector('#go-to-options').addEventListener('click', function() {
    console.log(chrome.runtime)
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options.html'));
    }
});

let initialAuth = ()=>{
    chrome.storage.sync.get(['user'],(getData)=>{
        console.log(getData)
        if('user' in getData){
            let user = JSON.parse(getData.user);
            console.log(user)
            checkInitialDirty(user);

        }else{
            afterlogin.style.display = "none";
            beforelogin.style.display = "block";
            chrome.storage.sync.set({
                user:JSON.stringify({
                    isLoggedIn: false,
                    data:{}
                })
            },(e)=>{
                console.log("CREATED STORAGWE",e)
            })
        }
    })
}
initialAuth()