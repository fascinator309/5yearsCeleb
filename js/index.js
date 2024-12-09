import realID from '../gitignore/myFile.js';

(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $("card"),
    openB = $("open"),
    closeB = $("close"),
    timer = null;

  // console.log("wat", card);

  openB.addEventListener("click", function () {
    const id = prompt("Enter my instagram userid to unlock:");
    
    if (id === realID) {
      card.setAttribute("class", "open-half");

      const backgroundMusic = document.getElementById('background-music');

      backgroundMusic.loop = true;
      backgroundMusic.play().catch((error) => {
        console.error("Music playback failed:", error);
      });

      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute("class", "open-fully");
        timer = null;
      }, 1000);
    } else {
      alert("wrong! try again");
    }
  });

  closeB.addEventListener("click", function () {
    card.setAttribute("class", "close-half");
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "");
      timer = null;
    }, 1000);
  });
})();
