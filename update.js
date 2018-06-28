function update() {

    // This stops the sprite, should it was moving.
    sprite.body.velocity.x = 0;
    sprite.body.velocity.y = 0;

    // Now process the input state and set the sprite velocity accordingly.
    // Horizontal movement
    if (cursors.left.isDown)
    {
        sprite.body.velocity.x = -600;
    }
    else if (cursors.right.isDown)
    {
        sprite.body.velocity.x = 600;
    }
    // Vertical movement
    if (cursors.up.isDown)
    {
        sprite.body.velocity.y = -600;
    }
    else if (cursors.down.isDown)
    {
        sprite.body.velocity.y = 600;
    }

}
