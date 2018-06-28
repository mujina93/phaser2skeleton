// Now that we defined all callbacks, we can start the game engine.
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content', { 
    preload: preload, 
    create: create,
    update: update,
    render: render
});

