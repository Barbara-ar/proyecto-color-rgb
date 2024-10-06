// Obtén referencias a los elementos
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');
const resultDiv = document.getElementById('result');

// Función para actualizar el color de fondo
function updateColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    // Actualiza el color de fondo
    resultDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // Actualiza los valores mostrados
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
}

// Agrega event listeners a los deslizadores
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Inicializa el color al cargar la página
updateColor();
