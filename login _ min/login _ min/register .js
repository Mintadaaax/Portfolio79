document.addEventListener('DOMContentLoaded', function () {
    function validateForm(event) {
        event.preventDefault();

        const form = document.forms['myRegister'];
        const password = form['password'][0].value; // 
        const retypePassword = form['password'][1].value; // 
        let errorMessage = document.getElementById("errormsg"); // 
        errorMessage.innerText = ''; // ลบข้อความแจ้งเตือนเก่าทิ้ง

        for (let i = 0; i < form.length; i++) {
            if (form[i].required && form[i].value === '') {
                errorMessage.innerText = "Please complete all required fields";
                form[i].focus();
                return false; // 
            }
        }

        if (password !== retypePassword) {
            errorMessage.innerText = "Password incorrect. Please verify and try again.";
            form['password'][1].focus(); // 
            return false; // 
        }

        form.submit(); // 
    }

    const form = document.getElementById('myRegister');
    form.onsubmit = function (event) {
        validateForm(event);


    };

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    return true;

});


