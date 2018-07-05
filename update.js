function update () {
    // collision
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player,enemy);
    //game.physics.arcade.collide(diamonds, platforms);
    //game.physics.arcade.collide(enemies, platforms);
    
    // overlap and collect
    //game.physics.arcade.overlap(player, diamonds, collect, null, this);
    
    game.physics.arcade.overlap(player,black,invert);

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

function invert(player, black){
    console.log("black");
    player.body.gravity.y = -200;
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