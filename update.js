function update () {
    // collision
    game.physics.arcade.collide(player, platforms);
    //game.physics.arcade.collide(diamonds, platforms);
    //game.physics.arcade.collide(enemies, platforms);
    
    // overlap and collect
    //game.physics.arcade.overlap(player, diamonds, collect, null, this);
    
    // overlap and die
    //game.physics.arcade.overlap(player, enemies, die, null, this);
    
    // idle
    player.body.velocity.x = 0;
    
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
    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = - this.Y_SPEED;
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