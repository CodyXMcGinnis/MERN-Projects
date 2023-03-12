const PetController = require("../controllers/pet.controller");

module.exports = (app)=>{
    app.post("/api/pets", PetController.createPet);
    app.get("/api/pets", PetController.displayAllPets);
    app.get("/api/pets/:id", PetController.displayPet);
    app.put("/api/pets/:id", PetController.updatePet);
    app.delete("/api/pets/:id", PetController.deletePet);
}