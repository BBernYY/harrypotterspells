function update(db){
    db = db[Math.floor(Math.random() * db.length)].attributes
    if (db.incantation == null){
        db.incantation = db.name
    }
    document.getElementById("name").innerHTML = db.name
    document.getElementById("inc").innerHTML = db.incantation
    document.getElementById("name").href = db.wiki
    document.getElementById("desc").innerHTML = db.effect
    document.getElementById("image").src = db.image
    document.getElementById("category").innerHTML = db.category
}
var db = []
// Fetch data from the API
Promise.all([
    fetch("https://api.potterdb.com/v1/spells?page[number]=1"),
    fetch("https://api.potterdb.com/v1/spells?page[number]=2"),
    fetch("https://api.potterdb.com/v1/spells?page[number]=3"),
    fetch("https://api.potterdb.com/v1/spells?page[number]=4")
])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
        data.forEach(responseData => {
            db = db.concat(responseData.data);
        });
        update(db); // Call the update function here, after all API responses have been processed.
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });