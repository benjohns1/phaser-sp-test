class StaticFloater_Red extends StaticFloater {
    
    constructor(game) {
        super(game, 0xa82f39, 10, 20);
        this.debug = false;
        this.resource.energy = this.radius;
        this.resource.red = Math.ceil(this.radius / 8);
    }
}