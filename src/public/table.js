var table = (function(){
    var self = {
        game,
        currentStep: 0,
    };

    function element(id) {
        return document.getElementById(id);
    }

    var gui;

    function setGui() {
        gui = {
            button: {
                start: element("start-btn"),
                next: element("next-btn"),
                reset: element("reset-btn"),
            },
            input: {
                playersCount: element("player-count")
            },
            table: {
                tableCard1: element("tableCard1"),
                tableCard2: element("tableCard2"),
                tableCard3: element("tableCard3"),
                tableCard4: element("tableCard4"),
                tableCard5: element("tableCard5"),
            },
            players: {
                one: {
                    first: element("playerOneCard1"),
                    second: element("playerOneCard2"),
                },
                two: {
                    first: element("playerTwoCard1"),
                    second: element("playerTwoCard2"),
                },
                three: {
                    first: element("playerThreeCard1"),
                    second: element("playerThreeCard2"),
                },
            },
            hand: {
                first: element("playerCard1"),
                second: element("playerCard2"),
            },
            percentage: element("percentage"),
        }
    }

    function setActions() {
        
        function resetCards() {
            gui.table.tableCard1.innerText = "";
            gui.table.tableCard2.innerText = "";
            gui.table.tableCard3.innerText = "";
            gui.table.tableCard4.innerText = "";
            gui.table.tableCard5.innerText = "";
            gui.players.one.first.innerText = "";
            gui.players.one.second.innerText = "";
            gui.players.two.first.innerText = "";
            gui.players.two.second.innerText = "";
            gui.players.three.first.innerText = "";
            gui.players.three.second.innerText = "";
            gui.hand.first.innerText = "";
            gui.hand.second.innerText = "";
            gui.percentage.innerText = "";
        }

        function startGame() {

            self.game = crupier.play(gui.input.playersCount.value);
            self.currentStep=1;
            console.log(self.game);
            gui.table.tableCard1.innerText = self.game.table.begin[0].card;
            gui.table.tableCard2.innerText = self.game.table.begin[1].card;
            gui.table.tableCard3.innerText = self.game.table.begin[2].card;

            gui.hand.first.innerText = self.game.hand[0].card;
            gui.hand.second.innerText = self.game.hand[1].card;

            if (gui.input.playersCount.value > 1) {
                gui.players.one.first.innerText = self.game.playerOne[0].card;
                gui.players.one.second.innerText = self.game.playerOne[1].card;
            }
            if (gui.input.playersCount.value > 2) {
                gui.players.two.first.innerText = self.game.playerTwo[0].card;
                gui.players.two.second.innerText = self.game.playerTwo[1].card;
            }
            if (gui.input.playersCount.value > 3) {
                gui.players.three.first.innerText = self.game.playerThree[0].card;
                gui.players.three.second.innerText = self.game.playerThree[1].card;
            }

            gui.percentage.innerText = game.calculateProbability(self.game, self.currentStep);
        }

        gui.button.start.onclick = function() {
            if (self.currentStep !=0) return;
            startGame();
        }

        gui.button.next.onclick = function() {
            if (self.currentStep > 2 || self.currentStep < 1) return;
            self.currentStep++;
            self.currentStep === 2 &&
            (gui.table.tableCard4.innerText = self.game.table.second.card);
            self.currentStep === 3 &&
            (gui.table.tableCard5.innerText = self.game.table.third.card);

            gui.percentage.innerText = game.calculateProbability(self.game, self.currentStep);
        }

        gui.button.reset.onclick = function() {
            resetCards();
            startGame();
        }
    }

    self.init = function() {
        setGui();
        setActions();
    }

    return self;
}())