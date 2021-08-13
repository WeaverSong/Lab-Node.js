const path = require('path');
const fs = require('fs');
const root = path.join(__dirname, "../")

let chirps = [
    {
        owner: "Chirper",
        message: "Chirp!",
        timeStamp: Date.now()
    },
    {
        owner: "Bluebird",
        message: "Cheep!",
        timeStamp: Date.now()
    },
    {
        owner: "Mouse",
        message: "Squeek!",
        timeStamp: Date.now()
    },
    {
        owner: "Owl",
        message: "Hoot!",
        timeStamp: Date.now()
    },
    {
        owner: "Mouse",
        message: "Squeek! Squeek!",
        timeStamp: Date.now()
    }
];

fs.writeFileSync(path.join(root, "chirps.json"), JSON.stringify(chirps));

fs.readFile(path.join(root, "chirps.json"), {}, (err, data) => {
    if (err) console.log(err);

    chirps = JSON.parse(data);
    console.log(chirps);
});