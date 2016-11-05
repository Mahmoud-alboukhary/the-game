/*the first component of the game named myGameHero */

var myGameHero;
/* the second component is also a global for the obstacles of the game */
var myObstacle;
/* we will build a container for the game, CANVAS ,and the function myGame() invokes the method start() of the myGameArea object, and invokes the component myGameHero and myObstacle */


function myGame() {
	myGameArea.start();
	myGameHero = new component(30, 30, "blue", 10, 120);
	myObstacle = new component(12, 200, "green", 300, 120); 
}
var myGameArea = {
	
	/* we are now creating the canvas, and I think there is another way by adding <canvas> to the body on html page and give it an id , and use getElementById in js to target that id*/
	
	canvas : document.createElement("canvas"),
	
	/* making a function inside the variable myGameArea to give canvas its dimensions and to make it the first child to the body by using [0] and we added getContext("2d") because we need to add a drowing object to canvas to define the methods for drawing*/
	
	start : function() {
	this.canvas.width = 600;
	this.canvas.height = 300;
	this.context = this.canvas.getContext("2d");
	document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	/* here we added a property for counting frames because we want to add many obstacles to our game */
	this.frameNo = 0;	
	/* this interval will run the updateGameArea() function every 20th millisecond (50 times per second) like the cinema movies */
	this.interval = setInterval(updateGameArea, 20);
	/* we added here a method to make myGameHero move when we press a botton and to make it stop when we release the botton by assign the key proparty to myGameArea object to keyCode for moving and to false for stopping */
	window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
     window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
  }, 
	
	/* this function clear() is to clear the whole canvas */
	clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	/* we add here a stop() method to the myGameArea object, which clears the 20 milliseconds interval.*/
	stop : function() {
        clearInterval(this.interval);
    }
}
/* we added here a function named everyinterval it will return true if the current framenumber corresponds with the given interval*/

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}
/* creating a function which contain the size,the position and the color of  myGameHero component and we added also the function update() to handle the drawing of the component myGameHero */

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
	/* we added this.speed x and y as a speed indicators horizontal and vertical */
	this.speedX = 0;
    this.speedY = 0;
	this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	/* this function use the speedx and the speedy to change the component myGameHero position */
	this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
    } 
	/* we added here a new method inside the component constructor , this will check if any component crachs with other one , and later will make it be called every 50 time per second */
	  this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    }

}

/* this function calls the clear() and the update() and the newPos() and the update() method */

function updateGameArea() {
	/* we added an if /else statment to keep the updateGameArea functional unless there is a crash between the components (myGamehero and the obstacles ) */
if (myGameHero.crashWith(myObstacle)) {
        myGameArea.stop();
    } else {
    myGameArea.clear();
	/* we added	myObstacle.x += -1 to make the obstacle move horizontlly */
	myObstacle.x += -1;
    myGameHero.update();
	myGameHero.newPos();
	myObstacle.update();
	}
	/* here we can make the blue square moves when we press the arrow keys and the numbers 37 38 39 40 to select which keys allow the square to moves (in this case the arrows) and -1x 1x -1y 1y for the direction we want myGameHero to move to */
	
	myGameHero.speedX = 0;
    myGameHero.speedY = 0; 
    if (myGameArea.key && myGameArea.key == 37) {myGameHero.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 39) {myGameHero.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 38) {myGameHero.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 40) {myGameHero.speedY = 1; }
  
}
var text = '{"name":"Mahmoud"}';
var obj = JSON.parse(text);
document.getElementById("cby").innerHTML = obj.name;