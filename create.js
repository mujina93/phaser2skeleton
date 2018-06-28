var sprite;
var cursors;

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen, at the specified position.
    sprite = game.add.sprite(400, 300, 'phaser-dude');

    // This activates some basic collision detection
    game.physics.arcade.enable(sprite);
    sprite.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();

}
