# the-game
the first step is building a (canvas) so i added the object myGameArea .

then i added the function myGame() which invokes the method start() of the myGameArea object.

The start() method creates a <canvas> element , 

the second step is to add the first component named myGameHero.

third step is to make the game ready for movings,

 so I updated the display 50 times per second ,

 i created a new function called updateGameArea().

In the myGameArea object, I added an interval which will run the updateGameArea() function every 50 times per second. 

Also add a function called clear(), that clears the entire canvas.

In the component constructor, i added a function called update(), to handle the drawing of the component.

The updateGameArea() function calls the clear() and the update() method.

then I start to make the control for the game there are many ways by mouse or by using the canvas it self but I choose to use the keyboard up down left right buttons

then I added an abostacle to the game and make the game stop when the abostacle crash with the component and i made the abostacle move.

at the end i used JSON to write my name as a text to try using javascript object notation.

for more details you can check the comments on the javascript file.

