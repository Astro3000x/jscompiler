function download() {
  var code = document.getElementById("txt").value;
  document.write("Code: <br>" + code);
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
