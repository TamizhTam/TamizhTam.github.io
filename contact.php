<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$mobile = $_REQUEST['mobile'];
$message = $_REQUEST['message'];

if(empty($name) || empty($email) || empty($mobile) || empty($message))
{
  echo "Please fill all the fields";
}
else
{
  mail("tamizh1129@gmail.com","Message from Tamizh Portfolio", $message, "From: $name <$email>");
  echo "<script type='text/javascript'>alert('your message sent succeessfully');
        windows.history.log(-1);
        </script>";
}
?>
