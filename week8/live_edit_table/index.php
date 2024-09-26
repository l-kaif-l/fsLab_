<!DOCTYPE html>
<html>
<head>
    <title>Live Editable Table</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="dist/jquery.tabledit.js"></script>
    <script type="text/javascript" src="custom_table_edit.js"></script>
</head>
<body>
    <div class="container">
        <h2>Live Editable Table</h2>
        <table id="data_table" class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Designation</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <?php
                include_once("db_connect.php");
                $sql_query = "SELECT id, name, gender, age, designation, address FROM developers LIMIT 10";
                $resultset = mysqli_query($conn, $sql_query) or die("database error:". mysqli_error($conn));
                while( $developer = mysqli_fetch_assoc($resultset) ) { ?>
                    <tr id="<?php echo $developer['id']; ?>">
                        <td><?php echo $developer['id']; ?></td>
                        <td><?php echo $developer['name']; ?></td>
                        <td><?php echo $developer['gender']; ?></td>
                        <td><?php echo $developer['age']; ?></td>
                        <td><?php echo $developer['designation']; ?></td>
                        <td><?php echo $developer['address']; ?></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</body>
</html>
