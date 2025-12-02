//A p5.js instance-mode sketch in JavaScript

new p5(sketch);

function sketch(p) {
    //in global-mode these would be global variables.  Here they're confined by our function scope

    /** An array of colours (hex code strings) */
    const palette = ["#5e412f", "#fcebb6", "#78c0a8", "#f07818", "#f0a830"];

    p.setup = function setup() {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(20);
        p.fill("white");
    };

    p.draw = function draw() {
        p.background(20);
        p.circle(p.width / 2, p.height / 2, 50);
        const myPos = randomPositionAroundMouse(100);
        p.circle(myPos.x, myPos.y, 20);
        p.text("instance-mode sketch", 50, p.height - 50);
    };

    p.mousePressed = function mousePressed() {
        p.fill(p.random(palette));
    };

    /** Create and return a position (Vector) within a radius around the mouse
     * @param {number} range - max allowed distance from mouse
     * @returns {p5.Vector} */
    function randomPositionAroundMouse(range) {
        //This function (and its jsdoc) is mostly here to check type-checking
        // of p5.Vector is available both as a type and as a runtime value.
        const offset = p5.Vector.random2D().mult(p.random(0, range));
        return offset.add(p.mouseX, p.mouseY);
    }
}
