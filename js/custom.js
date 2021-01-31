"use strict"

let form;

document.addEventListener('DOMContentLoaded', function () {
   form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   form = document.getElementById('form1');
   form.addEventListener('submit', formSend);

   form = document.getElementById('form2');
   form.addEventListener('submit', formSend);
});


   async function formSend(e) {
      e.preventDefault();
      
      let form = e.target;
      let error = formValidate(form);

      let formData = new FormData(form);
      

      if (error === 0) {
         form.classList.add('_sending');
         let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
         });
         if (response.ok) {
            let result = await response.json();
            //alert(result.message);
            
            //form.reset();
            let button = form.submit;
            form_add_sent(button);
         } else {
            //alert("Ошибка");

         }
      } else {
         
      }

   }


   function formValidate(form) {
      let error = 0;
      let formReq = form.querySelectorAll('._req');

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);

         if (input.classList.contains('_email')) {
            if (emailTest(input)) {
               form_add_error(input);
               error++;
            }
         } else if (input.classList.contains('_phone')) {
            let valid = ValidPhone(form.tel.value);
            if (valid != '') { 
               form_add_error(input);
               error++;
            }
         } else {
            if (input.value === '') {
               form_add_error(input);
               error++;
            }
         }
      }
      return error;
   }


function ValidPhone(tel) {
    var re = /(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}/;
    var valid = re.test(tel);
    if (!valid) return 'Номер телефона введен неправильно!'
       else return '';
} 



   function formAddError(input) {
      input.parentElement.classList.add('form__error');
      input.classList.add('form__error');
   }

   
   function formRemoveError(input) {
      input.parentElement.classList.remove('form__error');
      input.classList.remove('form__error');
   }