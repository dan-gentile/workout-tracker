'use strict';

// Modal
const modal = document.getElementById("simple-modal");
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementsByClassName("close-btn")[0];

modalBtn.onclick = event => {
    modal.style.display = "block";
};

closeBtn.onclick = event => {
    modal.style.display = "none";
};

document.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const durationMask = IMask(document.getElementById('duration'), {
    mask: '00:00:00'
});