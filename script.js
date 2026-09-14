const button = document.getElementById('changeColor');
const colorName = document.getElementById('colorName');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = "red";
    colorName.textContent = "Current color: red"  
})