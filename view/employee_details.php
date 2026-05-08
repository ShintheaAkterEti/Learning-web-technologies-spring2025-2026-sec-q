<?php
require_once('../model/employeeModel.php');

$id = $_GET['id'];
$employee = getEmployeeById($id);

if(!$employee){
    echo "Employee not found";
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Employee Details</title>
</head>
<body>

<h2>Employee Details</h2>

<table border="1" cellpadding="10">

    <tr>
        <td>ID</td>
        <td><?php echo $employee['id']; ?></td>
    </tr>

    <tr>
        <td>Employee Name</td>
        <td><?php echo $employee['employee_name']; ?></td>
    </tr>

    <tr>
        <td>Contact No</td>
        <td><?php echo $employee['contact_no']; ?></td>
    </tr>

    <tr>
        <td>Username</td>
        <td><?php echo $employee['username']; ?></td>
    </tr>

    <tr>
        <td>Password</td>
        <td><?php echo $employee['password']; ?></td>
    </tr>

    <tr>
        <td>Role</td>
        <td><?php echo $employee['role']; ?></td>
    </tr>

</table>

<br>

<a href="dashboard.php">Back</a>

</body>
</html>