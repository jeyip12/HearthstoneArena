let cards;
let data;

function getCardData() {
  if (!data) {
    data = $.ajax({
      url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1',
      type: 'GET',
      dataType: 'json',
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-Mashape-Authorization', 'mXtnPm3ltOmshc9dQJjtVdKzfnhbp14UZncjsnfzwvp6uLiMwH');
      },
    });
  }
  return data;
}

console.log(getCardData());

function showCard(cardNo) {
  const obj = cards[cardNo];
  $('#card-image').attr('src', obj.img);
  $('#card-name').text(obj.name);
  $('#card-type').text(obj.type);
  $('#card-faction').text(obj.faction);
  $('#card-rarity').text(obj.rarity);
  $('#player-class').text(obj.playerClass);
}

function showCardRandom() {
  const cardNo = Math.floor(Math.random() * cards.length);
  showCard(cardNo);
}

function flattenCards(data) {
  const result = [];
  for (var set in data) {
    for (var i = 0; i < data[set].length; i++) {
      result.push(data[set][i]);
      }
    }
    return result;
}
getCardData();

$(document).ready(() => {
  getCardData()
    .done((data) => {
      $('#nextCard').text('Next');
      cards = flattenCards(data);
      showCardRandom();
    });
  $('#nextCard').click(showCardRandom);
});