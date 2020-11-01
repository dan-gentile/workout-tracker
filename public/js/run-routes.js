'use strict';
// creates new run
const newRunBtn = document.getElementById('new-run');
newRunBtn.onclick = event => {
    event.preventDefault();
    const newRunObj = {
        distance: document.getElementById('distance').value,
        duration: document.getElementById('duration').value,
        elevation: document.getElementById('elevation').value,
        title: document.getElementById('title').value,
        runType: document.getElementById('runtype').value,
        description: document.getElementById('description').value,
        time: document.getElementById('time').value
    }
    fetch('/submit', {
            method: "POST",
            body: JSON.stringify(newRunObj),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
}

// fires once the page is ready
const pageReady = () => {

    // delete run
    const deleteRunBtn = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteRunBtn.length; i++) {
        deleteRunBtn[i].addEventListener('click', function(event) {
            const id = this.getAttribute("data-id")
            fetch(`/api/run/${id}`, {
                    method: "DELETE",
                })
                .then(response => {
                    window.location.reload();
                    return response.json();
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                })
        });
    };



}




// POST 
// PUT 
// Delete