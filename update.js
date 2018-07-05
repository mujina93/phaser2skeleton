var negative = false;

function update () {

    // idle
    player.body.velocity.x = 0;

    // collision
    game.physics.arcade.collide(player, platforms);
    //game.physics.arcade.collide(player, enemy);
    //game.physics.arcade.collide(diamonds, platforms);
    game.physics.arcade.overlap(enemies, platforms, patrol_check);
    
    // overlap and collect
    //game.physics.arcade.overlap(player, diamonds, collect, null, this);
    
    // overlap with black -> go negative
    if(game.physics.arcade.intersects(player, black)){
        black.lastOverlapped = game.time.now + 100;
        black.alpha = 0.5;
        if(negative === false){
            player.body.gravity.y = -500;
        }
        negative = true;
    } 
    // unoverlap -> go positive
    /* black.forEach(function(window) {
    if (window.lastOverlapped && game.time.now > window.lastOverlapped) {
        window.alpha = 1;
    } 
    }); */
    if(black.lastOverlapped && game.time.now > black.lastOverlapped){
        black.alpha = 1;
        if(negative === true){
            player.body.gravity.y = 500;
        }
        negative = false;
    }

    // overlap and die
    //game.physics.arcade.overlap(player, enemies, die, null, this);
    
    
    // move
    if (cursors.left.isDown)
    {
        player.body.velocity.x = - this.X_SPEED;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = this.X_SPEED;
    }
    
    // jump with air-control
    if (jumpButton.isDown){
        if(!negative){
            if ((player.body.onFloor() || player.body.touching.down)){
                player.body.velocity.y = -this.Y_SPEED;
            }
        }else{
            if ((player.body.onCeiling() || player.body.touching.up)){
                player.body.velocity.y = this.Y_SPEED;
            }
        }
    }
}

/* 
// collect callback
function collect (player, diamond){
    diamond.kill();
    
    // update score
    score += 1;
    
    // update GUI
    scoreLabel.text = 'Score: ' + score;
}

function die (player, enemy){
    player.kill();
    this.phyics.pause;
} */

function patrol_check(enemy, platform) {
    if (enemy.x + enemy.width/2 > platform.x + platform.width) {
        enemy.body.velocity.x = -game.ENEMY_SPEED;
    }
    if (enemy.x + enemy.width/2 < platform.x) {
        enemy.body.velocity.x = game.ENEMY_SPEED;
    }
    /*
    if (enemy.x + enemy.width/2 > platform.x + platform.width) {
        enemy.body.velocity.x = 0;
        enemy.body.velocity.y = game.ENEMY_SPEED;
    }
    if (enemy.y + enemy.height/2 > platform.y + platform.height) {
        enemy.body.velocity.x = -game.ENEMY_SPEED;
        enemy.body.velocity.y = 0;
    }
    if (enemy.x + enemy.width/2 < platform.x) {
        enemy.body.velocity.x = 0;
        enemy.body.velocity.y = -game.ENEMY_SPEED;
    }
    if (enemy.y + enemy.height/2 < platform.y) {
        enemy.body.velocity.x = game.ENEMY_SPEED;
        enemy.body.velocity.y = 0;
    } */
}
