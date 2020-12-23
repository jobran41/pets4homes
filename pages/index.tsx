import List from "../components/Home/List";
import PetsForSale from "../components/Home/PetsForSale";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import PopularDogs from "../components/Home/PopularDogs";
import { useState } from "react";
import { sales } from "../components/Home/PetsForSale";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [breed, setBreed] = useState(null);
  const [emptyType, setEmptyType] = useState(false);
  const [emptyBreed, setEmptyBreed] = useState(false);
  const [searchBy, setSearchBy] = useState({
    type: "",
    breed: "",
    location: "",
  });
  const SelectType = (e) => {
    let type = e.target.value.toLowerCase();
    let breed = sales.find((el) => el.title.toLowerCase().includes(type)).breed;
    setSearchBy({
      ...searchBy,
      type: e.target.value,
    });
    setBreed(breed);
  };
  const handleChange = (e) => {
    setSearchBy({
      ...searchBy,
      [e.target.name]: e.target.value,
    });
  };

  const goToSearchResult = () => {
    if (searchBy.type && searchBy.breed) {
      return router.push(
        `/search/?type=${searchBy.type}&breed=${searchBy.breed}${
          searchBy.location && `&location=${searchBy.location}`
        }`
      );
    } else if (!searchBy.type) {
      setEmptyType(true);
      return setTimeout(() => {
        setEmptyType(false);
      }, 5000);
    } else {
      setEmptyBreed(true);
      return setTimeout(() => {
        setEmptyBreed(false);
      }, 5000);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <h3 className="font-weight-bold text-center">
            Find your perfect pet
          </h3>
          <div className="row flex-wrap">
            <div className="col">
              <div className="form-group mb-0">
                <label className={styles.label} htmlFor="pet-type">
                  Pet type
                </label>

                <select
                  name="type"
                  id="pet-type"
                  className="form-control"
                  onChange={SelectType}
                  style={{ border: emptyType && "1px solid red" }}
                >
                  <option value="">Pet type</option>
                  <option value="dogs">Dogs</option>

                </select>
              </div>



            </div>
            <div className="col">

{/*               <div className="form-group mb-0">
                <label className={styles.label} htmlFor="location">
                  Location
                </label>
                <select
                  name="location"
                  id="location"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Pet Location</option>
                  <option value="tunis">Tunis</option>
                  <option value="ariana">Ariana</option>
                  <option value="ben arous">Ben Arous</option>
                  <option value="sousse">Sousse</option>
                </select>
              </div> */}

              <div className="form-group">
                <label className={styles.label} htmlFor="pet-breed">
                  Pet Breed
                </label>
                <select
                  name="breed"
                  id="pet-breed"
                  className="form-control"
                  onChange={handleChange}
                  value={searchBy.breed}
                  style={{ border: emptyBreed && "1px solid red" }}
                >
                  <option value="">Pet Breed</option>
                  {breed &&
                    breed.map((el, i) => (
                      <option key={i} value={el.toLowerCase()}>
                        {el}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
                <label className={styles.searchLabel} htmlFor="search">
                  Search
                </label>
                <button
                  name="search"
                  className="btn btn-block btn-warning font-weight-bold text-white"
                  id="search"
                  onClick={goToSearchResult}
                >
                  Search
                </button>
              </div>
        </div>
      </div>
      <List listOf={"pets"} title={"Pets Sales"} />
      <List listOf={"articles"}  title={"Pets Sales"}/>
    </>
  );
}
