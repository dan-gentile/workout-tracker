'use strict';

const newRunBtn = document.getElementById('new-run');
newRunBtn.onclick = event => {
    const newRunObj = {
        distance: document.getElementById('distance').value,
        duration: document.getElementById('duration').value,
        title: document.getElementById('title').value,
        runType: document.getElementById('runtype').value,
    };
    fetch(`/submit/${todaysDateId}`, {
            method: "POST",
            body: JSON.stringify(newRunObj),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
        })
        .then(response => {
            window.location.reload();
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
};

// fires once the page is ready
const pageReady = () => {


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


    const updateRunBtn = document.getElementsByClassName("update");
    for (let i = 0; i < updateRunBtn.length; i++) {
        updateRunBtn[i].addEventListener('click', function(event) {
            const id = this.getAttribute('data-id');
            const distance = document.getElementById(`distance-${id}`).value;
            const duration = document.getElementById(`duration-${id}`).value;

            const getPace = (distance, duration) => {
                const timeToSeconds = duration.split(':');
                const stringToSeconds = (+timeToSeconds[0] * 60 * 60) + (+timeToSeconds[1] * 60) + (+timeToSeconds[2]);
                const paceSeconds = stringToSeconds / distance;
                const paceMinutes = paceSeconds / 60;
                const remainder = paceMinutes - Math.floor(paceMinutes);
                let resultSeconds = Math.floor(remainder * 60); // takes the remainder converts to seconds 
                if (resultSeconds < 10) {
                    resultSeconds = `0${resultSeconds.toString()}`; //if seconds is < 10 add a zero 
                } else {
                    resultSeconds = resultSeconds.toString();
                }
                const resultMinutes = Math.floor(paceMinutes).toString(); //removes the remainder + converts to string
                return `${resultMinutes}:${resultSeconds} /mi`; //returns a string of the time
            };

            const updatedRunObj = {
                distance: distance,
                duration: duration,
                title: document.getElementById(`title-${id}`).value,
                runType: document.getElementById(`run-type-${id}`).value,
                pace: getPace(distance, duration)
            };

            fetch(`/api/run/${id}`, {
                    method: "PUT",
                    body: JSON.stringify(updatedRunObj),
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json"
                    },
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

};