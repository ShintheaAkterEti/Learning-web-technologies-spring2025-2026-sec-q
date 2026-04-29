<?php
    session_start();
    require_once('../model/db.php');

    if(isset($_GET['id'])){

        $id = intval($_GET['id']);   

        $con = getConnection();
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
    <title>User Details</title>
</head>
<body>

    <h1>User Details</h1>

    <a href="user_list.php">Back</a> |
    <a href="../controller/logout.php">Logout</a>
    <br><br>

    <table border="1" cellpadding="10">
        <tr>
            <td><b>ID</b></td>
            <td><?= $user['id'] ?></td>
        </tr>
        <tr>
            <td><b>Username</b></td>
            <td><?= $user['username'] ?></td>
        </tr>
        <tr>
            <td><b>Email</b></td>
            <td><?= $user['email'] ?></td>
        </tr>
    </table>

</body>
</html>