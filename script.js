const flashcards = [
    {
        question: "Qual é o Pokémon inicial de água da região de Kanto?",
        answer: "Squirtle.",
        image: "https://img.pokemondb.net/sprites/home/normal/squirtle.png"
    },
    {
        question: "Qual é o Pokémon mais forte da região de Johto?",
        answer: "Lugia.",
        image: "https://img.pokemondb.net/sprites/home/normal/lugia.png"
    },
    {
        question: "Qual Pokémon é conhecido como o 'Pokémon Elétrico'?",
        answer: "Pikachu.",
        image: "https://img.pokemondb.net/sprites/home/normal/pikachu.png"
    },
    {
        question: "Qual é o Pokémon do tipo fogo inicial da região de Kanto?",
        answer: "Charmander.",
        image: "https://img.pokemondb.net/sprites/home/normal/charmander.png"
    },
    {
        question: "Qual Pokémon é conhecido como o 'Pokémon Mítico' da região de Kanto?",
        answer: "Mew.",
        image: "https://img.pokemondb.net/sprites/home/normal/mew.png"
    },
    {
        question: "Qual é o Pokémon que evolui para Gyarados?",
        answer: "Magikarp.",
        image: "https://img.pokemondb.net/sprites/home/normal/magikarp.png"
    },
    {
        question: "Qual Pokémon é conhecido como o 'Pokémon de Pedra'?",
        answer: "Geodude.",
        image: "https://img.pokemondb.net/sprites/home/normal/geodude.png"
    },
    {
        question: "Qual é o Pokémon que é o mascote da franquia Pokémon?",
        answer: "Pikachu.",
        image: "https://img.pokemondb.net/sprites/home/normal/pikachu.png"
    },
    {
        question: "Qual é o Pokémon que pode aprender o movimento Surf?",
        answer: "Lapras.",
        image: "https://img.pokemondb.net/sprites/home/normal/lapras.png"
    },
    {
        question: "Qual Pokémon é conhecido como o 'Pokémon Lendário' da região de Sinnoh?",
        answer: "Dialga.",
        image: "https://img.pokemondb.net/sprites/home/normal/dialga.png"
    },
    {
        question: "Qual Pokémon é conhecido como o 'Pokémon Sapo'?",
        answer: "Poliwag.",
        image: "https://img.pokemondb.net/sprites/home/normal/poliwag.png"
    },
    {
        question: "Qual é o Pokémon que tem um ataque chamado 'Hidrobomba'?",
        answer: "Blastoise.",
        image: "https://img.pokemondb.net/sprites/home/normal/blastoise.png"
    },
    {
        question: "Qual Pokémon é conhecido como o 'Pokémon da Fúria'?",
        answer: "Gyarados.",
        image: "https://img.pokemondb.net/sprites/home/normal/gyarados.png"
    },
    {
        question: "Qual é o Pokémon que evolui de Bulbasaur?",
        answer: "Ivysaur.",
        image: "https://img.pokemondb.net/sprites/home/normal/ivysaur.png"
    },
    {
        question: "Qual Pokémon é conhecido como o 'Pokémon da Luz'?",
        answer: "Ampharos.",
        image: "https://img.pokemondb.net/sprites/home/normal/ampharos.png"
    },
    {
        question: "Qual é o Pokémon que pode aprender o movimento 'Golpe de Canto'?",
        answer: "Jigglypuff.",
        image: "https://img.pokemondb.net/sprites/home/normal/jigglypuff.png"
    },
    {
        question: "Qual Pokémon é conhecido como o 'Pokémon do Sonho'?",
        answer: "Snorlax.",
        image: "https://img.pokemondb.net/sprites/home/normal/snorlax.png"
    },
    {
        question: "Qual é o Pokémon do tipo fada que evolui de Sylveon?",
        answer: "Eevee.",
        image: "https://img.pokemondb.net/sprites/home/normal/sylveon.png"
    },
    {
        question: "Qual é o Pokémon que tem a habilidade 'Levitação'?",
        answer: "Gengar.",
        image: "https://img.pokemondb.net/sprites/home/normal/gengar.png"
    },
    {
        question: "Qual é o Pokémon que evolui de Pidgey?",
        answer: "Pidgeotto.",
        image: "https://img.pokemondb.net/sprites/home/normal/pidgeotto.png"
    },
    {
        question: "Qual é o Pokémon que pode aprender o movimento 'Terremoto'?",
        answer: "Groudon.",
        image: "https://img.pokemondb.net/sprites/home/normal/groudon.png"
    },
];

let currentFlashcardIndex = 0;

// Função para exibir o flashcard
function showFlashcard(index) {
    const flashcard = flashcards[index];
    document.getElementById('question').textContent = flashcard.question;
    document.getElementById('answer').textContent = ""; // Limpa a resposta ao mostrar a nova pergunta
    document.getElementById('pokemon-image').src = ""; // Limpa a imagem ao mostrar a nova pergunta

    // Atualiza o contador
    document.getElementById('counter').textContent = `Pergunta ${index + 1} de ${flashcards.length}`;

    // Rotaciona o card de volta
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.classList.remove('flipped');
}

// Navegação entre os flashcards
document.getElementById('prev').addEventListener('click', () => {
    currentFlashcardIndex = (currentFlashcardIndex > 0) ? currentFlashcardIndex - 1 : flashcards.length - 1;
    showFlashcard(currentFlashcardIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentFlashcardIndex = (currentFlashcardIndex < flashcards.length - 1) ? currentFlashcardIndex + 1 : 0;
    showFlashcard(currentFlashcardIndex);
});

// Função para mudar o tema
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Evento para o botão de mudança de tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Evento para virar o flashcard
document.getElementById('flip').addEventListener('click', () => {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');

    const flashcardData = flashcards[currentFlashcardIndex];
    if (flashcard.classList.contains('flipped')) {
        document.getElementById('answer').textContent = flashcardData.answer;
        document.getElementById('pokemon-image').src = flashcardData.image;
    } else {
        document.getElementById('answer').textContent = "";
        document.getElementById('pokemon-image').src = "";
    }
});

// Inicializa o primeiro flashcard
showFlashcard(currentFlashcardIndex);
