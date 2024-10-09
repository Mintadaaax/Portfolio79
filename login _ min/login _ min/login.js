function loginLoad() {
    
    let btn = document.getElementById("myLogin");
    btn.onsubmit = checkLogin;
}

function checkLogin() {
   
    const queryString = window.location.search;
    console.log(queryString);
    const URLParams = new URLSearchParams(queryString);
    const username = URLParams.get('username')
    console.log(username);
    
    const password = URLParams.get('password')
    console.log(password);

    const username_re = document.forms['myLogin']['username'].value;
    const password_re = document.forms['myLogin']['password'].value;
   

  
     if (username === username_re && password ===password_re) {
         alert("ล็อคอิน สำเร็จ");
         return true; 
     } else {
       
        alert("ชื่อหรือรหัสผิด กรุณากรอกใหม่");
        return false; // 
     }
}