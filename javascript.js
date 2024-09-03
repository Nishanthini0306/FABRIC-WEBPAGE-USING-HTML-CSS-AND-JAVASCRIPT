function validationform() {
    // Get form elements
    var fname = document.forms["validateform"]["fname"].value;
    var email = document.forms["validateform"]["email"].value;
    var city = document.forms["validateform"]["city"].value;
    var phonenumber = document.forms["validateform"]["phonenumber"].value;
    var address = document.forms["validateform"]["address"].value;
    var email = document.forms["validateform"]["email"].value;

    // Check if the fields are empty
    if (fname === "") {
        alert("Firstname must be filled out");
        return false;
    }
    if (city === "") {
        alert("City must be filled out");
        return false;
    }
    if (phonenumber === "") {
        alert("PhoneNumber must be filled out");
        return false;
    }
    if (address === "") {
        alert("Address must be filled out");
        return false;
    }

    // Validate phone number (should be a valid number)
    if (isNaN(phonenumber)) {
        alert("PhoneNumber must be a valid number");
        return false;
    }

    // Validate email address (must be a Gmail address)
    var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail address");
        return false;
    }
    else
        alert("Submitted Successfully");
    return true; // If all fields are valid
}




