import Link from "next/link";
import { useRouter } from "next/router";
import { sales } from "../../components/Home/PetsForSale";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Search.module.css";

const petsTypes = [
  "Birds",
  "Cats",
  "Dogs",
  "Horses",
  "Invertebrates",
  "Poultry",
  "Rabbits",
  "Reptiles",
  "Rodents",
];

export default function Search() {
  const router = useRouter();
  const [breed, setBreed] = useState(null);
  const [resPerPage, setResPerPage] = useState(10);
  const [searchBy, setSearchBy] = useState({
    type: router.query.type,
    breed: router.query.breed,
    adType: "For Sale",
    location: router.query.location || "",
    distance: 0,
    price: 0,
    keyword: "",
  });
  const [filteredPets, setFilteredPets] = useState([]);
  const pets = useSelector((state) => state.pets);

  useEffect(() => {
    let type = router.query.type ? router.query.type.toLowerCase() : "";
    let breed = sales.find((el) => el.title.toLowerCase().includes(type)).breed;
    setBreed(breed);
    setSearchBy({
      ...searchBy,
      breed: router.query.breed,
    });
    let location = router.query.location ? router.query.location : "";
    setFilteredPets(
      pets.pets.filter(
        (el) =>
          el.type.toLowerCase() === type &&
          el.breed.toLowerCase() === router.query.breed &&
          el.seller.location.toLowerCase().includes(location)
      )
    );
  }, []);

  const SelectType = (e) => {
    let type = e.target.value.toLowerCase();
    let breed = sales.find((el) => el.title.toLowerCase().includes(type)).breed;
    setSearchBy({
      ...searchBy,
      type: e.target.value,
    });
    setBreed(breed);
  };
  const handleChanger = (e) => {
    if (e.target.name === "type") {
      setSearchBy({
        ...searchBy,
        breed: "",
      });
    }
    setSearchBy({
      ...searchBy,
      [e.target.name]: e.target.value,
    });
  };

  const handleResultPerPage = (e) => {
    setResPerPage(+e.target.value);
  };
  return (
    <div className="container mt-5 mb-4">
      <div className="row">
        <div className="col-4">
          <form className="px-4 py-2 bg-white rounded" action="action_page.php">
            <h3 className="font-weight-bold text-center">Refine Search</h3>
            <div className="form-group">
              <label
                htmlFor="pet-type"
                className="control-label font-weight-bold pb-0"
              >
                Pet type
              </label>

              <select
                name="pet type"
                id="pet-type"
                className="form-control"
                onChange={SelectType}
                value={searchBy.type}
              >
                <option value="">Pet type</option>
                {petsTypes.map((el, i) => (
                  <option key={i} value={el.toLowerCase()}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="pet-breed"
                className="control-label font-weight-bold pb-0"
              >
                Pet Breed
              </label>
              <select
                name="breed"
                id="pet-breed"
                className="form-control"
                onChange={handleChanger}
                value={searchBy.breed}
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
            <div className="form-group">
              <label
                htmlFor="advert-type"
                className="control-label font-weight-bold pb-0"
              >
                Advert Type
              </label>
              <select
                name="adType"
                id="advert-type"
                className="form-control"
                value={searchBy.adType}
                onChange={handleChanger}
              >
                <option value="For Sale">For Sale</option>
                <option value="For Adoption">For Adoption</option>
                <option value="For Stud">For Stud</option>
                <option value="Wanted">Wanted</option>
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="location"
                className="control-label font-weight-bold pb-0"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="form-control"
                placeholder="Town or Postcode"
                name="location"
                value={searchBy.location}
                onChange={handleChanger}
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="distanceRange"
                className="control-label font-weight-bold pb-0"
              >
                Distance
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={searchBy.distance}
                className={styles.slider}
                onChange={handleChanger}
                name="distance"
                id="distanceRange"
              />

              <span className="ml-1 text-muted">{searchBy.distance}</span>
            </div>
            <div className="form-group">
              <div>
                <label
                  htmlFor="priceRange"
                  className="control-label font-weight-bold pb-0"
                >
                  Price
                </label>

                <input
                  type="range"
                  min="1"
                  max="100"
                  value={searchBy.price}
                  className={styles.slider}
                  onChange={handleChanger}
                  name="price"
                  id="priceRange"
                />
                <span className="ml-1 text-muted">{searchBy.price}</span>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="keywords"
                className="control-label font-weight-bold pb-0"
              >
                Keywords
              </label>
              <input
                type="text"
                id="keywords"
                className="form-control"
                value={searchBy.keyword}
                name="keyword"
                onChange={handleChanger}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="resultsPerPage"
                className="control-label font-weight-bold pb-0"
              >
                Results Per Page
              </label>
              <select
                id="resultsPerPage"
                className="form-control"
                name="result_per_page"
                onChange={handleResultPerPage}
                value={resPerPage}
              >
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="updateSearch"
                className="control-label font-weight-bold pb-0 invisible"
              >
                Update Search
              </label>
              <button
                type="submit"
                name="update search"
                className="btn btn-block btn-warning font-weight-bold text-white"
                id="Updatesearch"
              >
                Update Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <h1 className="row text-warning font-weight-bold">
            Pets in {router.query.location}
          </h1>

          <p className="row">
            Pets4Homes found &nbsp;<b>27,163 Pets in Tunisia</b>, which meet
            your criteria.
          </p>
          <div className="row">
            <form>
              <div className="form-group">
                <label
                  htmlFor="sortBy"
                  className="control-label font-weight-bold pb-0"
                >
                  Sort By
                </label>

                <select name="sort by" id="sortBy" className="form-control">
                  <option value="" className="active">
                    Date Updated (Newest)
                  </option>
                  <option value="">Date Updated (Oldest)</option>
                  <option value="">Date Created (Newest)</option>
                  <option value="">Price (Lowest)</option>
                  <option value="">Price (Highest)</option>
                </select>
              </div>
            </form>
          </div>
          <div className="row w-100 mx-0 px-0 mt-4">
            <div className="col d-flex px-0">
              <div className={`${styles.hrdivider} px-0`}>
                <div
                  className={`${styles.div} text-warning font-weight-bold w-25 ml-5 border border-warning rounded`}
                >
                  <i className="fa fa-bolt mr-1"></i>
                  Boosted Adverts
                </div>
                <hr className={`${styles.divider} w-100 px-0 border-warning`} />
              </div>
            </div>
          </div>
          {pets.pets
            .filter((el) => el.boostedAd)
            .map((el, i) => (
              <div
                className={`container border border-warning mt-4 ${styles.card}`}
              >
                <div className="row" key={i}>
                  <div className="col-4 embed-responsive">
                    <img
                      src={el.petImg}
                      alt="dog"
                      className="embed-responsive-item"
                    />
                  </div>
                  <div className="col-8">
                    <div className="py-2">
                      <h5 className="text-warning font-weight-bold">
                        {el.adTitle}
                      </h5>
                      <p className="font-weight-bold">
                        <i className="fa fa-map-marker"></i>{" "}
                        {el.seller.location}
                      </p>
                      <p className="mt-3 small">{el.description}</p>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent p-0 mt-2">
                          <li className="breadcrumb-item">Sale</li>
                          <li className="breadcrumb-item">Dogs</li>
                          <li className="breadcrumb-item">
                            White Swiss Shepherd
                          </li>
                          <li className="breadcrumb-item">Buxton</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 px-3 py-3">
                    <div
                      className={`text-warning font-weight-bold ${styles.price}`}
                    >
                      Price {el.price} $
                    </div>
                  </div>

                  <div className="col-8 border-top border-left">
                    <div className="row">
                      <div className="col-2 embed-responsive">
                        <img
                          className="img-responsive rounded-circle p-2"
                          src="/logo.jpg"
                          alt="user icon"
                        />
                      </div>
                      <div className="col-8 p-2">
                        <div className="row">
                          <a href="#">{el.seller.sellerName}</a>
                        </div>
                        <div className="row">
                          <a href="#">{el.seller.sellerType}</a>
                        </div>
                      </div>
                      <div className="col-2 p-2">
                        <a href="#">
                          <i
                            className="fa fa-3x fa-heart-o text-warning"
                            title="Add to favourites"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="row w-100 mx-0 px-0 mt-4">
            <div className="col d-flex px-0">
              <div className={`${styles.hrdivider} px-0`}>
                <div
                  className={`${styles.div} text-secondary font-weight-bold ml-5 w-25 border border-secondary rounded`}
                >
                  All Adverts
                </div>
                <hr
                  className={`${styles.divider} w-100 px-0 border-secondary`}
                />
              </div>
            </div>
          </div>
          {filteredPets.length ? (
            filteredPets.map((el, i) => (
              <Link href={`/pet/${el.type}/${el.id}`}>
                <div
                  className={`container shadow-sm mt-4 ${styles.card}`}
                  key={i}
                >
                  <div className="row">
                    <div className="col-4 embed-responsive">
                      <img
                        src={el.petImg}
                        alt="dog"
                        className="embed-responsive-item"
                      />
                    </div>
                    <div className="col-8">
                      <div className="py-2">
                        <h5 className="text-warning font-weight-bold">
                          {el.adTitle}
                        </h5>
                        <p className="font-weight-bold">
                          <i className="fa fa-map-marker"></i>{" "}
                          {el.seller.location}
                        </p>
                        <p className="mt-3 small">{el.description}</p>
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb bg-transparent p-0 mt-2">
                            <li className="breadcrumb-item">Sale</li>
                            <li className="breadcrumb-item">Dogs</li>
                            <li className="breadcrumb-item">
                              White Swiss Shepherd
                            </li>
                            <li className="breadcrumb-item">Buxton</li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 px-3 py-3">
                      <div className={`font-weight-bold ${styles.price}`}>
                        Price {el.price} $
                      </div>
                    </div>

                    <div className="col-8 border-top border-left">
                      <div className="row">
                        <div className="col-2 embed-responsive">
                          <img
                            className="img-responsive rounded-circle p-2"
                            src="/logo.jpg"
                            alt="user icon"
                          />
                        </div>
                        <div className="col-8 p-2">
                          <div className="row">
                            <a href="#">{el.seller.sellerName}</a>
                          </div>
                          <div className="row">
                            <a href="#">{el.seller.sellerType}</a>
                          </div>
                        </div>
                        <div className="col-2 p-2">
                          <a href="#">
                            <i
                              className="fa fa-3x fa-heart-o text-secondary"
                              title="Add to favourites"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h1 className="text-center font-weight-bold text-warning m-5">
              No Result
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
