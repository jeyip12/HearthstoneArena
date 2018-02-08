let cards;
let data;

function getCardData() {
  if (!data) {
    data = $.ajax({
      url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Neutral?collectible=1',
      type: 'GET',
      dataType: 'json',
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-Mashape-Key', 'VwgyaXdYQPmshEYddTynCDckJIAxp1A7vHHjsn1rMIzl3e9c3g');
      },
    });
  } else if (data) {
    data = $.ajax({
      url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Neutral?health=3&collectible=1',
      type: 'GET',
      dataType: 'json',
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-Mashape-Key', 'VwgyaXdYQPmshEYddTynCDckJIAxp1A7vHHjsn1rMIzl3e9c3g');
      },
    });
  }
  return data;
}

function showRandomCards() {
  const obj1 = cards[Math.floor(Math.random() * cards.length)];
  const obj2 = cards[Math.floor(Math.random() * cards.length)];
  const obj3 = cards[Math.floor(Math.random() * cards.length)];
  $('#card-image1').attr('src', obj1.img);
  $('#card-image2').attr('src', obj2.img);
  $('#card-image3').attr('src', obj3.img);
}

function addCard(string) {
  if (document.getElementById('list').childElementCount < 30) {
    const image = document.createElement('img');
    $(image).attr('src', document.getElementById(string).getAttribute('src'));
    $(image).css('width', '20%');
    document.getElementById('list').appendChild(image);
  } else {
    alert('Warning: If you used this deck builder correctly, you\'re probably not be a good friend. Oh and your deck is done!');
  }
}
// Use this function if you want to pull all cards from the api, since that request is nested differently.
// function flattenCards(data) {
//   const result = [];
//   for (var set in data) {
//     for (var i = 0; i < data[set].length; i++) {
//       result.push(data[set][i]);
//       }
//     }
//     return result;
// }

// getCardData();

$(document).ready(() => {
  getCardData().done((data) => {
    cards = data;
    // cards = flattenCards(data);
    showRandomCards();
  });
  document.getElementById('cheater').addEventListener('click', () => { getCardData().done((data) => { cards = data; });
  });
  document.getElementById('card-image1').addEventListener('click', () => { addCard('card-image1'); });
  document.getElementById('card-image1').addEventListener('click', showRandomCards);
  document.getElementById('card-image2').addEventListener('click', () => { addCard('card-image2'); });
  document.getElementById('card-image2').addEventListener('click', showRandomCards);
  document.getElementById('card-image3').addEventListener('click', () => { addCard('card-image3'); });
  document.getElementById('card-image3').addEventListener('click', showRandomCards);
});
