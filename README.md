# blackjack
Link to Trello Project 1 - https://trello.com/b/HVhK8pEY/project-1

Technologies Used:
  -Bootstrap CSS
  -Bootstrap JS
  -JQuery

Approach taken - I broke the game down into small user stories (listed below).

1. As a player, I will be dealt any card in a standard 52 card deck at random so that it is possible to receive any combination of cards.
2. As a player, I will be dealt a hand of cards automatically at the start of each new game so I can make a decision on my next move.
3. As a player, I will have the option to "hit" or so that I will have control of my hand.
4. As a player, I will have the option to "stand" or so that I will have control of my hand.
5. As a player, I will be able to view the dealers cards after I have made my decision so I can see how much I won or lost by.
6. As a player, I will be notified if the dealer "bust" (went over 21), or was closer to 21 than the dealer (without going over), so I know when I won.
7. As a player, I will be notified if I "bust" (went over 21), or was farther from the 21 than the dealer, so I know when I lose.
8. As a player, I will be notified when I tie the dealer so I can play again if I choose.

I approached each of these steps one at a time. There were several times when I realized I needed to make a different function in order to accomplish my current user story. I started with a card constructor which made it really easy for me to draw a new card whenever I needed one. Instead of using an API, I made classes for all the cards which pointed to their image url. 

I was able to get a betting function to work in the end, which allows a player to place a bet between 1 and 100, and they win that amount if they win the hand, and lose that amount if they lose the hand.

Installation instructions
-View and play game here - 
-To install, fork the repository here - 

