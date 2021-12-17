function clickEvent(first,last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}
document.querySelector("button").addEventListener("click", verify);
function verify() {
  var ver=document.querySelector("#pbtn").value;
  alert("OTP verified Successfully click OK to continue")


};
