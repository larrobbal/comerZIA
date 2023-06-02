$(document).ready(function(){
    $("#sendMessageButton").click(function (event) {
        event.preventDefault(); // prevent default submit behaviour
        var email = $("#email").val();
        $this = $("#sendMessageButton");
        var valid_data = validateData(email);
        console.log(valid_data);
        if(valid_data!==false && typeof valid_data !== undefined)
        {
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $.ajax({
                url: "assets/mail/contact_me.php",
                type: "POST",
                data: {
                    email: email,
                },
                cache: false,
                success: function () {
                    // Success message
                    $("#success").html("<div id='alert-msg' class='alert alert-success bg-green-300 border border-green-500 my-2 mx-5 rounded-lg'>");
                    $("#success > .alert-success")
                        .html(
                            "<button type='button' id='close-alert' class='close inline-flex items-center justify-center text-xl mx-2 my-2' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#success > .alert-success").append(
                        "<strong class='text-lg'>¡Tu mensaje ha sido enviado con éxito!.</strong>"
                    );
                    $("#success > .alert-success").append("</div>");
                    $('#close-alert').click(function()
                    {
                        $('#success').empty();
                    });
                    //clear all fields
                    $("#contactForm").trigger("reset");
                },
                error: function () {
                    // Fail message
                    $("#success").html("<div id='alert-msg' class='alert alert-danger bg-red-300 border border-red-500 my-2 mx-5 rounded-lg'>");
                    $("#success > .alert-danger")
                        .html(
                            "<button type='button' id='close-alert' class='close inline-flex items-center justify-center text-xl mx-2 my-2' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#success > .alert-danger").append(
                        $("<strong class='text-lg'>").text(
                            "Lo sentimos, parece ser que el servidor de correo no está respondiendo. ¡Intentalo más tarde!"
                        )
                    );
                    $("#success > .alert-danger").append("</div>");
                    $('#close-alert').click(function()
                    {
                        $('#success').empty();
                    });
                    //clear all fields
                    $("#contactForm").trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                },
            });
        }
        function validateData(email)
        {
            var dataArray = {};
            var emailRegEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            dataArray['email']=validateMail();
            function validateMail()
            {
                if(email=="")
                {
                    if($(".send-mail").after)
                        $(".send-mail").next('span').remove();
                    
                    $("input#email").addClass('required-field');
                    $("input#email").css({"background-color":"rgb(255,177,177)","border-color":"#FF0000","border-width":"1px"});
                    $(".send-mail").after('<span class="text-red-600" id="alert-message">Por favor, introduce un e-mail.</span>');
                    return false;
                }
                else
                {
                    if(!emailRegEmail.test(email))
                    {
                        if($("contactForm #email-contact-div").after)
                            $("contactForm #email-contact-div").next('span').remove();

                        $("input#email").addClass('required-field');
                        $("input#email").css({"background-color":"rgb(255,177,177)","border-color":"#FF0000","border-width":"1px"});
                        $(".send-mail").after('<span class="text-red-600">Formato de E-mail no válido. Por favor, introduce una dirección de correo válida.</span>');
                        return false;
                    }
                    else
                        return true;
                }
            }
            if(Object.keys(dataArray).every((k) => dataArray[k]))
                return true;
            else
                return false;
        }
    });
    $("input").focus(function (event) {
        if($(this).hasClass('required-field'))
        {
            $(this).removeAttr('style');
            $(this).parent().next('span').remove();
            $(this).removeClass('required-field');
        }
    });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
    $("#success").html("");
});
