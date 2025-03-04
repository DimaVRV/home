(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    submitBtn: document.querySelector(".backdrop__btn")
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  setInterval(() => {
    refs.submitBtn.classList.remove("animate__tada");
    void refs.submitBtn.offsetWidth; 
    refs.submitBtn.classList.add("animate__tada");
  }, 3000); 
})();

const btn = document.querySelector('.contact__btn');

function triggerAnimation() {

  btn.classList.remove('animate__bounceIn');
  
  setTimeout(() => {
    btn.classList.add('animate__bounceIn');
  }, 50); 

}

setInterval(triggerAnimation, 4000);

triggerAnimation();




(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-header-open]"),
    closeModalBtn: document.querySelector("[data-modal-header-close]"),
    modal: document.querySelector("[data-header-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();