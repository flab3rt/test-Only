"use strict";

window.addEventListener("DOMContentLoaded", () => {

    const main = document.querySelector('.main'),   
          buttons = document.querySelectorAll('.button__main');

    function addItem(elem) {
        elem.classList.add('active');
        elem.querySelector('svg').style.display = "none";
        elem.querySelector('.button__content').style.display = "block";
    }

    function removeItem(elem) {
        elem.classList.remove('active');
        elem.querySelector('svg').style.display = "inline";
        elem.querySelector('.button__content').style.display = "none";
    }

    function closeButtons(list) {
        list.forEach(item => removeItem(item));
    }

    main.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.nodeName === 'BUTTON') {
            if (target.classList.contains('active')) removeItem(target);
            else {
                closeButtons(buttons);
                addItem(target);
            }
        } else {
            const parent = target.closest('button');
            if (target.classList.contains('main')) {
                closeButtons(buttons);
            } else {
                if (target.localName == 'path' || target.localName == 'svg') {
                    closeButtons(buttons);
                    addItem(parent);
                } else removeItem(parent);
            }   
        }
    });
});