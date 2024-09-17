export interface Player {
    name: string;
    img: string;
}

export class Game {
    public players: Player[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public profileImg: string[] = ["../assets/img/profiles/profile_1.svg", "../assets/img/profiles/profile_2.svg", "../assets/img/profiles/profile_3.svg", "../assets/img/profiles/profile_4.svg"];

    constructor() {
        this.loadStack();
    }

    loadStack() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
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