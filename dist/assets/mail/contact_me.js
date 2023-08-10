const errorMessages = {
  nameempty: "Introduce tu nombre.",
  namefalse: "No se permiten caracteres especiales en el nombre.",
  phoneempty: "Introduce tu número telefónico.",
  phonefalse: "Introduce un número telefónico valido.",
  emailempty: "Introduce tu correo electrónico.",
  emailfalse: "Introduce un correo electrónico válido.",
  messageempty: "Introduce tu mensaje."
}

const sendInfoMenssage = (name, email, phone, subject, message) => {
  let info__message = {
    name: name,
    phone: phone,
    email: email,
    subject: subject,
    message: message,
  };
  console.log(JSON.stringify(info__message));
  return fetch("..//dist/assets/mail/contact_me.php", {
    method: "POST",
    body: JSON.stringify(info__message),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

(() => {
  document
    .querySelector("#send__message__button")
    .addEventListener("click", async (event) => {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      const name = document.querySelector("#name__contact__form").value;
      const email = document.querySelector("#email__contact__form").value;
      const phone = document.querySelector("#phone__contact__form").value;
      const subject = document.querySelector("#subject__contact__form").value;
      const message = document.querySelector("#message__contact__form").value;
      const errorAlert = document.querySelector("#error__alert");
      const successAlert = document.querySelector("#success__alert");
      const firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      const valid_data = validateData(name, email, phone, message);
      if (firstName.indexOf(" ") >= 0) {
        firstName = name.split(" ").slice(0, -1).join(" ");
      }
      if (valid_data !== false && typeof valid_data !== undefined) {
        try {
          if(errorAlert.classList.contains("inline-flex")){
            errorAlert.classList.replace("inline-flex","hidden");
          }
          let respuesta = await sendInfoMenssage(
            name,
            email,
            phone,
            subject,
            message
          );
          if (respuesta == true) {
            document.querySelector("#name__contact__form").value="";
            document.querySelector("#email__contact__form").value="";
            document.querySelector("#phone__contact__form").value="";
            document.querySelector("#subject__contact__form").value="";
            document.querySelector("#message__contact__form").value="";
            successAlert.classList.replace("hidden","inline-flex");
            setTimeout(function(){
              successAlert.classList.replace("inline-flex","hidden");
            }, 5000);
          }
        } catch (err) {
          console.log(err);
        }
      }
      else {
        const message = document.querySelector("#error__alert__message");
        message.innerHTML="";
        const errorList = document.createElement('ul');
        errorList.setAttribute('class', 'list-disc');
        const formElements = document.querySelectorAll("[data-valid-input]");
        formElements.forEach(element => {
          const error = errorMessages[`${element.dataset.contactInput}${element.dataset.validInput}`];
          if (error) {
            let errorLi = document.createElement('li');
            errorLi.innerHTML = error;
            errorList.appendChild(errorLi);
          }
          message.appendChild(errorList);
          errorAlert.classList.replace("hidden", "inline-flex");
        });
      }
      function validateData(name, email, phone, message) {
        var dataArray = {};
        var characterRegName = /^\s*[a-zA-Z0-9_ ,\s]+\s*$/;
        var numericRegPhone = /^\s*?[0-9]{10,}\s*$/;
        var emailRegEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        dataArray["name"] = validateName();
        dataArray["email"] = validateMail();
        dataArray["phone"] = validatePhone();
        dataArray["message"] = validateMessage();
        function validateName() {
          let nombreForm = document.querySelector("#name__contact__form");
          if (name == "") {
            nombreForm.classList.add(
              "border-red-600",
              "border-4",
              "bg-red-200"
            );
            nombreForm.dataset.validInput = "empty";
            return false;
          } else {
            if (!characterRegName.test(name)) {
              nombreForm.classList.add(
                "border-red-600",
                "border-4",
                "bg-red-200"
              );
              nombreForm.dataset.validInput = "false";
              return false;
            } else {
              if (nombreForm.dataset.validInput == "false" | nombreForm.dataset.validInput == "empty") {
                nombreForm.classList.remove(
                  "border-red-600",
                  "border-4",
                  "bg-red-200"
                );
                nombreForm.dataset.validInput = "true";
              }
              return true;
            }
          }
        }
        function validateMail() {
          let emailForm = document.querySelector("#email__contact__form");
          if (email == "") {
            emailForm.classList.add(
              "border-red-600",
              "border-4",
              "bg-red-200"
            );
            emailForm.dataset.validInput = "empty";
            return false;
          } else {
            if (!emailRegEmail.test(email)) {
              emailForm.classList.add(
                "border-red-600",
                "border-4",
                "bg-red-200"
              );
              emailForm.dataset.validInput = "false";
            } else {
              if (emailForm.dataset.validInput == "false" | emailForm.dataset.validInput == "empty") {
                emailForm.classList.remove(
                  "border-red-600",
                  "border-4",
                  "bg-red-200"
                );
                emailForm.dataset.validInput = "true";
              }
              return true;
            }
          }
        }
        function validatePhone() {
          let phoneForm = document.querySelector("#phone__contact__form");
          if (phone == "") {
            phoneForm.classList.add(
              "border-red-600",
              "border-4",
              "bg-red-200"
            );
            phoneForm.dataset.validInput = "empty";
            return false;
          } else {
            if (!numericRegPhone.test(phone)) {
              phoneForm.classList.add(
                "border-red-600",
                "border-4",
                "bg-red-200"
              );
              phoneForm.dataset.validInput = "false";
              return false;
            } else {
              if (phoneForm.dataset.validInput == "false" | phoneForm.dataset.validInput == "empty") {
                phoneForm.classList.remove(
                  "border-red-600",
                  "border-4",
                  "bg-red-200"
                );
                phoneForm.dataset.validInput = "true";
              }
              return true;
            }
          }
        }
        function validateMessage() {
          let messageForm = document.querySelector("#message__contact__form");
          if (message == "") {
            messageForm.classList.add(
              "border-red-600",
              "border-4",
              "bg-red-200"
            );
            messageForm.dataset.validInput = "empty";
            return false;
          } else {
            if (messageForm.dataset.validInput == "false" | messageForm.dataset.validInput == "empty") {
              messageForm.classList.remove(
                "border-red-600",
                "border-4",
                "bg-red-200"
              );
              messageForm.dataset.validInput = "true";
            }
            return true;
          }
        }
        if (Object.keys(dataArray).every((k) => dataArray[k])) return true;
        else return false;
      }
    });
  /*$("#contactForm input").focus(function (event) {
    if ($(this).hasClass("required-field")) {
      $(this).removeAttr("style");
      $(this).parent().next("span").remove();
      $(this).removeClass("required-field");
    }
  });
  $("#contactForm textarea").focus(function (event) {
    if ($(this).hasClass("required-field")) {
      $(this).removeAttr("style");
      $(this).parent().next("span").remove();
      $(this).removeClass("required-field");
    }
  });*/
})();

/*When clicking on Full hide fail/success boxes
$("#name").focus(function () {
  $("#success").html("");
});*/
