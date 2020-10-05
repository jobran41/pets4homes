import styles from "../../styles/Home.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const List = ({ listOf }) => {
  const pets = useSelector((state) => state.pets);
  const articles = useSelector((state) => state.articles);

  return (
    <section className="section-padding section-bg text-center">
      <div className="container mt-4">
        {listOf === "pets" ? (
          <>
            <div className="row d-flex justify-content-between align-items-center px-5">
              <h3 className="text-warning font-weight-bold">Latest Adverts</h3>
              <a className="text-warning font-weight-bold" href="#">
                View all
              </a>
            </div>
            <div className={styles.listItems}>
              {pets.pets.map((el, i) => (
                <Link href={`/pet/${el.type}/${el.id}`} passHref key={i}>
                  <div className={styles.item}>
                    <img src={el.petImg} className={styles.cardImg} alt="pet" />
                    <div className={styles.cardBody}>
                      <p className={styles.textBody}>
                        {el.description.length > 43
                          ? el.description.slice(0, 43)
                          : el.description}
                        {el.description.length > 43 && (
                          <Link href={`/pet/${el.type}/${el.id}`} passHref>
                            <a>...see the advert</a>
                          </Link>
                        )}
                        {/* {`${el.description.slice(0, 43)} ${
                          el.description.length > 43 ? <p>...read more</p> : ""
                        }`} */}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="row d-flex justify-content-between align-items-center px-5">
              <h3 className="text-warning font-weight-bold">Latest Adverts</h3>
              <a className="text-warning font-weight-bold" href="#">
                View all
              </a>
            </div>
            <div className={styles.listItems}>
              {articles.articles.map((el, i) => (
                <div className={styles.item} key={i}>
                  <img src={el.petImg} className={styles.cardImg} alt="pet" />
                  <div className={styles.cardBody}>
                    <p className={styles.textBody}>Read full article</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default List;
