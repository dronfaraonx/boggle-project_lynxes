const boggleLetters = {
  cube1: "AAEEGN",
  cube2: "ABBJOO",
  cube3: "ACHOPS",
  cube4: "AFFKPS",

  cube5: "AOOTTW",
  cube6: "CIMOTU",
  cube7: "DEILRX",
  cube8: "DELRVY",

  cube9: "DISTTY",
  cube10: "EEGHNW",
  cube11: "EEINSU",
  cube12: "EHRTVW",

  cube13: "EIOSST",
  cube14: "ELRTTY",
  cube15: "HIMNUQu",
  cube16: "HLNNRZ",
};

let selectedButtons = [];

let usedCubes = [];

function getRandomLetter(cube) {
  const randomIndex = Math.floor(Math.random() * cube.length);
  return cube[randomIndex];
}

const buttons = document.querySelectorAll('.button');
const buttonMix = document.querySelector('.buttonMix');

buttonMix.addEventListener('click', () => {
  selectedButtons = [];
  usedCubes = [];

  buttons.forEach(button => {
    button.classList.remove('selected');
  });

  Object.keys(boggleLetters).forEach(cubeKey => {
    const cube = boggleLetters[cubeKey];
    const randomLetter = getRandomLetter(cube);

    const buttonIndex = parseInt(cubeKey.slice(4)) - 1; 
    buttons[buttonIndex].textContent = randomLetter;
  });
});


buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const cubeKey = `cube${index + 1}`;

    if (!usedCubes.includes(cubeKey)) {
      usedCubes.push(cubeKey);
      
      button.classList.add('selected');

      selectedButtons.push(button);

      console.log(`Выбрана кнопка с буквой ${button.textContent}`);
    } else {
      console.log(`Кубик ${cubeKey} уже использован`);
    }
  });
});


// calculate points
  function calculateScore(word) {
    const length = word.length;
    let score = 0;

    if (length >= 3 && length <= 4) {
        score = 1;
    } else if (length === 5) {
        score = 2;
    } else if (length === 6) {
        score = 3;
    } else if (length === 7) {
        score = 5;
    } else if (length >= 8) {
        score = 11;
    }

    return score;
}