const boxes = document.querySelectorAll('.box');
const radios = document.querySelectorAll('input[type="radio"]');

boxes.forEach((box, index) => {
    box.addEventListener('mouseenter', () => {
        if (!box.classList.contains('clicked')) {
            box.classList.add('expanded'); 
        }
    });

    box.addEventListener('mouseleave', () => {
        if (!box.classList.contains('clicked')) {
            box.classList.remove('expanded'); 
        }
    });

    box.addEventListener('click', () => {
        boxes.forEach((b, i) => {
            b.classList.remove('clicked');
            b.classList.remove('expanded');
            radios[i].checked = false; 
        });

        if (!box.classList.contains('clicked')) {
            box.classList.add('clicked');
            box.classList.add('expanded');
            radios[index].checked = true;
        }
    });
});
