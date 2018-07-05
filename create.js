var player;
var platforms;
var cursors;
var jumpButton;
var diamonds;
var score;
var scoreLabel;
var enemies;

function create() {
    // global variables
    this.X_SPEED = 250;
    this.Y_SPEED = 400;
    this.GRAVITY = 500;
    this.ENEMY_SPEED = 400;
    
    // initialize score
    score = 0;
    
    // GUI label - score
    scoreLabel = this.add.text(16,16,'Score: 0', {fontSize: '32px', fill: '#000'});
    
    // player
    player = game.add.sprite(400, 510, 'player');
    
    // diamonds
    diamonds = game.add.physicsGroup();
    for(var i=0; i<12; i++){
        var diamond = diamonds.create(i*70, 0, 'star'); // create
        diamond.body.gravity.y = this.GRAVITY; // gravity
        diamond.body.bounce.y = 0.7 + Math.random()*0.2; // bouncing
    }
    
    // enemies
    enemies = game.add.physicsGroup();
    for(var j=0; j<5; j++){
        var enemy = enemies.create(j*180+20, 0, 'enemy');
        // no gravity, only initial velocity
        enemy.body.velocity.x = this.ENEMY_SPEED*(Math.random()*2-1);
        enemy.body.velocity.y = this.ENEMY_SPEED*(Math.random()*2-1);
        // maximum bouncing everywhere
        enemy.body.bounce.x = 1;
        enemy.body.bounce.y = 1;
        enemy.body.collideWorldBounds = true;
    }
    
    // physics
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = this.GRAVITY;
    
    // platforms
    platforms = game.add.physicsGroup();
    platforms.create(0, 550, 'platform');
    platforms.create(500, 400, 'platform');
    platforms.create(50,250, 'platform'); // new platform
    platforms.setAll('body.immovable', true);
    
    // controls
    cursors = game.input.keyboard.createCursorKeys();
    // add SPACEBAR binding
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
}