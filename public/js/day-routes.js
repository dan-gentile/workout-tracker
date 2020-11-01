'use strict';
// for all API routes
let todaysDateId;
let dataRetrieved;

const getTodaysDate = () => {
    const todaysDateString = new Date(Date.now()).toDateString();
    return todaysDateString;
}

// checks if database record for today exists
const createDateCollection = () => {
    const date = getTodaysDate()
    fetch(`/api/days/search/${date}`, {
            method: "GET",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (!data) {
                createNewDay();
            } else {
                todaysDateId = data._id;
                getAllData();
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
};

const createNewDay = () => {
    const date = {
        date: getTodaysDate()
    }
    fetch("/submit/day", {
            method: "POST",
            body: JSON.stringify(date),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.errors) {
                console.log('Missing Data')
            } else {
                getAllData();
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
};

const getAllData = () => {
    fetch('/api/days', {
            method: "GET",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (!data) {
                return "Missing Data"
            } else {
                dataRetrieved = data;
                populatePage();
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
}

const populatePage = () => {
    const runDiv = document.getElementById('runs');

    dataRetrieved.forEach(day => {
        if (day.run.length !== 0) {
            const runDate = day.date;

            day.run.forEach(run => {
                const eachRunDiv = document.createElement('div');
                eachRunDiv.classList.add('each-run');
                eachRunDiv.innerHTML = `
                <h5>${runDate}</h5>
                <h5>${run.title}</h5>
                <p>${run.distance} miles</p>
                <p>${run.time}</p>
                <p>${run.pace} minutes</p>
                <p>${run.elevation} ft</p>
                <p>${run.runType}</p>
                <p>${run.description}</p>
                <button class="update" data-id="${run._id}">Update</button>
                <button class="delete" data-id="${run._id}">Delete</button>
                `

                runDiv.prepend(eachRunDiv)
            })
        }
    });
    pageReady();
}
createDateCollection();