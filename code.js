// This function is provided to shake an image.  Use it every time the user clicks on a pokemon.
// Feel free to delete this function and include it as a method within your classes...
const toggleShake = function(element) {
  // Animations only occur when a new class is added to the element.
  // Since we want this to happen every time, we can switch between two different animations
  if (element.classList.contains("shake1")) {
    element.classList.remove("shake1");
    element.classList.add("shake2")
  } else {
    element.classList.remove("shake2");
    element.classList.add("shake1")
  }
}

const main = document.querySelector("main");

// Your Code Here
class Flower {
  constructor(flowerID) { 
    this.imgPath = [`images/flower/flower0.png`, `images/flower/flower1.png`, `images/flower/flower2.png`];
    this.imgIndex = 0;
    this.flowerID = flowerID;
  }
  grow = () => {
    let image = document.getElementById(`${this.flowerID}`);
    if (this.imgIndex >= this.imgPath.length - 1) {
      image.src = this.imgPath[this.imgPath.length - 1];
    } else {
      this.imgIndex += 1;
      image.src = this.imgPath[this.imgIndex];
    }
  }
  render() {
    let imgElement = document.createElement("img");
    document.body.append(imgElement);
    imgElement.src = this.imgPath[this.imgIndex];
    imgElement.id = `${this.flowerID}`;
  }
  onclick() {
    let image = document.getElementById(`${this.flowerID}`);
    image.onclick = this.grow;
  }
}

let flower1 = new Flower("flower1");
let flower2 = new Flower("flower2");
let flower3 = new Flower("flower3");

flower1.render();
flower1.onclick();
flower2.render();
flower2.onclick()
flower3.render();
flower3.onclick();

class Pokemon {
  constructor (imgPath, pokemonID) {
    this.imgPath = imgPath;
    this.imgIndex = -1;
    this.pokemonID = pokemonID;
  }
  evolve = () => {
    let image = document.getElementById(`${this.pokemonID}`);
    let evolveChance = Math.random() * 100;
    toggleShake(image);
    if (evolveChance <= 20) {
      if (this.imgIndex >= this.imgPath.length - 1) {
       image.src = this.imgPath[this.imgPath.length - 1];
     } else {
       this.imgIndex += 1;
       image.src = this.imgPath[this.imgIndex];
     }
   }
  }
  render() {
    let imgElement = document.createElement("img");
    document.body.append(imgElement);
    imgElement.src = "images/pokeball.png";
    imgElement.id = `${this.pokemonID}`;
    imgElement.classList = "shake1"
    imgElement.style.height = "175px"
  }
  onclick() {
    let image = document.getElementById(`${this.pokemonID}`);
    image.onclick = this.evolve;
  }
}

let charmanderImgPath = [`images/charmander/charmander0.png`, `images/charmander/charmander1.png`, `images/charmander/charmander2.png`];
let cyndaquilImgPath = ['images/cyndaquil/cyndaquil.png', 'images/cyndaquil/quilava.png', 'images/cyndaquil/typhlosion.png']
let dittoImgPath = ["images/ditto/ditto.png", "images/ditto/pikaTransformation.png"]
let charmander = new Pokemon(charmanderImgPath, "charmander");
let cyndaquil = new Pokemon(cyndaquilImgPath, "cyndaquil");
let ditto = new Pokemon(dittoImgPath, "ditto");

charmander.render()
charmander.onclick();
cyndaquil.render();
cyndaquil.onclick();
ditto.render();
ditto.onclick();

class Eevee extends Pokemon {
  constructor(imgPath, pokemonID) {
    super(imgPath, pokemonID)
    this.imgIndex = 0
  }
  evolve = () => {
    let image = document.getElementById(`${this.pokemonID}`);
    let evolveChance = Math.floor(Math.random() * 100) + 1;
    let randomEvolution = Math.floor(Math.random() * 8) + 1;
    toggleShake(image);
    if (evolveChance <= 20) {
      if (this.imgIndex < 1) {
        image.src = this.imgPath[this.imgIndex];
        this.imgIndex = randomEvolution;
      } else {
        image.src = this.imgPath[this.imgIndex];
      }
    }
  }
  onclick() {
    let image = document.getElementById(`${this.pokemonID}`);
    image.onclick = this.evolve;
  }
}

let eeveeImgPath = [
  "images/eevee/eevee0.png",
  "images/eevee/eevee1.png",
  "images/eevee/eevee2.png",
  "images/eevee/eevee3.png",
  "images/eevee/eevee4.png",
  "images/eevee/eevee5.png",
  "images/eevee/eevee6.png",
  "images/eevee/eevee7.png",
  "images/eevee/eevee8.png"
]

let eevee1 = new Eevee(eeveeImgPath, "eevee1");
let eevee2 = new Eevee(eeveeImgPath, "eevee2");
let eevee3 = new Eevee(eeveeImgPath, "eevee3");

eevee1.render();
eevee1.onclick();
eevee2.render();
eevee2.onclick();
eevee3.render();
eevee3.onclick();

