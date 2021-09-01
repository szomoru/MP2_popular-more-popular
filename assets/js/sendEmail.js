function sendMail(contactForm) {
    emailjs.send("CI_project", "pmpmp2", {
        "from_name": contactForm.name.value,
        "message": contactForm.message.value,
        "from_email": contactForm.emailaddress.value});

    document.getElementById("mailform").reset();
    return false;  // To block from loading a new page
}
