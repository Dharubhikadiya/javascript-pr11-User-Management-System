 let checkuser = JSON.parse(localStorage.getItem('checklogin'));
   if (!checkuser) {
   window.location.href = "pages-login.html";
   }
