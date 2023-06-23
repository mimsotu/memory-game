const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name: 'fries',
        img: 'images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }
    
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }

}

createBoard();

function flipCard() {
    let cardId = this.getAttribute('data-id');
    console.log('clicked', cardId);
}