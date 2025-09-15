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




document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.querySelector("#tablaProductos tbody");
    const cardsContainer = document.getElementById("cardsContainer");

    if (tabla && cardsContainer) {
        [...tabla.rows].forEach(row => {
            const celdas = row.cells;

            const card = document.createElement("div");
            card.className = "card-producto-admin mb-3 p-3 bg-cream borde-verde rounded";

            const header = document.createElement("div");
            header.className = "d-flex align-items-center mb-2";
            header.innerHTML = `
        ${celdas[1].innerHTML}
        <h5 class="mb-0 ms-2">${celdas[2].innerText}</h5>
      `;
            card.appendChild(header);

            const info = document.createElement("div");
            info.innerHTML = `
        <p class="mb-1"><strong>Categoría:</strong> ${celdas[3].innerText}</p>
        <p class="mb-1"><strong>Etiqueta:</strong> ${celdas[4].innerText}</p>
        <p class="mb-1"><strong>Precio:</strong> ${celdas[5].innerText}</p>
        <p class="mb-2"><strong>Stock:</strong> ${celdas[6].innerText}</p>
      `;
            card.appendChild(info);

            const acciones = document.createElement("div");
            acciones.innerHTML = celdas[7].innerHTML;
            card.appendChild(acciones);

            cardsContainer.appendChild(card);
        });
    }
});