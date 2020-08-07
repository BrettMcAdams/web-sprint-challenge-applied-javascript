// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const entry = document.querySelector('.header-container')

function Header() {
    const myHeader = document.createElement('div')
    const myDate = document.createElement('span')
    const myLamb = document.createElement('h1')
    const myTemp = document.createElement('span')

    myHeader.appendChild(myDate)
    myHeader.appendChild(myLamb)
    myHeader.appendChild(myTemp)

    myHeader.classList.add('header')
    myDate.classList.add('date')
    myTemp.classList.add('temp')

    myDate.textContent = 'MARCH 28, 2020'
    myLamb.textContent = 'Lambda Times'
    myTemp.textContent = '98°'

    return myHeader
}

const headerPanel = Header()

entry.appendChild(headerPanel)