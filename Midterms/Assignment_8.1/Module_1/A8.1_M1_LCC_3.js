// Image constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// images object with list and methods
let images = {
    list: [],
    // Check if image title already exists in list
    contains(title) {
        return this.list.some(img => img.title === title);
    },
    // Add image if not already in list
    add(title, artist, date) {
        if (!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },
    // Display all images
    show() {
        for (let img of this.list) {
            console.log(`${img.title} (${img.artist}, ${img.date})`);
        }
    },
    // Remove all images from list
    clear() {
        this.list = [];
    }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();
