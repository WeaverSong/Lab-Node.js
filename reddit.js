const request = require('request-promise');
const path = require('path');
const fs = require('fs');

request('https://reddit.com/r/popular.json', {}, (err, res, body) => {
    if (err) console.log (err);
    
    let dataRaw = JSON.parse(body).data.children;
    let data = dataRaw.map(i => ({
        title: i.data.title,
        url: i.data.url,
        author: i.data.author_fullname
    }));

    fs.writeFile(path.join(__dirname, "popular-articles.json"), JSON.stringify(data), err => console.log(err))
})