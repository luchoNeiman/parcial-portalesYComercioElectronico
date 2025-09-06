document.addEventListener('DOMContentLoaded', function () {
    const finalizarBtn = document.querySelector('.btn-primario.w-100');
    if (finalizarBtn) {
        finalizarBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('modalCompraExitosa'));
            modal.show();
        });
    }
});