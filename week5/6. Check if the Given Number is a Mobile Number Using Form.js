<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile Number Validation</title>
</head>
<body>
    <form onsubmit="return validateMobileNumber()">
        <label for="mobile">Enter your mobile number:</label>
        <input type="text" id="mobile" name="mobile">
        <input type="submit" value="Submit">
    </form>

    <script>
        function validateMobileNumber() {
            const mobileNumber = document.getElementById('mobile').value;
            const regex = /^[6-9]\d{9}$/;
            if (regex.test(mobileNumber)) {
                alert("Valid mobile number!");
                return true;
            } else {
                alert("Invalid mobile number!");
                return false;
            }
        }
    </script>
</body>
</html>
