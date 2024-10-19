function toggleOptions(box) {
    const options = box.querySelector('.options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function changeColor(label, color) {
    const box = label.closest('.box');
    box.style.backgroundColor = color;
    toggleOptions(box);
}

function changeSize(label, size) {
    const box = label.closest('.box');
    box.style.height = size;
    toggleOptions(box);
}