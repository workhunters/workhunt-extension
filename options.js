let title = document.getElementsByName("title")[0];
let firstname = document.getElementsByName("firstname")[0];
let middlename = document.getElementsByName("middlename")[0];
let lastname = document.getElementsByName("lastname")[0];
let email = document.getElementsByName("email")[0];
let username = document.getElementsByName("username")[0];
let phone = document.getElementsByName("phone")[0];
let country = document.getElementsByName("country")[0];
let state = document.getElementsByName("state")[0];
let city = document.getElementsByName("city")[0];
let addressline1 = document.getElementsByName("addressline1")[0];
let addressline2 = document.getElementsByName("addressline2")[0];
let pincode = document.getElementsByName("pincode")[0];

let portfolio = document.getElementsByName("portfolio")[0];

// let password = document.getElementsByName('password')[0];

// let passwordFormItem = document.getElementById('password-form-item');

let yoe = document.getElementsByName("yoe")[0];
let latestcompany = document.getElementsByName("latestcompany")[0];

let linkedin = document.getElementsByName("linkedin")[0];
let twitter = document.getElementsByName("twitter")[0];
let github = document.getElementsByName("github")[0];
let stackoverflow = document.getElementsByName("stackoverflow")[0];

let gender = document.getElementsByName("gender")[0];

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
  latestcompany,
  linkedin,
  twitter,
  github,
  stackoverflow,
  gender,
  portfolio,
};

let saveBtn = document.getElementById("save");
saveBtn.onclick = async () => {
  let value = {};
  let allKeys = Object.keys(tempProfileInput);
  for (let key of allKeys) {
    value[key] = tempProfileInput[key].value;
  }
  chrome.storage.sync.set({ userprofile: JSON.stringify(value) }, (e) => {
    alert("SAVED !");
    // console.log(e);
  });
  // localStorage.setItem("userprofile",JSON.stringify(value))
};

chrome.storage.sync.get(["userprofile"], (getData) => {
  if ("userprofile" in getData) {
    getData = getData["userprofile"];

    let value = JSON.parse(getData);
    let allKeys = Object.keys(tempProfileInput);
    for (let key of allKeys) {
      tempProfileInput[key].value = value[key];
    }
  }
});

chrome.storage.sync.get(["user"], (getData) => {
  //   console.log(getData);
  if ("user" in getData) {
    let user = JSON.parse(getData.user);
    // console.log(user);
    if (user.isLoggedIn) {
      // passwordFormItem.style.display = "none";
    } else {
      // passwordFormItem.style.display = "block";
    }
  } else {
    // passwordFormItem.style.display = "block";
  }
});
// Apply class to inputs
let allinputs = document.getElementsByTagName("input");
allinputs = [...allinputs, ...document.getElementsByTagName("select")];
for (let input of allinputs) {
  input.className = "input";
}

firstname.value = "Pushpendra";
lastname.value = "Vishwakarma";
email.value = "pushpendra@gmail.com";
username.value = "pushpendrahpx";
phone.value = "2344323432";
country.value = "India";
state.value = "Gujarat";
city.value = "Surat";
addressline1.value = "601, Swami Bhavan";
addressline2.value = "SVNIT";
pincode.value = "390013";
yoe.value = 1;
latestcompany.value = "Factors.AI";
linkedin.value = "https://www.linkedin.com/in/pushpendrahpx/";
twitter.value = "https://twitter.com/pushpendrahpx20";
github.value = "https://github.com/pushpendrahpx";
gender.value = "male";
portfolio.value = "https://pushpendrahpx.me";
