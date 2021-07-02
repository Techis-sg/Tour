function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    var input = document.getElementsByClassName('form-control');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else if (form.checkValidity() == true) {
          swal({
            title: "Message Sent",
            text: "Thank You!!",
            icon: "success",
            button: "OK",
            html: true,
            timer: 5000,
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true
          });
          // stop form submit only for demo
          event.preventDefault();
          location.replace(location.pathname);
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
