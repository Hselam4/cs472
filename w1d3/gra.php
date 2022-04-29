<?php

$name = $_POST['name'];
$id = $_POST['id'];

if (strlen($name) == 0 || strlen($id) == 0) {
    echo "<script>alert('Please fill form fields');</script>";
} elseif ($name == 'Selamawit Habte' && $id == '112179') {
    echo "Your grade is 97.99";
} else {
    echo "<script>alert('Grade not found.');</script>";
}