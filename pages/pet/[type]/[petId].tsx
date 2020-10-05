import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import styles from "../../../styles/Details.module.css";
import Link from "next/link";

export default function PetDetails() {
  const [pet, setPet] = useState(null);
  const pets = useSelector((state) => state.pets);
  const router = useRouter();

  useEffect(() => {
    let currentPet = pets.pets.find((el) => el.id === router.query.petId);
    setPet(currentPet);
  }, []);

  let path = router.asPath.slice(1).split("/");

  return (
    <div>
      {pet && (
        <>
          <div>
            <div className="container">
              <div className="row">
                <h1 className="text-warning font-weight-bold mt-5">
                  {pet.breed}
                </h1>
              </div>
              <div className="row">
                <p className={`${styles.price} font-weight-bold`}>150$</p>
              </div>
              <nav aria-label="breadcrumb" className="row">
                <ol className="breadcrumb shadow-sm bg-white rounded w-100">
                  <li className="breadcrumb-item">
                    <i className="fa fa-clock-o"></i>Timer
                  </li>
                  {path.map((el, i) => (
                    <li key={i} className="breadcrumb-item">
                      <a href="#">
                        {i !== path.length - 1
                          ? el.replace(el[0], el[0].toUpperCase())
                          : pet.breed}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>

          <div className="container">
            <div className="row mt-4">
              <div className="col-12 col-md-8">
                <Carousel className={styles.carouselInner}>
                  {pet.imgs.map((el, i) => (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={el}
                        key={i}
                        alt="pet"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="col-12 col-md-4">
                <div className="row">
                  <div className="col-12 bg-white p-3 shadow-sm rounded">
                    <h3 className="text-warning font-weight-bold">
                      Contact the Seller
                    </h3>
                    <div className="row">
                      <div className="col-4">
                        <img
                          className="img-responsive rounded-circle"
                          src={"/logo.jpg"}
                          alt=""
                        />
                      </div>
                      <div className="col-8">
                        <div className="row">
                          <a href="#">{pet.seller.sellerName}</a>
                        </div>
                        <div className="row">
                          <a href="#">{pet.seller.sellerType}</a>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3 ml-2">
                      <div>
                        <i className="fa fa-map-marker fa-fw"></i>
                        {pet.seller.location}
                      </div>
                    </div>
                    <div className="row my-2 ml-2">
                      <i className="fa fa-user fa-fw"></i>
                      Member since {pet.seller.member_since}
                    </div>
                    <div className="row mx-auto">
                      <button
                        type="button"
                        className="btn btn-info btn-lg btn-block mt-3"
                      >
                        <i className="fa fa-phone mr-2"></i>
                        Phone Number
                      </button>
                    </div>
                    <div className="row mx-auto mt-3">
                      <hr className={styles.horizontal} />
                    </div>
                    <div className="row mx-auto">
                      <button
                        type="button"
                        className="btn btn-info btn-lg btn-block mt-3"
                      >
                        <i className="fa fa-wechat mr-2"></i>
                        Send Message
                      </button>
                    </div>
                    <div className="row mx-auto mt-3">
                      <hr className={styles.horizontal} />
                    </div>
                    <div className="row mt-1">
                      <div className="col-6">
                        <button
                          type="button"
                          className="btn btn-warning btn-lg btn-block btn-sm font-weight-bold text-white mt-3"
                        >
                          <i className="fa fa-heart mr-2"></i>
                          Save
                        </button>
                      </div>

                      <div className="col-6">
                        <button
                          type="button"
                          className="btn btn-warning btn-lg btn-block btn-sm font-weight-bold text-white mt-3"
                        >
                          <i className="fa fa-flag mr-2"></i>
                          Report
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-3 p-3 border border-warning rounded shadow-sm">
                    <h3 className="font-weight-bold text-warning">
                      <i className="fa fa-bolt text-white bg-warning p-1 rounded-circle"></i>
                      Get more visibility!
                    </h3>
                    <p>
                      We have now launched our new "Boost" feature. <br />
                      Click on the link below to{" "}
                      <strong>Boost this advert!</strong>
                    </p>
                    <a
                      href="#"
                      className="btn btn-block btn-warning font-weight-bold text-white"
                    >
                      <i className="fa fa-bolt"></i> Boost this advert
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 mb-4">
              <div className="p-3 rounded shadow-sm">
                <h3 className="font-weight-bold text-warning mb-4">
                  Key Advert Facts
                </h3>
                <div className="row">
                  <div className="col-6 font-weight-bold">
                    Number of views :
                  </div>
                  <div className="col-6">
                    <a href="#">view statistics</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">Ad Reference :</div>
                  <div className="col-6">#######</div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">Pet Type :</div>
                  <div className="col-6">{pet.type}</div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">Pet Breed :</div>
                  <div className="col-6">
                    {pet.breed} (
                    <Link href={`/pet/${pet.type}/breed/${pet.breed}`} passHref>
                      <a>Breed Info</a>
                    </Link>
                    )
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">
                    Breed Popularity :
                  </div>
                  <div className="col-6">
                    #{pet.popularity} out of 244{" "}
                    <Link href={`/pet/${pet.type}`} passHref>
                      <a>
                        {pet.type.replace(
                          pet.type[0],
                          pet.type[0].toUpperCase()
                        )}{" "}
                        Breeds
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">Breed Size :</div>
                  <div className="col-6">
                    <a href="#">{`${pet.size} ${pet.type}`} Breeds</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">Advert Type :</div>
                  <div className="col-6">{pet.advertType}</div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">Location :</div>
                  <div className="col-6">
                    <a href="#">{pet.seller.location}</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">
                    Advertiser Type :
                  </div>
                  <div className="col-6">Breeder / Frequent Advertiser</div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">
                    Council Licensed? :
                  </div>
                  <div className="col-6">
                    No (<a href="#">More Info</a>)
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">
                    Pets Current Age :
                  </div>
                  <div className="col-6">
                    {pet.age} (Not Ready - <a href="#">More Info</a>)
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">Microchipped :</div>
                  <div className="col-6">
                    {pet.microchipped ? "Yes" : "No"} (<a href="#">More Info</a>
                    )
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">Neutred :</div>
                  <div className="col-6">
                    {pet.neutred ? "Yes" : "No"} (<a href="#">More Info</a>)
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">
                    Vaccinations Up-to-Date :
                  </div>
                  <div className="col-6">
                    {pet.vaccinations ? "Yes" : "No"} (<a href="#">More Info</a>
                    )
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 font-weight-bold">KC Registered :</div>
                  <div className="col-6">
                    {pet.kcRegistered ? "Yes" : "No"} (<a href="#">More Info</a>
                    )
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
