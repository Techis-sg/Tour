//form validation function
(function () {
  'use strict';
  window.addEventListener('load', function () {

    form.addEventListener('submit', function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
      } else {
        swal({
          title: "Message Sent",
          text: "Thank You!!",
          icon: "success",
          button: "OK",
          html: true,
          timer: 2000,
          showCancelButton: true,
          showConfirmButton: false,
          showLoaderOnConfirm: true
        });
        // stop form submit only for demo
        event.preventDefault();
        location.replace(location.pathname);
      }

    }, false);
  }, false);
})();
