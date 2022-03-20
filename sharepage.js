function submit() {
    var currentdate = new Date();

    
    var pname = document.getElementById("pname").value;
    
    var uname = document.getElementById("uname").value;
    
    var code = document.getElementById("txt").value;
    
    alert(pname + uname + code);
    window.open('mailto:a3animationsofficial123@gmail.com?subject=CodeSubmission&body=ProjectName: ' + pname + ' UserName: ' + uname + ' Code: ' + code + ' Time: ' + currentdate);
}
function run1() {
    var code = document.getElementById("code1").value;
    
    eval(code);
}
