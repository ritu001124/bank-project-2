document.getElementById('submit-button').addEventListener('click', function () {
  
  const userEmailField = document.getElementById('user-email');
  const email = userEmailField.value;
  

  const userPasswordField = document.getElementById('user-password');
  const password = userPasswordField.value;
  

  if (email =="admin@gmail.com" && password == 123456){
    window.location.href = "./banking.html";
  }



})