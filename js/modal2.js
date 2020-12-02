(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal1-open]'),
      closeModalBtn: document.querySelector('[data-modal1-close]'),
      modal: document.querySelector('[data-modal1]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      // document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('is-hidden');
    }
  })();