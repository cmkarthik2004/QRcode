let qrImage = document.getElementById("qrImage");

        // Function to generate the QR code with user details
        function generateQR() {
            // Get the values entered by the user
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let address = document.getElementById("address").value;

            // Format the user details into a string
            let userDetails = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`;

            // Generate the QR code with the formatted user details
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(userDetails);
        }