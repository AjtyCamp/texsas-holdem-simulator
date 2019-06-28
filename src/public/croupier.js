var crupier = (function(){
    var self = {};

    var cardGen = function(id, type, color, card) {
        var card = {
            id,
            type,
            color,
            card,
        }

        return card;
    }

    self.deck = [
        cardGen(1,"A","♠","🂡"),
        cardGen(2,"2","♠","🂢"),
        cardGen(3,"3","♠","🂣"),
        cardGen(4,"4","♠","🂤"),
        cardGen(5,"5","♠","🂥"),
        cardGen(6,"6","♠","🂦"),
        cardGen(7,"7","♠","🂧"),
        cardGen(8,"8","♠","🂨"),
        cardGen(9,"9","♠","🂩"),
        cardGen(10,"10","♠","🂪"),
        cardGen(11,"J","♠","🂫"),
        cardGen(12,"Q","♠","🂭"),
        cardGen(13,"K","♠","🂮"),

        cardGen(14,"A","♥","🂱"),
        cardGen(15,"2","♥","🂲"),
        cardGen(16,"3","♥","🂳"),
        cardGen(17,"4","♥","🂴"),
        cardGen(18,"5","♥","🂵"),
        cardGen(19,"6","♥","🂶"),
        cardGen(20,"7","♥","🂷"),
        cardGen(21,"8","♥","🂸"),
        cardGen(22,"9","♥","🂹"),
        cardGen(23,"10","♥","🂺"),
        cardGen(24,"J","♥","🂻"),
        cardGen(25,"Q","♥","🂽"),
        cardGen(26,"K","♥","🂾"),

        cardGen(27,"A","♦","🃁"),
        cardGen(28,"2","♦","🃂"),
        cardGen(29,"3","♦","🃃"),
        cardGen(30,"4","♦","🃄"),
        cardGen(31,"5","♦","🃅"),
        cardGen(32,"6","♦","🃆"),
        cardGen(33,"7","♦","🃇"),
        cardGen(34,"8","♦","🃈"),
        cardGen(35,"9","♦","🃉"),
        cardGen(36,"10","♦","🃊"),
        cardGen(37,"J","♦","🃋"),
        cardGen(38,"Q","♦","🃍"),
        cardGen(39,"K","♦","🃎"),

        cardGen(40,"A","♣","🃑"),
        cardGen(41,"2","♣","🃒"),
        cardGen(42,"3","♣","🃓"),
        cardGen(43,"4","♣","🃔"),
        cardGen(44,"5","♣","🃕"),
        cardGen(45,"6","♣","🃖"),
        cardGen(46,"7","♣","🃗"),
        cardGen(47,"8","♣","🃘"),
        cardGen(48,"9","♣","🃙"),
        cardGen(49,"10","♣","🃚"),
        cardGen(50,"J","♣","🃛"),
        cardGen(51,"Q","♣","🃝"),
        cardGen(52,"K","♣","🃞"),
    ];

    self.riffle = function() {
        var currentIndex = self.deck.length,
            temporaryValue, 
            randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = self.deck[currentIndex];
            self.deck[currentIndex] = self.deck[randomIndex];
            self.deck[randomIndex] = temporaryValue;
        }
    }

    self.play = function(playersCount) {
        self.riffle();
        
        playersCount = playersCount ? playersCount : 1;

        return {
            table: {
                begin: [
                    self.deck[0],
                    self.deck[1],
                    self.deck[2],
                ],
                second: self.deck[3],
                third: self.deck[4],
            },
            hand: [
                self.deck[5],
                self.deck[6],
            ],
            playerOne: playersCount>1 ? [self.deck[7], self.deck[8],] : [],
            playerTwo: playersCount>2 ? [self.deck[9], self.deck[10],] : [],
            playerThree: playersCount>3 ? [self.deck[11], self.deck[12],] : [],
        }
    }

    return self;
}())