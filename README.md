# The Battleship Breaker

This repo contains a Tampermonkey UserScript that breaks the battleship game.

The script tries to replace the original script that controls the game function with a custom one that makes battleships visible no matter what. The injection may fail depending on how the browser treats it. Generally, open the browser inspect window and keep refreshing the page until the opponent's battleships can be seen. This method works on some browsers like Chrome but not the other. The script also tries to log a message in the console once successfully mounted, but it does **not** mean that the script is functional. Do not attempt to further refresh the page once the script is successfully activated, or else its effect might disappear. The user may also override the original script manually and permanently using browser debugging tools.
