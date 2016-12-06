// Enemies our player must avoid
class Enemy {
  constructor() {
    // The image/sprite for our enemies
    this.sprite = './images/enemy-bug.png';
    this.x = 0; this.y =  Math.floor((Math.random() * 3) + 1) * 83 - 25;
    this.speed = Math.random() * (5 - 1) + 1;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If an enemy is off the grid, return them to the start.
    if (this.x > 505) {
      this.x = -101;
    } else {
      this.x += this.speed;
    }
  }

  // Draw the enemy on the screen, required method for game.
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor() {
    this.sprite = './images/char-boy.png';
    this.x = 2; this.y = 5;
  }

  update() {}

  render() {
    ctx.drawImage(Resources.get(this.sprite), (this.x * 101), (this.y * 83) - 20);
  }

  handleInput(keyPressed) {
    switch (keyPressed) {
      case "right": this.x += 1
        break;
      case "left": this.x -= 1
        break;
      case "down": this.y += 1
        break;
      case "up": this.y -= 1
        break;
    }
  }
}

// Now instantiate your objects.
let enemy1 = new Enemy();
// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1];
// Place the player object in a variable called player
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});