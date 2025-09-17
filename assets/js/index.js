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





document.addEventListener("DOMContentLoaded", () => {
    const tablaCategorias = document.querySelector("#tablaCategorias tbody");

    const cardsCategoriasContainer = document.getElementById("cardsCategoriasContainer");

    if (tablaCategorias && cardsCategoriasContainer) {
        [...tablaCategorias.rows].forEach(row => {
            const celdas = row.cells;

            const card = document.createElement("div");
            card.className = "card-producto-admin mb-3 p-3 bg-cream borde-verde rounded";

            // Header con nombre + ID
            const header = document.createElement("div");
            header.className = "d-flex justify-content-between align-items-center mb-2";
            header.innerHTML = `
        <h5 class="mb-0 text-umami">${celdas[1].innerText}</h5>
        <small class="text-secondary">ID: ${celdas[0].innerText}</small>
      `;
            card.appendChild(header);

            // Descripción
            const descripcion = document.createElement("p");
            descripcion.className = "mb-2";
            descripcion.innerHTML = `<strong>Descripción:</strong> ${celdas[2].innerText}`;
            card.appendChild(descripcion);

            // Acciones (se copian los botones de la tabla)
            const acciones = document.createElement("div");
            acciones.className = "d-flex gap-2";
            acciones.innerHTML = celdas[3].innerHTML;
            card.appendChild(acciones);

            // Agrego la card al contenedor
            cardsCategoriasContainer.appendChild(card);
        });
    }
});