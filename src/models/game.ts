export class Game {
    public players = [{
        name: "Bunny",
        img: "../assets/img/profiles/profile_1.svg"
    },
    {
        name: "Amy",
        img: "../assets/img/profiles/profile_3.svg"
    },
    {
        name: "Rey",
        img: "../assets/img/profiles/profile_4.svg"
    },
    {
        name: "Mamoru",
        img: "../assets/img/profiles/profile_2.svg"
    },
    ]
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        this.loadStack();
    }

    loadStack() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i + '.png');
            this.stack.push('clubs_' + i + '.png');
            this.stack.push('diamonds_' + i + '.png');
            this.stack.push('hearts_' + i + '.png');
        }
        shuffle(this.stack);
    }
}

function shuffle(array: string[]) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}