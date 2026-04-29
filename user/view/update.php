<?php
    require_once('../model/db.php');

    if(isset($_POST['submit'])){

        $id = $_POST['id'];
        $username = $_POST['username'];
        $email = $_POST['email'];

      
        if($id == "" || $username == "" || $email == ""){
            echo "Null value found!";
        }else{

            $con = getConnection();

            $sql = "UPDATE users SET username='$username', email='$email' WHERE id=$id";

            $status = mysqli_query($con, $sql);

            if($status){
                header('location: ../view/user_list.php');
            }else{
                echo "Update failed!";
            }
        }

    }else{
        header('location: ../view/user_list.php');
    }
    function login($user){

    $con = getConnection();

    $username = $user['username'];
    $password = $user['password'];

    $sql = "SELECT * FROM users 
            WHERE username='$username' AND password='$password'";

    $result = mysqli_query($con, $sql);

    return (mysqli_num_rows($result) == 1);
}
?>