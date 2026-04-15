


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login</title>
</head>
<body>
        <form method="post" enctype="multipart/form-data">
            <fieldset>
                <legend>Forgot Password</legend>
                Email:   <input type="email" name="email" value="<?php if(isset($username)){echo $username;}?>"> <br>
                <input type="submit" name="submit" value="Submit">
                          <a href="dash.php">Dash</a> |
<a href="registration.php">Registration</a> |
<a href="login.php">Login</a> |
<a href="forgot.php">Forgot Password</a><!DOCTYPE html>
<a href="home.html">Home</a><!DOCTYPE html>

            </fieldset>
        </form>
</body>
</html>