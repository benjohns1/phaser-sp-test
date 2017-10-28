class StaticFloater extends Phaser.Group {
    
    constructor(game, color, minRadius, maxRadius) {
        super(game);
        this.debug = false;
        this.color = color;
        this.damping = 0.5;
        this.startingPoint = {
            x: game.math.between(0, this.game.world.width),
            y: game.math.between(0, this.game.world.height)
        };
        this.radius = game.math.between(minRadius, maxRadius);
        this.resource = {};
        
        // Floater
        this.floater = this.createGraphics(this.startingPoint.x, this.startingPoint.y, this.radius);
    }

    createGraphics(x, y, radius) {

        // Draw floater
        const g = this.game.add.graphics(x, y);
        g.beginFill(this.color);
        g.drawCircle(0, 0, radius * 2);
        g.endFill();
        g.inputEnabled = true;
        g.events.onInputDown.add(() => {
            console.log('clicked', arguments);
        }, this);
        this.add(g);

        this.setupPhysics(g, radius);

        return g;
    }

    setupPhysics(g, radius) {

        // Enable physics
        this.game.physics.p2.enableBody(g, this.debug);
        g.body.setCircle(radius);
        this.id = g.body.data.id;
        g.body.damping = this.damping;
    }
}