<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['name','email'])->areRequired()->maxLength(50);
$validator->field('email')->isEmail();
$validator->field('comments')->maxLength(6000);


$mailer = $pp->getMailer();

//Using Aamazon AWS SES SMTP account
$mailer->IsSMTP();
$mailer->SMTPAuth   = true;
$mailer->SMTPSecure = "tls";
$mailer->Host       = "email-smtp.us-east-1.amazonaws.com";
$mailer->Username   = "taimurisrar806@gmail.com";
$mailer->Password   = "Rumyat806";

$mailer->setFrom('taimurisrar806@gmail.com', 'Form');

$pp->sendEmailTo('taimurisrar806@gmail.com'); // ← Your email here

echo $pp->process($_POST);