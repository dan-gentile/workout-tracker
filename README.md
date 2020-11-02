# Workout-Tracker


## CRUD App using MongoDb 

![Contents](https://img.shields.io/github/languages/top/dan-gentile/workout-tracker)
![Last-Commit](https://img.shields.io/github/last-commit/dan-gentile/workout-tracker)
![License](https://img.shields.io/github/license/dan-gentile/workout-tracker)
​
### Table of contents
- [Title](#title)
- [General info](#general-info)
- [Technologies](#Technologies)
- [Deployment](#Deployment)
- [Installation](#installation)
- [Screen Shots](#Screen-shots)
- [Code Snippets](#Code-snippets)
- [Contributing](#contributing)
- [Questions](#questions)
- [Authors](#Authors)


### General info
This workout tracker is built using Node, Express and Mongoose. The database has two collections the first is a day collection which on page load checks the database to see if a collection has been created for that day if it has not it will create a new on otherwise it will capture the id of the document, which will then be used to assign the additional collection, the run collection to the appropriate day collection. The run collection will ask you to input a title, the distance you ran in miles, and the time in HH:MM:SS format. Along with what kind of run it is. Once you enter those values the app will calculate your average pace for the run!. Every run has full CRUD abilities, just click on any element (except pace) change the value and click update! Or delete the run with click of the x in the upper right corner. The app will also display the distances ran over the last 7 days. 


Web Link: <>
​

### Technologies
Project is created with:
​
- [Node JS](https://nodejs.org/en/)
- [Express JS](https://expressjs.com/)
- [Mongoose JS](https://mongoosejs.com/)
- [Chart JS](https://www.chartjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [JavaScript](https://www.javascript.com/)


### Deployment
If running locally on your machine, make sure you have Node.js installed on your machine. As well as Mongo installed and copy the schema file in the root folder to build your database. In the root folder while in your terminal run `npm start` the application should be available on your browser at localhost:8080. 

If running from browser just go to the link 
<>



### Screen shots
Dashboard 
<img width="1068" alt="Screen Shot 2020-11-01 at 6 37 47 PM" src="https://user-images.githubusercontent.com/68626350/97824687-7da85c80-1c71-11eb-96d6-509feb0f0e54.png">


### Code snippets
Calculation of run pace in min/mile
~~~
const getPace = (distance, duration) => {
    const timeToSeconds = duration.split(':');
    const stringToSeconds = (+timeToSeconds[0] * 60 * 60) + (+timeToSec [1] * 60) + (+timeToSeconds[2]);
    const paceSeconds = stringToSeconds / distance;
    const paceMinutes = paceSeconds / 60;
    const remainder = paceMinutes - Math.floor(paceMinutes);
    let resultSeconds = Math.floor(remainder * 60); 
    if (resultSeconds < 10) {
        resultSeconds = `0${resultSeconds.toString()}`; 
    } else {
        resultSeconds = resultSeconds.toString();
    }
    const resultMinutes = Math.floor(paceMinutes).toString(); 
    return `${resultMinutes}:${resultSeconds} /mi`; 
    };
~~~


## Contributing 


1. Clone repo and create a new branch: 
~~~
$ git checkout -b name_for_new_branch.
~~~
2. Make changes and commit: 
~~~
$ git add . 
$ git commit -m "made changes"
~~~
3. Push to the branch:
~~~
$ git push
~~~
4. Submit Pull Request with comprehensive description of changes


## Questions 

If you have any questions please create an issue. 

### Authors
- [Dan Gentile](https://github.com/dan-gentile)
​
## License 

This license is [MIT](https://github.com/dan-gentile/workout-tracker/blob/main/LICENSE)


​
​
​
