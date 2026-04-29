<?php
    session_start();
    require_once('../model/db.php');  
    $con = getConnection();

    $sql = "SELECT * FROM users";   
    $result = mysqli_query($con, $sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <h1>User list </h1>
    <a href='home.php'>Back</a> |
    <a href='../controller/logout.php'>Logout</a>
    <br>

    <table border=1>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>

        <?php while($user = mysqli_fetch_assoc($result)){ ?>

        <tr>
            <td><?= $user['id']; ?></td>
            <td><?= $user['username']; ?></td>
            <td><?= $user['email']; ?></td>
            <td>
                <a href="edit.php?id=<?= $user['id'] ?>">EDIT</a> |
                <a href="delete.php?id=<?= $user['id'] ?>">DELETE</a> |
               <a href="details.php?id=<?= $user['id'] ?>">DETAILS</a>
            </td>
        </tr>

        <?php } ?>
    </table>
</body>
</html>