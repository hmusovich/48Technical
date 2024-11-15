<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Recipient's email address
    $to = "hmusovich@gmail.com";  // Replace with your email
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/html; charset=UTF-8";

    // Email subject and body
    $email_subject = "New contact form submission: " . $subject;
    $email_message = "<strong>Name:</strong> $name<br>" .
                     "<strong>Email:</strong> $email<br>" .
                     "<strong>Subject:</strong> $subject<br>" .
                     "<strong>Message:</strong><br>" . nl2br($message);

    // Send the email
    if (mail($to, $email_subject, $email_message, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "There was a problem sending your message. Please try again later.";
    }
}
?>
