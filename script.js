var devs = ["Astro 3000", "chickenman chickenman"];

function download() {
  var code = document.getElementById("txt").value;
  var textToSave = code;

  var hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/javascript,' + encodeURI(textToSave);
  hiddenElement.target = '_blank';
  var pname = window.prompt("Project Name");
  hiddenElement.download = pname + '.js';
  hiddenElement.click();
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  
  document.getElementById("profileimg").src = profile.getImageUrl();
  
  document.getElementById("profilename").innerHTML = profile.getName();
  
  
  if (devs.includes(profile.getName())) {
    document.getElementById("betam").innerHTML = "Developer Team"
  }
  
}


function installlib() {
  var librarytoinput = window.prompt("Library URL To Import")
  document.getElementById("libs").innerHTML += "<script src='"+librarytoinput+"'></script>"
}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    document.getElementById("profileimg").src = '';
  
    document.getElementById("profilename").innerHTML = '';
    document.getElementById("betam").innerHTML = '';
  }


function run() {
    var code = document.getElementById("txt").value;
  
    if (code == "var rick = 'astley';") {
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
    
    eval(code);
    
}
function save() {
    var code = document.getElementById("txt").value;

}




function darkmode() {
  //document.getElementById("bod").style = "background-image: url("darkmode.png");";
  
  document.getElementById("style").href = "darkstyle.css"
  
}
function lightmode() {
  
  document.getElementById("style").href = "style.css"
  
}
function helloworldtemp() {
  document.getElementById("txt").value = "alert('hello world');"
}

function nametemp() {
  document.getElementById("txt").value = 'var name = window.prompt("What is your name?")\nalert("Hi " + name)'
}
function cookieOK() {
  document.getElementById("cookies").innerHTML = '';
}

