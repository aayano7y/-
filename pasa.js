
    function validateForm() {
        var user = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        var error = document.getElementById("error");

        // Validation
        if (user === "" || pass === "") {
            error.textContent = "Please fill all fields";
            return;
        }

        // Your custom login credentials
        if (user === "Admin" && pass === "122333") {
            error.style.color = "#00ff88";
            error.textContent = "Login successful! Redirecting...";

            // Redirect to Instagram
            setTimeout(function() {
                window.location.href = "https://www.instagram.com/aayan.i0?igsh=MTVwNG52Z2pwMTExMA==";
            }, 1200);

        } else {
            error.style.color = "#ff3b3b";
            error.textContent = "Invalid username or password";
        }
    }
