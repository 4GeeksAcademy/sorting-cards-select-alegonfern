import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(pintaGenerator());
  document.querySelector(".card").innerHTML = numberGenerator();
};

let numberGenerator = () => {
  var numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var index = Math.floor(Math.random() * numeros.length);
  return numeros[index];
};

let pintaGenerator = () => {
  var pinta = ["diamond", "spade", "heart", "club"];
  var index2 = Math.floor(Math.random() * pinta.length);
  return pinta[index2];
};

let cards = [];

function generateCards() {
  let input = document.getElementById("qtyOfCards");
  let amountOfCards = parseInt(input.value);
  cards = [];

  let cardDeck = document.getElementById("cardDeck");
  cardDeck.innerHTML = "";

  for (let i = 0; i < amountOfCards; i++) {
    let card = {
      number: numberGenerator(),
      pinta: pintaGenerator()
    };
    cards.push(card);

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("generated-card");
    cardDiv.innerHTML = `<span>${card.number}</span>${card.pinta}`;
    cardDeck.appendChild(cardDiv);
  }
}

function sortCards() {
  let sortDeck = document.getElementById("sortDeck");
  sortDeck.innerHTML = "";

  let sortedCards = [...cards]; // Clonamos el array original para no afectarlo
  selectionSort(sortedCards);

  for (let i = 0; i < sortedCards.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("sorted-card");
    cardDiv.innerHTML = `<span>${sortedCards[i].number}</span>${sortedCards[i].pinta}`;
    sortDeck.appendChild(cardDiv);
  }
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].number < arr[minIndex].number) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}
