function update(db){
    if(db.side_effects != null){
        db.effect = db.effect + ", " + db.side_effects
    }
    db = db[Math.floor(Math.random() * db.length)].attributes
    document.getElementById("name").innerHTML = db.name
    document.getElementById("inc").innerHTML = db.characteristics
    document.getElementById("name").href = db.wiki
    document.getElementById("desc").innerHTML = db.effect
    document.getElementById("image").src = db.image
    document.getElementById("category").innerHTML = db.ingredients
}
var db = []
// Fetch data from the API
Promise.all([
    fetch("https://api.potterdb.com/v1/potions?page[number]=1"),
    fetch("https://api.potterdb.com/v1/potions?page[number]=2")
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