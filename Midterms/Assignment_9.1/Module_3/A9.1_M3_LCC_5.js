class Figure {
    constructor(elements = []) {
        this.elements = { points: [], lines: [] };
        for (let el of elements) {
            if (el instanceof Point) this.addPoint(el.x, el.y);
            else if (el instanceof Line) this.addLine(el.points.map(p => [p.x, p.y]));
        }
    }

    // Serialize point for deduplication key
    #pointKey(p) {
        return `${p.x},${p.y}`;
    }

    // Serialize line for deduplication key (sorted points)
    #lineKey(l) {
        return l.points.map(p => this.#pointKey(p)).sort().join('|');
    }

    // Add point only if not already present
    addPoint(x, y) {
        let p = new Point(x, y);
        if (!this.elements.points.some(ep => ep.x === x && ep.y === y)) {
            this.elements.points.push(p);
        }
    }

    // Add line only if not already present
    addLine(coords) {
        let l = new Line(coords);
        let key = this.#lineKey(l);
        if (!this.elements.lines.some(el => this.#lineKey(el) === key)) {
            this.elements.lines.push(l);
        }
    }

    // Sort points and lines in collection
    sort() {
        this.elements.points.sort((a, b) => a.x - b.x || a.y - b.y);
        this.elements.lines.sort((a, b) => this.#lineKey(a).localeCompare(this.#lineKey(b)));
    }

    // Return collection as JSON string
    toJSON() {
        return JSON.stringify(this.elements);
    }

    // Parse JSON and add to or replace collection
    fromJSON(json, append = false) {
        let parsed = JSON.parse(json);
        if (!append) this.deleteAll();
        for (let p of parsed.points) this.addPoint(p.x, p.y);
        for (let l of parsed.lines) this.addLine(l.points.map(p => [p.x, p.y]));
    }

    // Clear all points and lines
    deleteAll() {
        this.elements = { points: [], lines: [] };
    }
}
