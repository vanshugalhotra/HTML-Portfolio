const sections = document.querySelectorAll('.section');

const sectBtns = document.querySelectorAll('.controls');

const sectBtn = document.querySelectorAll('.control');

const allSections = document.querySelector('.main-content');


function PageTransitions() {
    // Button active class

    // accessing each and every button in sectBtn
    // Note: sectBtn contain all the 5 buttons, and sectBtns contain the div "sectBtn" 
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');

            // note: this keyword doesn't be used inside arrow functions
            this.className += ' active-btn';
        })
    }

    // Sections Active 
    // basically, when we click on any 5 of the buttons, then the button associated with it corresponding section (using data-id ) class will be added "active" and removed also when we are not there anymore

    allSections.addEventListener('click', (e) => {
        // getting the id of the element we just clicked on
        const id = e.target.dataset.id;

        if (id) {
            //remove selected from the other btns
            sectBtns.forEach((btn) => {
                    btn.classList.remove('active')
                })
                // adding the active class to the element we just clicked
            e.target.classList.add('active')

            //hide other sections, by removing there active class
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            // adding active class to the current section
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    // code for working the theme button
    const themeBtn = document.querySelector('.theme-btn');

    themeBtn.addEventListener('click', () => {

        let element = document.body;
        // toggle will add and remove the class whenever the button is clicked
        element.classList.toggle('light-mode');

    });

}

PageTransitions();