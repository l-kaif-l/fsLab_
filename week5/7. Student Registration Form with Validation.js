<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration Form</title>
</head>
<body>
    <h2>Student Registration Form</h2>
    <form id="registrationForm" onsubmit="return validateForm()">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br><br>
        
        <label for="email">Email:</label><br>
        <input type="text" id="email" name="email"><br><br>
        
        <label for="age">Age:</label><br>
        <input type="number" id="age" name="age"><br><br>
        
        <label for="mobile">Mobile Number:</label><br>
        <input type="text" id="mobile" name="mobile"><br><br>
        
        <input type="submit" value="Register">
    </form>

    <script>
        function validateForm() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const age = document.getElementById('age').value;
            const mobile = document.getElementById('mobile').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const mobileRegex = /^[6-9]\d{9}$/;

            if (name === "" || email === "" || age === "" || mobile === "") {
                alert("All fields are required!");
                return false;
            }
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return false;
            }
            if (isNaN(age) || age < 18 || age > 100) {
                alert("Please enter a valid age between 18 and 100.");
                return false;
            }
            if (!mobileRegex.test(mobile)) {
                alert("Please enter a valid mobile number.");
                return false;
            }
            alert("Registration successful!");
            return true;
        }
    </script>
</body>
</html>
