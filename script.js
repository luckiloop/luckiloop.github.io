const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');
const links = navMenu.querySelectorAll('a');
const hero = document.getElementById('hero');
const sections = document.querySelectorAll('.content-section');

// toggle burger menu
menuIcon.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// show section on menu click
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('data-target');

    if(targetId === 'hero'){
      hero.style.display = 'flex';
      sections.forEach(sec => sec.classList.remove('show'));
      sections.forEach(sec => sec.classList.add('hidden'));
    } else {
      hero.style.display = 'none';
      sections.forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('show');
      });
      const targetSection = document.getElementById(targetId);
      targetSection.classList.remove('hidden');
      targetSection.classList.add('show');
    }

    // hide menu after selection
    navMenu.style.display = 'none';
  });
});
const footer = document.getElementById('footer');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('data-target');

    if(targetId === 'hero'){
      hero.style.display = 'flex';
      sections.forEach(sec => sec.classList.remove('show'));
      sections.forEach(sec => sec.classList.add('hidden'));
      footer.style.display = 'block';  // show footer on Home
    } else {
      hero.style.display = 'none';
      sections.forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('show');
      });
      const targetSection = document.getElementById(targetId);
      targetSection.classList.remove('hidden');
      targetSection.classList.add('show');
      footer.style.display = 'none';  // hide footer on other pages
    }

    // hide menu after selection
    navMenu.style.display = 'none';
  });
  // Rock Paper Scissors Game
const gameButtons = document.querySelectorAll("#game .choices button");
const gameResult = document.getElementById("result");

gameButtons.forEach(button => {
  button.addEventListener("click", () => {
    playRPS(button.dataset.choice);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const gameButtons = document.querySelectorAll("#game .choices button");
  const gameResult = document.getElementById("result");

  gameButtons.forEach(button => {
    button.addEventListener("click", () => {
      playRPS(button.dataset.choice);
    });
  });

  function playRPS(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    gameResult.innerText = `Computer chose: ${computerChoice}...`;

    setTimeout(() => {
      let result;
      if (playerChoice === computerChoice) {
        result = `It's a tie! You both chose ${playerChoice}`;
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        result = `You win! ${playerChoice} beats ${computerChoice}`;
      } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}`;
      }
      gameResult.innerText = result;
    }, 800);
  }
});


});

