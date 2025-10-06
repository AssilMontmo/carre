const div1 = document.getElementById("back");
        const div2 = document.getElementById("carte");
        const toggleButton = document.getElementById('toggleButton');
        toggleButton.addEventListener('click', () => {           
            div1.classList.toggle('d-none');
            div2.classList.toggle('d-none');
        });