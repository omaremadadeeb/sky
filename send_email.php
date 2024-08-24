<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // معلومات البريد الإلكتروني
    $to = "oma31e@gmail.com"; // استبدل هذا البريد الإلكتروني بالبريد الذي تريد إرسال الرسالة إليه
    $subject = "New Star Gift Request";

    // جمع البيانات المرسلة من النموذج
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $giftType = $_POST['giftType'];

    // نص الرسالة
    $body = "You have received a new star gift request:\n\n";
    $body .= "Full Name: " . $fullName . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Phone: " . $phone . "\n";
    $body .= "Gift Type: " . $giftType . "\n";
    $body .= "Message: " . $message . "\n";

    // ترويسات البريد
    $headers = "From: " . $email;

    // إرسال البريد الإلكتروني
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
