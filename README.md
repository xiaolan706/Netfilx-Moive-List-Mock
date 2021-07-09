# Overview of the Netflix Movie List Mock App

This project is a mock Netflix like page with editable rows using React and Redux. 


## Languages and Tools:
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> </p>

## Quick Start

First of all, install `node_modules`:
```
npm install
```

To start the server, you can run:
```
npm run start-server
```

For getting start this project, you can run:
```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Description

When you view the app in [http://localhost:3000](http://localhost:3000), it will frist make an HTTP call at the backend server using json-server and axios package. 

It shows two rows of lists with movie images and titles, one is 'My List', another is 'Recommendations'. An extra list of titles in 'My List' row will be displayed at the botton of the page.

When your mouse hover over an image, a button will display below the image. The 'Remove' button in 'My List' row will remove the movie from 'My List' and show up in the 'Recommendations' row. By clicking 'add' button, a movie will be added to the 'My List' row from the 'Recommendations' row. At the bottom, all the titles in 'My List' will be dynamically displayed.


