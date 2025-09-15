document.addEventListener('DOMContentLoaded', function () {
    const finalizarBtn = document.querySelector('#finalizar-compra');
    if (finalizarBtn) {
        finalizarBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('modalCompraExitosa'));
            modal.show();
        });
    }


    const submitFormContact = document.querySelector('#form-contacto');
    if (submitFormContact) {
        submitFormContact.addEventListener('submit', function (e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('modalformContacto'));
            modal.show();
        });
    }
});