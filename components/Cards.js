// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'

const cardData = axios.get('https://lambda-times-api.herokuapp.com/articles')

// console.log(cardData);

const entry = document.querySelector('.cards-container')

function articleMaker(articleObj) {
    const myCard = document.createElement('div')
    const myHeadline = document.createElement('div')
    const myAuthor = document.createElement('div')
    const myImageCont = document.createElement('div')
    const myImg = document.createElement('div')
    const authorname = document.createElement('span')

    myCard.appendChild(myHeadline)
    myCard.appendChild(myAuthor)
    myAuthor.appendChild(myImageCont)
    myAuthor.appendChild(authorname)
    myImageCont.appendChild(myImg)

    myCard.classList.add('card')
    myHeadline.classList.add('headline')
    myAuthor.classList.add('author')
    myImageCont.classList.add('img-container')

    
    articleObj.then((response) => {
        debugger
        // myCard.addEventListener('click', () => {
        //     console.log(response.data);
        // })
        const bootArray = response.data.articles.bootstrap
        const javaArray = response.data.articles.javascript
        const jqueryArray = response.data.articles.jquery
        const nodeArray = response.data.articles.node
        const techArray = response.data.articles.technology

        for (let i = 0; i < bootArray.length; i++) {
            myHeadline.innerHTML = bootArray[i].headline
            myImg.src = bootArray[i].authorPhoto
            authorname.innerHTML = `By ${bootArray[i].authorName}`
        }

        for (let i = 0; i < javaArray.length; i++) {
            myHeadline.innerHTML = javaArray[i].headline
            myImg.src = javaArray[i].authorPhoto
            authorname.innerHTML = `By ${javaArray[i].authorName}`
        }

        for (let i = 0; i < jqueryArray.length; i++) {
            myHeadline.innerHTML = jqueryArray[i].headline
            myImg.src = jqueryArray[i].authorPhoto
            authorname.innerHTML = `By ${jqueryArray[i].authorName}`
        }

        for (let i = 0; i < nodeArray.length; i++) {
            myHeadline.innerHTML = nodeArray[i].headline
            myImg.src = nodeArray[i].authorPhoto
            authorname.innerHTML = `By ${nodeArray[i].authorName}`
        }

        for (let i = 0; i < techArray.length; i++) {
            myHeadline.innerHTML = techArray[i].headline
            myImg.src = techArray[i].authorPhoto
            authorname.innerHTML = `By ${techArray[i].authorName}`
        }
    })
}

const cardPanel = articleMaker(cardData);

entry.appendChild(cardPanel)