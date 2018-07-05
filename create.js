var player;
var platforms;
var cursors;
var jumpButton;
var score;
var scoreLabel;
var black;

function create() {
    // global variables
    this.X_SPEED = 250;
    this.Y_SPEED = 400;
    this.GRAVITY = 500;
    game.ENEMY_SPEED = 100;
    
    // initialize score
    score = 0;
    
    // black space
    black = game.add.sprite(500,0,'platform');
    black.scale.y = 20;
    black.tint = 0x000000;
    game.physics.arcade.enable(black);
    


    player = game.add.sprite(400, 500, 'player');
    
    /* // diamonds
    diamonds = game.add.physicsGroup();
    for(var i=0; i<12; i++){
        var diamond = diamonds.create(i*70, 0, 'star'); // create
        diamond.body.gravity.y = this.GRAVITY; // gravity
        diamond.body.bounce.y = 0.7 + Math.random()*0.2; // bouncing
    }*/
    
    // physics
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = this.GRAVITY;
    
    // platforms
    platforms = game.add.physicsGroup();
    platforms.create(500, 400, 'platform');
    platforms.create(50, 250, 'platform'); // new platform
    platforms.setAll('body.immovable', true);

    // enemies
    enemies = game.add.physicsGroup();
    for(var j=0; j<1; j++){
        var enemy = enemies.create(200, 204, 'enemy');
        enemy.scale.setTo(0.5, 0.5);
        enemy.body.collideWorldBounds = true;
        enemy.body.velocity.x = game.ENEMY_SPEED;
    }
    
    // controls
    cursors = game.input.keyboard.createCursorKeys();
    // add SPACEBAR binding
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


    // GUI label - score
    scoreLabel = this.add.text(16,16,'Score: 0', {fontSize: '32px', fill: '#000'});
    
}
