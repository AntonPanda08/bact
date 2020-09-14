const formRef = document.querySelector(".contact-form");
formRef.addEventListener("submit", (e) => {
  e.preventDefault;
  toastr["success"]("Форма успешно отправлена", "Спасибо");

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-full-width",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
});
