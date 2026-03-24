// Image constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// getImage factory function
function getImage(title, artist, date) {
    return { title, artist, date };
}

// Create images1 using Image constructor
let images1 = images.map(img => new Image(img.title, img.artist, img.date));

// Create images2 using getImage factory
let images2 = images1.map(img => getImage(img.title, img.artist, img.date));

// Display contents of images2
for (let img of images2) {
    console.log(`${img.title} (${img.artist}, ${img.date})`);
}
