/* Enemies our player must avoid */
class Enemy {
  /* Create and initialise an Enemy object */
  constructor() {
    this.sprite = './images/enemy-bug.png';
    this.resetEnemy();
  }

  /* Reset an Enemy (i.e. default x position with random y position / speed) */
  resetEnemy() {
    this.x = -101;
    this.y = this.generateY();
    this.speed = this.generateSpeed();
  }

  /* Randomly generate an enemy's y position */
  generateY() {
    return Math.floor((Math.random() * 3) + 1) * 83 - 25;
  }

  /* Randomly generate an enemy's speed
   * Parameter: dt, a time delta between ticks
   * N.B. any movement is multiplied by the parameter 'dt', which ensures the
   * game runs at the same speed for all computers.
   */
  generateSpeed(dt) {
    return Math.random() * (5 - 1) + 1;
  }

  /* Update the enemy's position */
  update() {
    if (this.x > 505) {
      this.resetEnemy();
    } else {
      this.x += this.speed;
    }
  }

  /* Draw an enemy on the screen, required method for game. */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

/* A player */
class Player {
  /* Create and initialise a Player object */
  constructor() {
    this.sprite = './images/char-boy.png';
    this.x = 2;
    this.y = 5;
  }

  /* Reset a player to the starting position */
  reset() {
    this.x = 2;
    this.y = 5;
  }

  /* Not required */
  update() {}

  /* Draw a player on the screen, required method for game. */
  render() {
    ctx.drawImage(Resources.get(this.sprite),
      (this.x * 101), (this.y * 83) - 20);
  }

  /* Parse input of keys (invoked when when a key is pressed)
   * Parameter: keyPressed, the key pressed (i.e. right, left, down, up)
   */
  handleInput(keyPressed) {
    switch (keyPressed) {
      case "right":
        this.moveRight();
        break;
      case "left":
        this.moveLeft();
        break;
      case "down":
        this.moveDown();
        break;
      case "up":
        this.y -= 1
        break;
    }
  }

  /* Move a player right if they aren't at right edge of board */
  moveRight() {
    if (this.x != 4) {
      this.x += 1
    }
  }

  /* Move a player left if they aren't at left edge of board */
  moveLeft() {
    if (this.x != 0) {
      this.x -= 1
    }
  }

  /* Move a player down if they aren't at bottom of board */
  moveDown() {
    if (this.y != 5) {
      this.y += 1
    }
  }
}

/* Instantiate Enemies and place them in array 'allEnemies' */
let enemy1 = new Enemy(),
  enemy2 = new Enemy(),
  enemy3 = new Enemy();
  allEnemies = [enemy1, enemy2, enemy3];

/* Place the player object in a variable called player */
let player = new Player();

/* This listens for key presses and sends the keys to your
 * Player.handleInput() method. You don't need to modify this
 * */
document.addEventListener('keyup', function (e) {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});