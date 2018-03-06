function validate() {
    let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    let passwordRegex = /^([\w\d]{5,15})$/;
    let emailRegex = /^(.+@.*\..*)$/;

    let usernameForm = $("#username");
    let emailForm = $("#email");
    let passwordForm = $("#password");
    let confirmPasswordForm = $("#confirm-password");
    let checkBox = $("#company");
    let companyNumber = $("#companyNumber");
    let submitBtn = $("#submit");

    checkBox.on("change", function () {
        if($(this).is(":checked")) {
            $("#companyInfo").css("display", "block");
        } else {
            $("#companyInfo").css("display", "none");
        }
    });

    submitBtn.on("click", function (event) {
        event.preventDefault();

        let username = usernameForm.val();
        let email = emailForm.val();
        let password = passwordForm.val();
        let confirmPassword = confirmPasswordForm.val();
        let invalid = false;
        let companyFieldSet = $("#companyInfo");

        if(usernameRegex.test(username)) {
            usernameForm.css('border-color', "");
        } else {
            usernameForm.css("border-color", "red");
            invalid = true;
        }

        if(emailRegex.test(email)) {
            emailForm.css('border-color', "");
        } else {
            emailForm.css('border-color', "red");
            invalid = true;
        }

        if(password !== confirmPassword) {
            passwordForm.css("border-color", "red");
            confirmPasswordForm.css("border-color", "red");
            invalid = true;
        } else {
            if(passwordRegex.test(password)) {
                passwordForm.css("border-color", "");
            } else {
                passwordForm.css("border-color", "red");
                invalid = true;
            }

            if(passwordRegex.test(confirmPassword)) {
                confirmPasswordForm.css("border-color", "");
            } else {
                confirmPasswordForm.css("border-color", "red");
                invalid = true;
            }
        }

        if(companyFieldSet.css("display") === "block") {
            let number = Number(companyNumber.val());
            if(number >= 1000 && number <= 9999) {
                companyNumber.css("border-color", "");
            } else {
                companyNumber.css("border-color", "red");
                invalid = true;
            }
        }

        if(invalid) {
            $("#valid").css("display", "none");
        } else {
            $("#valid").css("display", "block");
        }
    });
}