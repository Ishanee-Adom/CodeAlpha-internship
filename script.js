document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateAge").addEventListener("click", function () {
        let dob = document.getElementById("dob").value;
        if (dob) {
            let birthDate = new Date(dob);
            let today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            let monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            alert("Your age is: " + age);
        } else {
            alert("Please enter your date of birth.");
        }
    });
});