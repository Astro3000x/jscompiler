
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
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  
  document.getElementById("profileimg").src = profile.getImageUrl();
  
  document.getElementById("profilename").innerHTML = profile.getName();
  
}
  
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    document.getElementById("profileimg").src = '';
  
    document.getElementById("profilename").innerHTML = '';
  }


function run() {
    var code = document.getElementById("txt").value;
    
    eval(code);
    
}
function save() {
    var code = document.getElementById("txt").value;

}




function darkmode() {
  //document.getElementById("bod").style = "background-image: url("darkmode.png");";
  document.getElementById("txt").style = "background-color: #323330; accent-color: #ECDC68; color: #ECDC68;"
  document.getElementById("style").href = "darkstyle.css"
}
function lightmode() {
  document.getElementById("txt").style = "background-color: #ECDC68; accent-color: #323330; color: #323330;"
  document.getElementById("style").href = "style.css"
}