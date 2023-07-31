function update(db){
    console.log(db)
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
db = []
fetch("https://api.potterdb.com/v1/spells?page[number]=1")
  .then(response => response.json())
  .then(data => {
    db = db.concat(data.data)
    
    
    
  })
fetch("https://api.potterdb.com/v1/spells?page[number]=2")
    .then(response => response.json())
    .then(data => {
        db = db.concat(data.data)


})
fetch("https://api.potterdb.com/v1/spells?page[number]=3")
    .then(response => response.json())
    .then(data => {
        db = db.concat(data.data)


})
fetch("https://api.potterdb.com/v1/spells?page[number]=4")
    .then(response => response.json())
    .then(data => {
        db = db.concat(data.data)


})