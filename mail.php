<?php

$recepient = "dalexeev99@mail.ru";
$siteName = "Верстка сайтов";

$fio = trim($_POST["fio"]);
$tel = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$userMessage = trim($_POST["message"]);
$message = "Имя: $fio \nТелефон: $tel";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>