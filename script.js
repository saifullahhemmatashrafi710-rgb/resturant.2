// Elemente auswählen
const modal = document.getElementById("sizeModal");
const modalTitle = document.getElementById("modalTitle");
const sizeSelect = document.getElementById("sizeSelect");
const selectedPrice = document.getElementById("selectedPrice");

const closeButton = document.getElementById("closeModal");
const doneButton = document.getElementById("doneModal");

// Pizza-Größe auswählen
document.querySelectorAll(".choose-size").forEach(button => {

    button.addEventListener("click", function () {

        const pizzaName = this.getAttribute("data-name");
        const sizes = JSON.parse(this.getAttribute("data-sizes"));

        modalTitle.textContent = pizzaName;
        sizeSelect.innerHTML = "";

        sizes.forEach(size => {
            const option = document.createElement("option");

            option.textContent = size.label;
            option.value = size.price;

            sizeSelect.appendChild(option);
        });

        updatePrice();

        modal.classList.add("is-open");
        document.body.classList.add("modal-open");
    });

});

// Preis anzeigen
function updatePrice() {
    selectedPrice.textContent = sizeSelect.value;
}

// Bei Größenwechsel Preis aktualisieren
sizeSelect.addEventListener("change", updatePrice);

// Fenster schließen
function closeWindow() {
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
}

closeButton.addEventListener("click", closeWindow);
doneButton.addEventListener("click", closeWindow);

// Klick außerhalb schließt das Fenster
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeWindow();
    }
});