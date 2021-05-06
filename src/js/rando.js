(function () {
  // 🎯 DOM ITEMS
  const items = document.querySelectorAll('*[data-words]');

  // ▶️ INITIALISATION
  init();
  function init() {
    items.forEach((item) => {  
      item.textContent = getRandomWord(item.dataset.words);
    });
  }

  // ⚙️ GET RANDOM WORD
  function getRandomWord(list) {
    let words = list.split(',');
    let alea = Math.floor(Math.random() * words.length);
    return words[alea];
  }
})();