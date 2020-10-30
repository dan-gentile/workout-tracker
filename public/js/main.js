'use strict';

const modal = $('#simple-modal');
// open modal
$('#modal-btn').on("click", event => {
    modal.css('display', 'block');
});

// close modal on button
$('.close-btn').on("click", event => {
    modal.css('display', 'none');
});

//close modal on outside click 
$(document).on("click", function(event) {
    if ($(event.target).is(modal)) {
        modal.css('display', 'none');
    }
});