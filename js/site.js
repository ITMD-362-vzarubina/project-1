//javascript is used to make sure that the username and
//password are filled out before form submition

function validateForm() {
  var username = document.forms["form1"]["username"].value;
  var password = document.forms["form1"]["password"].value;
  if (username == "" && password == "") {
    alert("Username and Password must be filled out");
    return false;
  }
  else if (password == "") {
    alert("Password must be filled out");
    return false;
  }
  else if (username == "" ) {
    alert("Username must be filled out");
    return false;
  }

}
