<?php
    session_start();
    require_once('../model/db.php');

    $con = getConnection();

    // get ID from URL
    if(isset($_GET['id'])){
        $id = $_GET['id'];

        $sql = "SELECT * FROM users WHERE id=$id";
        $result = mysqli_query($con, $sql);
        $user = mysqli_fetch_assoc($result);
    }else{
        header('location: user_list.php');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Edit</title>
</head>
<body>
    <h1>Edit User!</h1>
    <a href='user_list.php'>Back</a> |
    <a href='../controller/logout.php'>Logout</a>
    <br><br>

    <form method="post" action="../view/update.php">
        
        ID: 
        <input type="text" name="id" readonly value="<?= $user['id'] ?>"/> <br><br>

        USERNAME: 
        <input type="text" name="username" value="<?= $user['username'] ?>"/> <br><br>

        EMAIL: 
        <input type="text" name="email" value="<?= $user['email'] ?>"/> <br><br>

        <input type="submit" name="submit" value="Update"/>
    </form>
</body>
</html>