    // Select all boxes and radio buttons
    const boxes = document.querySelectorAll('.box');
    const radios = document.querySelectorAll('input[type="radio"]');

    // Add mouse enter/leave events for each box
    boxes.forEach((box, index) => {
        box.addEventListener('mouseenter', () => {
            if (!box.classList.contains('clicked')) {
                box.classList.add('expanded'); // Expand box on hover
            }
        });

        box.addEventListener('mouseleave', () => {
            if (!box.classList.contains('clicked')) {
                box.classList.remove('expanded'); // Revert size on leave
            }
        });

        box.addEventListener('click', () => {
            // Remove "clicked" class from all boxes and uncheck all radio buttons
            boxes.forEach((b, i) => {
                b.classList.remove('clicked');
                b.classList.remove('expanded');
                radios[i].checked = false; // Uncheck other radio buttons
            });

            // If the clicked box is not already clicked, open it
            if (!box.classList.contains('clicked')) {
                box.classList.add('clicked'); // Mark it as clicked
                box.classList.add('expanded'); // Keep it open
                radios[index].checked = true; // Check the radio button
            }
        });
    });
