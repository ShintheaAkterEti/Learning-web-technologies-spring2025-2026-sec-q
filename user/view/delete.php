<?php
    require_once('../model/db.php');

    if(isset($_GET['id'])){

        $id = intval($_GET['id']);   // safer

        $con = getConnection();

        $sql = "DELETE FROM users WHERE id=$id";

        $status = mysqli_query($con, $sql);

        if($status){
            header('location: ../view/user_list.php');
        }else{
            echo "Delete failed!";
        }

    }else{
        header('location: ../view/user_list.php');
    }
?>