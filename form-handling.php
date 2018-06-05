<!DOCTYPE html>
<html>
<body>


Thanks for getting in touch! We'll be get back to you as soon as possible.
<?php
// define variables and set to empty values
$name = $nameErr = $email = $emailErr = $cemail = $cemailErr = $phone = $phoneErr = $messagetitle = $message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["fname"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }

  if (empty($_POST["cemail"])) {
    $cemailErr = "Email is required";
  } else {
    $cemail = test_input($_POST["cemail"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
    if ($_POST["cemail"] != $_POST["email"]){
      $cemailErr = "Emails do not match";
    }
  }

  if (empty($_POST["tel"])) {
    $phoneErr = "Phone number is required";
  } else {
    $phone = test_input($_POST["tel"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[0-9 ]*$/",$phone)) {
      $phoneErr = "Only numbers and white space allowed";
    }
  }

  if (empty($_POST["message"])) {
    $messageErr = "A message is required";
  } else {
    $message = test_input($_POST["tel"]);
  }
}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  $message = str_replace("\n.", "\n..", $text);
  $to      = 'r.hovell@live.com';
  $headers = 'From: Web Design Contact' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
bool mail ( string $to , string $messagetitle , string $message , string $fname , string $phone , string $email, )
}  ?>

</body>
</html>
