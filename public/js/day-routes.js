'use strict';
// for all API routes
let todaysDateId;
let dataRetrieved;

const getTodaysDate = () => {
    const todaysDateString = new Date(Date.now()).toDateString();
    return todaysDateString;
}

// checks if database record for today exists
const checkDateCollection = () => {
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
    // generate run details boxes 
    const runDiv = document.getElementById('runs');

    dataRetrieved.forEach(day => {
        if (day.run.length !== 0) {
            const runDate = day.date;

            day.run.forEach(run => {
                const eachRunDiv = document.createElement('div');
                eachRunDiv.classList.add('each-run');
                eachRunDiv.innerHTML = generateRunDivs(run, runDate);
                runDiv.prepend(eachRunDiv)
            })
        }
    });

    // generates the chart
    const dates = [];
    const weeklyDistance = [];

    // if more than 7 days in the database
    if (dataRetrieved.length > 7) {
        for (let i = 6; i < dataRetrieved.length; i++) {
            const day = array[i];
            dates.day.date;
            if (day.run.length === 0) {
                weeklyDistance.push(0);
            } else if (day.run.length > 1) {
                const runArr = day.run;
                let totalDistance = 0;
                runArr.forEach(run => {
                    totalDistance += run.distance;
                })
                weeklyDistance.push(totalDistance);
            } else {
                weeklyDistance.push(day.run[0].distance);
            }
        }
        // if less than 7 days in the database
    } else {
        dataRetrieved.forEach(day => {
            dates.push(day.date)
            if (day.run.length === 0) {
                weeklyDistance.push(0);
            } else if (day.run.length > 1) {
                const runArr = day.run;
                let totalDistance = 0;
                runArr.forEach(run => {
                    totalDistance += run.distance;
                })
                weeklyDistance.push(totalDistance);
            } else {
                weeklyDistance.push(day.run[0].distance);
            }
        });
    };
    console.log(weeklyDistance)
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dates,
            datasets: [{
                label: 'Distance (Miles)',
                data: weeklyDistance,
                backgroundColor: 'rgba(255, 78, 3, .5)'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    pageReady();
}

checkDateCollection();