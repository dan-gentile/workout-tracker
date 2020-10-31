'use strict';
// for all API routes
const getTodaysDate = () => {
    const todaysDateString = new Date(Date.now()).toDateString();
    return todaysDateString;
}

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
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
};

createDateCollection();