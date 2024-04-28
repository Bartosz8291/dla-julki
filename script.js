const jokes = [
    "Dlaczego kurczak przeszedł na drugą stronę ulicy? Żeby się znaleźć z drugim kurczakiem!",
    "Dlaczego programiści nie lubią natury? Bo ma za mało cache'u!",
    "Dlaczego JavaScript nie jeżdzi na rowerze? Bo zawsze traci zasięg!",
    "Dlaczego niebo się nie nudzi? Bo nawet jak jest bezchmurne, zawsze jest na czym patrzeć!",
    "Dlaczego książki nigdy nie mogą ożyć? Bo mają okładki!",
    "Dlaczego koń nauczył się liczyć? Bo ktoś mu pokazał, jak liczyć kopyta!",
    "Dlaczego banana nie można zaczepić? Bo zawsze ma przypiętą skórkę!"
];

function getJoke() {
    const jokeText = document.getElementById('joke-text');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeText.textContent = jokes[randomIndex];
}
