let cards;
let data;

function getCardData() {
  if (!data) {
    data = $.ajax({
      // url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/Legendary?collectible=1',
      url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/Legendary?attack=4&collectible=1',
      type: 'GET',
      dataType: 'json',
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-Mashape-Key', 'VwgyaXdYQPmshEYddTynCDckJIAxp1A7vHHjsn1rMIzl3e9c3g');
        // xhr.setRequestHeader('X-Mashape-Authorization', 'mXtnPm3ltOmshc9dQJjtVdKzfnhbp14UZncjsnfzwvp6uLiMwH');
      },
    });
  }
  return data;
}

function showRandomCard() {
  const obj1 = cards[Math.floor(Math.random() * cards.length)];
  const obj2 = cards[Math.floor(Math.random() * cards.length)];
  const obj3 = cards[Math.floor(Math.random() * cards.length)];
  $('#card-image1').attr('src', obj1.img);
  $('#card-image2').attr('src', obj2.img);
  $('#card-image3').attr('src', obj3.img);
}

function addCard1() {
  const image = document.createElement('img');
  $(image).attr('src', document.getElementById('card-image1').getAttribute('src'));
  $(image).css('width', '20%');
  document.getElementById('list').appendChild(image);
}
function addCard2() {
  const image = document.createElement('img');
  $(image).attr('src', document.getElementById('card-image2').getAttribute('src'));
  $(image).css('width', '20%');
  document.getElementById('list').appendChild(image);
}
function addCard3() {
  const image = document.createElement('img');
  $(image).attr('src', document.getElementById('card-image3').getAttribute('src'));
  $(image).css('width', '20%');
  document.getElementById('list').appendChild(image);
}

// function flattenCards(data) {
//   const result = [];
//   for (var set in data) {
//     for (var i = 0; i < data[set].length; i++) {
//       result.push(data[set][i]);
//       }
//     }
//     return result;
// }
getCardData();

$(document).ready(() => {
  getCardData()
    .done((data) => {
      cards = data;
      // cards = flattenCards(data);
      showRandomCard();
    });
  document.getElementById('card-image1').addEventListener('click', addCard1);
  document.getElementById('card-image1').addEventListener('click', showRandomCard);
  document.getElementById('card-image2').addEventListener('click', addCard2);
  document.getElementById('card-image2').addEventListener('click', showRandomCard);
  document.getElementById('card-image3').addEventListener('click', addCard3);
  document.getElementById('card-image3').addEventListener('click', showRandomCard);
});