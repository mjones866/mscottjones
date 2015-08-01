<?php

// Get values from form
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];


$to = "mjones866@gmail.com";
$subject = "A Message From mscottjones.co";
$message = " Name: " . $name . "\r\n Email: " . $email . "\r\n Text: " . $message;


$from = "MScottJones";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 

if(@mail($to,$subject,$message,$headers))
{
  print "<script>document.location.href='success.html';</script>";

}else{
  echo "Error! Please try again.";
}



?>






