<?php
// Check for empty fields
header("Content-Type: text/html;charset=utf-8");
$str_json = file_get_contents('php://input');
$response = json_decode($str_json, true);
if(empty($response['name'])      ||
   empty($response['email'])     ||
   empty($response['phone'])     ||
   empty($response['message'])   ||
   !filter_var($response['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($response['name']));
$email_address = strip_tags(htmlspecialchars($response['email']));
$phone = strip_tags(htmlspecialchars($response['phone']));
$subject = strip_tags(htmlspecialchars($response['subject']));
$message = strip_tags(htmlspecialchars($response['message']));
   
// Create the email and send the message
$to = 'ventas@comerzia.com.mx'; // Add your email address in between the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Mensaje de contacto enviado por $name. Asunto: $subject";
$email_body = "<html lang='es'>
                  <style>
                     body
                     {
                        font-size: 18px; 
                        font-family: Arial, Helvetica, sans-serif;
                        text-align: center;
                     }
                     span
                     {
                        font-weight: bold;
                     }
                     img.img-footer
                     {
                        width:80%; 
                        height: auto;
                     }
                     span.footer-impresion
                     {
                        color: rgb(83, 165, 71);
                        font-style: italic;
                        font-size: 12px;
                     }
                     table
                     {
                        margin-left: 25%;
                     }
                  </style>
                  <head>
                     <meta charset='utf-8'/>
                  </head>
                  <body>
                     <p>Haz recibido un mensaje desde el formulario de tu web https://www.comerzia.com.mx</p>
                     <p style='font-weight: bold;'>Detalles del mensaje:</p>
                     <span>Nombre:</span> $name<br>
                     <span>Asunto:</span> $subject <br>
                     <span>Email:</span> $email_address<br>
                     <span>Telefono:</span> $phone<br>
                     <span>Mensaje:</span>
                     <p>$message<p>
                     <table>
                        <tr>
                              <td><img src='https://www.comerzia.com.mx/assets/img/main_logo.svg' class='img-footer'></td>
                              <td><span class='footer-impresion'>Antes de imprimir este correo, piense bien si es necesario hacerlo.<br>Si lo hace, utilice papel reciclado. Cuidemos el medio ambiente.</span></td>
                        </tr>
                     </table>
                  </body>
               </html>";
$headers = 'From: '.$email_address.''."\r\n".'Reply-To: '.$email_address.''."\r\n".'X-Mailer: PHP/'.phpversion()."\r\n".'Content-type: text/html; charset=UTF-8';  
mail($to,$email_subject,$email_body,$headers);

$to_client = $email_address;
$email_subject_client = "Copia de mensaje enviado por $name";
$email_body_client = "<html lang='es'>
                        <style>
                           body
                           {
                              font-size: 18px; 
                              font-family: Arial, Helvetica, sans-serif;
                              text-align: center;
                           }
                           span
                           {
                              font-weight: bold;
                           }
                           img.img-footer
                           {
                              width:80%; 
                              height: auto;
                           }
                           span.footer-impresion
                           {
                              color: rgb(83, 165, 71);
                              font-style: italic;
                              font-size: 12px;
                           }
                           table
                           {
                              margin-left: 25%;
                           }
                        </style>
                        <head>
                           <meta charset='utf-8'/>
                        </head>
                        <body>
                           <p>Haz enviado un mensaje de contacto en la web https://www.comerzia.com.mx</p>
                           <p style='font-weight: bold;'>Detalles del mensaje:</p>
                           <span>Nombre:</span> $name<br>
                           <span>Email:</span> $email_address<br>
                           <span>Telefono:</span> $phone<br>
                           <span>Asunto:</span $subject<br>
                           <span>Mensaje:</span>
                           <p>$message<p>
                           <p>Gracias por ponerse en contacto con nosotros. En breve recibirá una respuesta.</p>
                           <table>
                              <tr>
                                    <td><img src='https://www.comerzia.com.mx/assets/img/main_logo.svg' class='img-footer'></td>
                                    <td><span class='footer-impresion'>Antes de imprimir este correo, piense bien si es necesario hacerlo.<br>Si lo hace, utilice papel reciclado. Cuidemos el medio ambiente.</span></td>
                              </tr>
                           </table>
                        </body>
                     </html>";
$headers_client = 'From: noreply@comerzia.com.mx'."\r\n".'Reply-To: ventas@comerzia.com.mx'."\r\n".'X-Mailer: PHP/'.phpversion()."\r\n".'Content-type: text/html; charset=UTF-8';
mail($to_client,$email_subject_client,$email_body_client,$headers_client);

echo true;         
?>