// Add show method to Image prototype
Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
};

// Add edit method to images object
images.edit = function(title, artist, date) {
    let img = this.list.find(img => img.title === title);
    if (img) {
        img.artist = artist;
        img.date = date;
    }
};

// Add delete method to images object
images.delete = function(title) {
    let index = this.list.findIndex(img => img.title === title);
    if (index !== -1) {
        this.list.splice(index, 1);
    }
};

// Modify show to use Image prototype show method
images.show = function() {
    for (let img of this.list) {
        img.show();
    }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)
