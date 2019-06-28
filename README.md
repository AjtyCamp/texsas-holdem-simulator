# texsas-holdem-simulator
Simple texas hold'em simulator.



Your task is show **Probability of winning** with your current hand in Texas Hold'em simulator `index.html` by standard rules. For more information about calculating probability serach on internet. :)

## Some notes

- Simulator generate random game. You can change count of players (minimum is One/You, maximum 4/expected you)
- For you is important game object from croupier entity `croupier.js​`(also log into console)
- Main file for you developing is `game.js`
- Your result have to return in `calculateProbability` function.

## List of hands (best to worst)

### 1. Royal Flush

The best hand in poker, a "royal flush" is extremely rare, consisting of the highest possible straight (ace to ten) with all cards being the same suit. ![{A-Spades}](https://www.pokernews.com/img/cards/as.gif)![{K-Spades}](https://www.pokernews.com/img/cards/ks.gif)![{Q-Spades}](https://www.pokernews.com/img/cards/qs.gif)![{J-Spades}](https://www.pokernews.com/img/cards/js.gif)![{10-Spades}](https://www.pokernews.com/img/cards/10s.gif)would represent a royal flush.



### 2. Straight Flush

A straight flush is a five-card straight (that is, five cards of consecutive rank) with all five being the same suit. (A royal flush is an example of a straight flush — the highest one.) For example, ![{9-Hearts}](https://www.pokernews.com/img/cards/9h.gif)![{8-Hearts}](https://www.pokernews.com/img/cards/8h.gif)![{7-Hearts}](https://www.pokernews.com/img/cards/7h.gif)![{6-Hearts}](https://www.pokernews.com/img/cards/6h.gif)![{5-Hearts}](https://www.pokernews.com/img/cards/5h.gif) is a straight flush and would beat even an ace-high flush.



### 3. Four of a kind

Next comes four of a kind or "quads," that is, four cards of the same rank. A hand like ![{Q-Spades}](https://www.pokernews.com/img/cards/qs.gif)![{Q-Hearts}](https://www.pokernews.com/img/cards/qh.gif)![{Q-Clubs}](https://www.pokernews.com/img/cards/qc.gif)![{Q-Diamonds}](https://www.pokernews.com/img/cards/qd.gif)![{2-Clubs}](https://www.pokernews.com/img/cards/2c.gif) is four of a kind and would beat any hand other than a straight flush or royal flush.



### 4. Full house

A full house consists of three cards of the same rank along with two more cards of the same rank (in other words, three of a kind plus a pair). ![{J-Hearts}](https://www.pokernews.com/img/cards/jh.gif)![{J-Clubs}](https://www.pokernews.com/img/cards/jc.gif)![{J-Diamonds}](https://www.pokernews.com/img/cards/jd.gif)![{10-Clubs}](https://www.pokernews.com/img/cards/10c.gif)![{10-Diamonds}](https://www.pokernews.com/img/cards/10d.gif) is an example of a full house and beats a flush, a straight, and all lesser-ranked hands.



### 5. Flush

A flush consists of any five cards of the same suit, such as ![{K-Diamonds}](https://www.pokernews.com/img/cards/kd.gif)![{J-Diamonds}](https://www.pokernews.com/img/cards/jd.gif)![{7-Diamonds}](https://www.pokernews.com/img/cards/7d.gif)![{5-Diamonds}](https://www.pokernews.com/img/cards/5d.gif)![{2-Diamonds}](https://www.pokernews.com/img/cards/2d.gif). When comparing two flushes, the one containing the highest-ranked card is best. Therefore a flush containing an ace (an "ace-high flush") would beat this king-high flush.



### 6. Straight

A straight is made from any five cards consecutive in rank that are not all the same suit, such as ![{J-Hearts}](https://www.pokernews.com/img/cards/jh.gif)![{10-Clubs}](https://www.pokernews.com/img/cards/10c.gif)![{9-Diamonds}](https://www.pokernews.com/img/cards/9d.gif)![{8-Hearts}](https://www.pokernews.com/img/cards/8h.gif)![{7-Spades}](https://www.pokernews.com/img/cards/7s.gif). When comparing two straights, the one with the highest-ranking card is best, so this jack-high straight would beat a ten-high straight (going from ten to six) and all lower ones.



### 7. Three of a kind

Making three of a kind or "trips" requires having three cards of the same rank among your five — for example, ![{6-Hearts}](https://www.pokernews.com/img/cards/6h.gif)![{6-Clubs}](https://www.pokernews.com/img/cards/6c.gif)![{6-Diamonds}](https://www.pokernews.com/img/cards/6d.gif)![{K-Spades}](https://www.pokernews.com/img/cards/ks.gif)![{9-Clubs}](https://www.pokernews.com/img/cards/9c.gif). Three aces is the best possible three of a kind to make, followed by three kings, three queens, and so forth.



### 8. Two pair

Two pair involves having two cards of the same rank plus two more cards of the same rank among the five in your hand, such as ![{A-Clubs}](https://www.pokernews.com/img/cards/ac.gif)![{A-Diamonds}](https://www.pokernews.com/img/cards/da.gif)![{5-Spades}](https://www.pokernews.com/img/cards/5s.gif)![{5-Hearts}](https://www.pokernews.com/img/cards/5h.gif)![{3-Clubs}](https://www.pokernews.com/img/cards/3c.gif). The best possible two-pair hand is aces and kings.



### 9. One pair

Making one pair means having two cards of the same rank in your five-card poker hand, with the other three cards being unpaired. For example, ![{K-Spades}](https://www.pokernews.com/img/cards/ks.gif)![{K-Hearts}](https://www.pokernews.com/img/cards/kh.gif)![{8-Spades}](https://www.pokernews.com/img/cards/8s.gif)![{7-Diamonds}](https://www.pokernews.com/img/cards/7d.gif)![{2-Clubs}](https://www.pokernews.com/img/cards/2c.gif)would constitute a one-pair hand.



### 10. High card

A "high card" hand consists of five unpaired cards that make neither a straight nor a flush, such as ![{A-Clubs}](https://www.pokernews.com/img/cards/ac.gif)![{K-Hearts}](https://www.pokernews.com/img/cards/kh.gif)![{J-Diamonds}](https://www.pokernews.com/img/cards/jd.gif)![{10-Spades}](https://www.pokernews.com/img/cards/10s.gif)![{8-Hearts}](https://www.pokernews.com/img/cards/8h.gif). The highest-ranked of the five cards determines its value, so an "ace-high" hand (such as this example) would beat a "king-high" hand, and so forth.

