# Wordlé - French Vocab Memorization Game

## What is Wordlé?
My sister is currently learning French so I built a vocab memorization game to help her. The game is essentially a modified version of wordle where the user can generate a game with a solution from a specific category that they select (colours, animals, food etc). Like the standard wordle game, the player will have 6 attempts at guessing the correct word.

## How to Play?
<p align="middle">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/Main%20Menu.JPG" width="300" height="300">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/SelectCategory.jpg" width="300" height="300">
</p>

Bonjour and bienvenue to Wordlé👋 To get started, choose a category and click <code>PLAY</code> to create a game session. The word solution will be selected from a list of words from that specific category.

<p align="middle">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/GameStart.JPG" width="300" height="300">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/FirstGuess.JPG" width="300" height="300">
</p>

An image of the word solution is generated for each game using the [Pexels API](https://www.pexels.com/api/). The user would know what the solution is in english but would need to recall the french translation to win. Enter your guess using your keyboard and hit the <code>"ENTER"</code> key to check.

<p align="middle">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/GuessWrong.jpg" width="300" height="300">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/UnluckyLose.JPG" width="300" height="300">
</p>

If the user guesses incorrectly after 6 attempts, they lose 😔

<p align="middle">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/GuessRight.jpg" width="300" height="300">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/WinScreen.JPG" width="300" height="300">
</p>

If the user guesses the correct word within 6 attempts, they win!🎉 Click on the word solution (ex: <code>POMME</code>) to hear the french pronunciation on the word in google translate. Then click <code>play again</code> to generate a new session using the same category or click <code>new category</code> to be redirected to the main menu.

<p align="middle">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/GoogleTranslate.JPG" width="455" height="300">
</p>

You can also add your own words/categories or delete words from the existing word list by clicking the respective buttons on the main menu.

<p align="middle">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/AddWords.JPG" width="380" height="300">
<img src="https://github.com/Kireshanth/wordle-french/blob/main/images/DeleteWords.JPG" width="460" height="300">
</p>

## Getting Started
You must make sure you have NPM installed and have a mongoDB account to create a word list.

After clone the repo and open it in your code editor. Then navigate to the .env file saved in <code>server/config/.env</code> and add your [connection string](https://www.mongodb.com/docs/guides/atlas/connection-string)

Open both the server and client folders in separate terminals and run the command <code>npm start</code> while inside your server folder first. Then run <code>npm start</code> in your other terminal to launch the client side front end. If successful, you should be able to click add new words to start creating your word database then see the category on the main menu.

## Nerd Stuff (MERN Stack)

<code>
let wordlé = {
frontend: "reactJS",
backend: "node/express",
database: "mongoDB/mongoose" } </code>


Wordlé was built following the [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) architecture. The model(data) is handled using mongoose and stored on mongoDB. The views which the user will interact with are created using ReactJS. The functional programming (i.e backend) which handles the routing and controllers is written using NodeJS and Express.

To create the base wordle game, written in pure reactJS, I followed a [tutorial by Net Ninja](https://www.youtube.com/watch?v=ZSWl5UwhHcs&ab_channel=TheNetNinja).

## Future Improvements

- [ ] Add user authentication (google) using PassportJS
- [ ] Deploy application to hosting service (Heroku)
- [ ] Track progress of all words guessed correctly
- [ ] Improve UI, add dark and light modes

