const typeColorCode = {
    normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      fairy: "#D685AD",
      steel: '#B7B7CE'
};

export function typeColor(type) {
    let backgroundColor = "";
    switch (type) {
      case "normal":
        backgroundColor = typeColorCode.normal;
        break;
      case "fire":
        backgroundColor = typeColorCode.fire;
        break;
      case "water":
        backgroundColor = typeColorCode.water;
        break;
      case "electric":
        backgroundColor = typeColorCode.electric;
        break;
      case "grass":
        backgroundColor = typeColorCode.grass;
        break;
      case "ice":
        backgroundColor = typeColorCode.ice;
        break;
      case "fighting":
        backgroundColor = typeColorCode.fighting;
        break;
      case "poison":
        backgroundColor = typeColorCode.poison;
        break;
      case "ground":
        backgroundColor = typeColorCode.ground;
        break;
      case "flying":
        backgroundColor = typeColorCode.flying;
        break;
      case "psychic":
        backgroundColor = typeColorCode.psychic;
        break;
      case "bug":
        backgroundColor = typeColorCode.bug;
        break;
      case "rock":
        backgroundColor = typeColorCode.bug;
        break;
      case "ghost":
        backgroundColor = typeColorCode.ghost;
        break;
      case "dragon":
        backgroundColor = typeColorCode.dragon;
        break;
      case "fairy":
        backgroundColor = typeColorCode.fairy;
        break;
      case "steel":
          backgroundColor = typeColorCode.steel;
          break;
    }
    return backgroundColor;
  }