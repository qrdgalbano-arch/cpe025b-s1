class Point {
    constructor(x, y) {
        this.type = 'point';
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(coords) {
        this.type = 'line';
        // Map coordinate pairs to Point objects
        this.points = coords.map(([x, y]) => new Point(x, y));
    }
}

class Figure {
    constructor(elements = []) {
        this.elements = { points: [], lines: [] };
        // Add initial elements if provided
        for (let el of elements) {
            if (el instanceof Point) this.elements.points.push(el);
            else if (el instanceof Line) this.elements.lines.push(el);
        }
    }

    // Add a point to the collection
    addPoint(x, y) {
        this.elements.points.push(new Point(x, y));
    }

    // Add a line to the collection
    addLine(coords) {
        this.elements.lines.push(new Line(coords));
    }

    // Return collection as JSON string
    toJSON() {
        return JSON.stringify(this.elements);
    }

    // Parse JSON and add to or replace collection
    fromJSON(json, append = false) {
        let parsed = JSON.parse(json);
        if (!append) this.deleteAll();
        for (let p of parsed.points) this.elements.points.push(new Point(p.x, p.y));
        for (let l of parsed.lines) this.elements.lines.push(new Line(l.points.map(p => [p.x, p.y])));
    }

    // Clear all points and lines
    deleteAll() {
        this.elements = { points: [], lines: [] };
    }
}

let f = new Figure();
f.addPoint(10,20);
f.addPoint(10,10);
f.addLine([[10,20], [30,40], [50,60]]);
let json = f.toJSON();
console.log(json);
f.fromJSON(json, true);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
console.log(f.elements.points.length);
console.log(f.elements.lines.length);