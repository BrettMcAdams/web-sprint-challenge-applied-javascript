// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios'

const lambdaData = axios.get('https://lambda-times-api.herokuapp.com/topics')

// console.log(lambdaData);

const entry = document.querySelector('.topics')

function tabMaker(tabObj) {

    const parentDiv = document.createElement('div')
    const myJavaScript = document.createElement('div')
    const myBootstrap = document.createElement('div')
    const myTech = document.createElement('div')
    const myJquery = document.createElement('div')
    const myNode = document.createElement('div')

    parentDiv.appendChild(myJavaScript)
    parentDiv.appendChild(myBootstrap)
    parentDiv.appendChild(myTech)
    parentDiv.appendChild(myJquery)
    parentDiv.appendChild(myNode)

    parentDiv.classList.add('fix')
    myJavaScript.classList.add('tab')
    myBootstrap.classList.add('tab')
    myTech.classList.add('tab')
    myJquery.classList.add('tab')
    myNode.classList.add('tab')

    tabObj.then((response) => {
        myJavaScript.innerHTML = response.data.topics[0]
        myBootstrap.innerHTML = response.data.topics[1]
        myTech.innerHTML = response.data.topics[2]
        myJquery.innerHTML = response.data.topics[3]
        myNode.innerHTML = response.data.topics[4]
    })

    return parentDiv
}

const tabPanel = tabMaker(lambdaData)

entry.appendChild(tabPanel)