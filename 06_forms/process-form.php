<?php
$surname  = $_POST['surname'];
$forename = $_POST['forename'];
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Form Processed</title>
    </head>
    <body>
        <h1>Processing form...</h1>
        <p>Your form has been received:</p>

        <?php if ( isset($_POST['surname']) ) { ?>

        <p>Surname: <?php echo $surname; ?></p>
        <p>Forname: <?php echo $forename; ?></p>

        <?php } else { ?>

        <p>ERROR - it all went very wrong!!</p>

        <?php } ?>

    </body>
</html>

