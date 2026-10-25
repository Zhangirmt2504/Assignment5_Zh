let count = 0;
const counter = document.getElementById("counter");
const p = document.getElementById("message");
p.style.color = "green";

function updateCounter() {
    counter.textContent = count;
}
document.getElementById("increase").addEventListener("click", function() {
    count++;
    updateCounter();
});
document.getElementById("decrease").addEventListener("click", function() {
    if (count > 0) {
        count--;
    }
    updateCounter();
});
document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    updateCounter();
});

const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
const charCount = document.getElementById("charCount");

function updatePreview() {
    const text = textInput.value;

    preview.textContent = text || "Your text will appear here";
    charCount.textContent = text.length;
}

textInput.addEventListener("input", updatePreview);

document.getElementById("clear").addEventListener("click", function() {
    textInput.value = "";
    updatePreview();
    textInput.focus();
});

const carSelect = document.getElementById("carSelect");
const carImage = document.getElementById("carImage");
const caption = document.getElementById("caption");

function updateImage() {
    const carName = carSelect.options[carSelect.selectedIndex].text;

    carImage.src = "images/" + carSelect.value;
    carImage.alt = "Mercedes-Benz " + carName + " car";
    caption.textContent = "Mercedes-Benz " + carName;
}

carSelect.addEventListener("change", updateImage);
updateImage();

const keyboardInput = document.getElementById("keyboardInput");
const keyStatus = document.getElementById("keyStatus");
const keyResult = document.getElementById("keyResult");

keyboardInput.addEventListener("keydown", function(event) {
    keyStatus.textContent = "Key pressed: " + event.key;

    if (event.key === "Enter") {
        event.preventDefault();
        keyResult.textContent = "Your text: " + keyboardInput.value;
    }

    if (event.key === "Escape") {
        keyboardInput.value = "";
        keyResult.textContent = "";
    }
});

const eventCard = document.getElementById("eventCard");
const instruction = document.getElementById("instruction");

function highlightCard(message) {
    eventCard.classList.add("highlight");
    instruction.textContent = message;
}

function removeHighlight() {
    eventCard.classList.remove("highlight");
    instruction.textContent =
        "Move your mouse over the card or use Tab.";
}

let mouseInside = false;
let cardFocused = false;

eventCard.addEventListener("mouseenter", function() {
    mouseInside = true;
    highlightCard("Mouse entered the card!");
});

eventCard.addEventListener("mouseleave", function() {
    mouseInside = false;

    if (cardFocused) {
        highlightCard("Card is focused!");
    } else {
        removeHighlight();
    }
});

eventCard.addEventListener("focus", function() {
    cardFocused = true;
    highlightCard("Card is focused!");
});

eventCard.addEventListener("blur", function() {
    cardFocused = false;

    if (mouseInside) {
        highlightCard("Mouse entered the card!");
    } else {
        removeHighlight();
    }
});
