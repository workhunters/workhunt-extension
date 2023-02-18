let title = document.getElementsByName('title')[0];
let firstname = document.getElementsByName('firstname')[0];
let middlename = document.getElementsByName('middlename')[0];
let lastname = document.getElementsByName('lastname')[0];
let email = document.getElementsByName('email')[0];
let phone = document.getElementsByName('phone')[0];
let country = document.getElementsByName('country')[0];
let state = document.getElementsByName('state')[0];
let city = document.getElementsByName('city')[0];
let addressline1 = document.getElementsByName('addressline1')[0];
let addressline2 = document.getElementsByName('addressline2')[0];
let pincode = document.getElementsByName('pincode')[0];

let yoe = document.getElementsByName('yoe')[0];

let linkedin = document.getElementsByName('linkedin')[0];
let twitter = document.getElementsByName('twitter')[0];
let github = document.getElementsByName('github')[0];
let stackoverflow = document.getElementsByName('stackoverflow')[0];


let gender = document.getElementsByName('gender')[0];

// let educationUI = document.getElementById('educations');s


// let education = []


// let addmoreeducation = document.getElementById('addmoreeducation');

// addmoreeducation.onclick = ()=>{
//     let edu = {
//         school: '',
//         degree: '',
//         start:'',
//         end:''
//     }
//     let element = document.createElement('div')
//     let allKeys = Object.keys(edu);
//     for(let key of allKeys){

//     }
//     educationUI.appendChild(element)
    

// }
var tempProfileInput = {
    title,
    firstname,
    middlename,
    lastname,
    email,
    phone,
    country,
    state,
    city,
    addressline1,
    addressline2,
    pincode,
    yoe, 
    
        linkedin,
        twitter,
        github,
        stackoverflow,
    gender
}
// console.log(tempProfileInput)


let saveBtn = document.getElementById("save")
saveBtn.onclick = ()=>{
    let value = {};
    let allKeys = Object.keys(tempProfileInput);
    for(let key of allKeys){
        value[key] = tempProfileInput[key].value;
    }
    chrome.storage.sync.set({'userprofile':JSON.stringify(value)},(e)=>{
        alert("SAVED")
        console.log(e)
    })
    // localStorage.setItem("userprofile",JSON.stringify(value))
}

 chrome.storage.sync.get(['userprofile'],(getData)=>{
  
    if('userprofile' in getData){
        getData = getData['userprofile']
        
        let value = JSON.parse(getData);
        let allKeys = Object.keys(tempProfileInput);
        for(let key of allKeys){
            tempProfileInput[key].value = value[key];
        }
    
    }
})


// Apply class to inputs
let allinputs = document.getElementsByTagName('input')
allinputs = [...allinputs, ...document.getElementsByTagName('select')]
for(let input of allinputs){
    input.className = "input"
}