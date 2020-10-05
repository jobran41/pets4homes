import Link from "next/link";
import styles from "../../styles/Home.module.css";

export const sales = [
  {
    title: "Dogs for Sale",
    salesImg: "/dog_icon.png",
    breed: [
      "Pugs",
      "Bulldogs",
      "Chihuahuas",
      "Cockapoos",
      "Shih Tzus",
      "French Bulldogs",
      "German",
      "Shepherds",
      "Cocker Spaniels",
      "Labradors",
      "Mixed Breeds",
    ],
  },
  {
    title: "Cats for Sale",
    salesImg: "/cat_icon.png",
    breed: [
      "Bengals",
      "Birmans",
      "British Shorthairs",
      "Exotics",
      "Norwegian Forest",
      "Mixed Breeds",
      "Persians",
      "Ragdolls",
      "Siamese",
      "Orientals",
    ],
  },
  {
    title: "Rabbits for Sale",
    salesImg: "/rabbit_icon.png",
    breed: [
      "British Giants",
      "Mini Lops",
      "Dutch",
      "Dwarf Lops",
      "French Lops",
      "Continental Giants",
      "Lionheads",
      "Mixed Breeds",
      "Netherland Dwarf",
      "Rex",
    ],
  },
  {
    title: "Horses for Sale",
    salesImg: "/horse_icon.png",
    breed: [
      "Appaloosa",
      "Connemara",
      "Irish Draught",
      "Irish Sports",
      "Thoroughbred",
      "Belgian Warmblood",
      "Welsh Section A",
      "Welsh Section B",
      "Welsh Section C",
      "Welsh Section D",
    ],
  },
  {
    title: "Rodents for Sale",
    salesImg: "/rodent_icon.png",
    breed: [
      "Chinchilla",
      "Degus",
      "Ferret",
      "Gerbil",
      "Guinea Pig",
      "Pygmy Hedgehog",
      "Mouse",
      "Hamster",
      "Rat",
      "Sugar Glider",
    ],
  },
  {
    title: "Reptils for Sale",
    salesImg: "/reptile_icon.png",
    breed: [
      "Bearded Dragon",
      "Chameleon",
      "Gecko",
      "Frog",
      "Iguana",
      "Lizard",
      "Snake",
      "Terrapin",
      "Tortoise",
      "Turtle",
    ],
  },
  {
    title: "Birds for Sale",
    salesImg: "/bird_icon.png",
    breed: [
      "Budgerigars",
      "Canaries",
      "Cockatiels",
      "Doves",
      "Finches",
      "Lories",
      "Lovebirds",
      "Macaws",
      "Parrots",
      "Pigeons",
    ],
  },
  {
    title: "Fish for Sale",
    salesImg: "/fish_icon.png",
    breed: [
      "Angelfish",
      "Barbs",
      "Bettas",
      "Cichlids",
      "Discus",
      "Goldfish",
      "Gouramis",
      "Koi Carp",
      "Rainbow Fish",
      "Tetras",
    ],
  },
  {
    title: "Poultry for Sale",
    salesImg: "/poultry_icon.png",
    breed: [
      "Chickens",
      "Ducks",
      "Geese",
      "Guinea Fowl",
      "Hens",
      "Pheasants",
      "Quail",
      "Turkeys",
      "Waterfowl",
      "Peafowl",
    ],
  },
];

const PetsForSale = () => {
  return (
    <div className="container mt-4">
      <div className={styles.salesList}>
        {sales.map((el, i) => (
          <div className={styles.saleItem} key={i}>
            <img src={el.salesImg} alt={el.title} className={styles.salesImg} />
            <Link href={el.title}>
              <a className={styles.salesTitle}>{el.title}</a>
            </Link>
            <div className="row card-body">
              <div className="col-sm-12 col-md-5">
                <ul className="list-unstyled adjust-text">
                  {el.breed.slice(el.breed.length / 2).map((ancest, i) => (
                    <li key={i}>
                      <Link href={`/${ancest}`}>
                        <a className={styles.ancest}>{ancest}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-12 col-md-5">
                <ul className="list-unstyled adjust-text">
                  {el.breed.slice(0, el.breed.length / 2).map((ancest, i) => (
                    <li key={i}>
                      <Link href={`/${ancest}`}>
                        <a className={styles.ancest}>{ancest}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsForSale;
