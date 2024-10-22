(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
  })();

  function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form fields
    if (!firstName || !lastName || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Prepare email data
    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_name: "Bhavya", // Replace with your name
      message: message,
      to_email:email
    };
    
    const templateParams2 = {
      from_name: `${firstName} ${lastName}`,
      to_name: "Bhavya", // Replace with your name
      message: message,
      from_email: email,
      to_email: 'bdisop1234@gmail.com'
    };

    // Send email
    emailjs.send('service_8seu6tc', 'template_q3ehmhn', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your message has been sent!");
      }, function(error) {
        console.log('FAILED...', error);
        alert("There was an error sending your message.");
      });

      emailjs.send('service_8seu6tc', 'template_q3ehmhn', templateParams2)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your message has been sent!");
      }, function(error) {
        console.log('FAILED...', error);
        alert("There was an error sending your message.");
      });
  }