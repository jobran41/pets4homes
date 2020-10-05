import styles from '../../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return (
        <>
            <div className="container-fluid bg-warning mt-3">
                <div className="row w-100 justify-content-center">
                    <ul className={styles.miniFooter}>
                        <li className="nav-item col-sm-12 col-md-2 text-center">
                            <Link href="" passHref>
                                <a href="#" className="nav-link text-white font-weight-bold">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item col-sm-12 col-md-2 text-center">
                            <Link href="" passHref>
                                <a href="#" className="nav-link text-white font-weight-bold">
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item col-sm-12 col-md-2 text-center">
                            <Link href="" passHref>
                                <a href="#" className="nav-link text-white font-weight-bold">
                                    Advertising
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item col-sm-12 col-md-2 text-center">
                            <Link href="" passHref>
                                <a href="#" className="nav-link text-white font-weight-bold">
                                    Write For Us
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item col-sm-12 col-md-2 text-center">
                            <Link href="" passHref>
                                <a href="#" className="nav-link text-white font-weight-bold">
                                    Link to Us
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item col-sm-12 col-md-2 text-center">
                            <Link href="" passHref>
                                <a href="#" className="nav-link text-white font-weight-bold">
                                    Banners
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid bg-dark pt-3">
                <div className="row">
                    <div className="card px-2 py-2 mx-auto bg-dark border-0">
                    <a href="#" className="font-weight-bold text-white">Social Media</a>
                    <ul className="list-unstyled mt-3">
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Like us on Facebook</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Follow us on Twitter</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Follow us on Google Plus</a>
                            </Link>
                        </li>
                    </ul>
                    <img src="/logo.jpg" alt="site logo" />
                    </div>
                    <div className="card px-2 py-2 mx-auto bg-dark border-0">
                    <a href="#" className="font-weight-bold text-white"
                        >Dogs & Puppies for Sale</a
                    >
                    <ul className="list-unstyled mt-3">
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">French Bulldogs for sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Chihuahuas for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Pugs for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Cocker Spaniels for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Labradors for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Bulldogs for Sale</a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="card px-2 py-2 mx-auto bg-dark border-0">
                    <a href="#" className="font-weight-bold text-white"
                        >Cats & Kittens for Sale</a
                    >
                    <ul className="list-unstyled mt-3">
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Bengals for sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">British Shorthairs for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Oriental Cates for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Persian Cats for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Ragdoll Cats for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Siamese Cats for Sale</a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="card px-2 py-2 mx-auto bg-dark border-0">
                    <a href="#" className="font-weight-bold text-white"
                        >Other Pets for Sale</a
                    >
                    <ul className="list-unstyled mt-3">
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Birds for sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Fish for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Horses for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Poultry for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Rabbits for Sale</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Rodents for Sale</a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="card px-2 py-2 mx-auto bg-dark border-0">
                    <a href="#" className="font-weight-bold text-white">Other Pages</a>
                    <ul className="list-unstyled mt-3">
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Cat Breeds</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Dog Breeds</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Pet Adoption</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Dog Adoption</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Cat Adoption</a>
                            </Link>
                        </li>
                            <li>
                            <Link href="" passHref>
                                <a className="text-secondary">Sell Pets for Free</a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="container-fluid adjust-text bg-dark py-4">
                    <div className="row justify-content-center">
                        <div className={styles.copyright}>
                            © Copyright - Zone4Code 2020 <br />
                            Pets4Homes.co.uk use cookies on this site to enhance your user
                            experience. Use of this website and other services constitutes
                            acceptance of the Pets4Homes
                            <a href="#">Terms of Use</a> and
                            <a href="#">Privacy and Cookie Policy </a>. You can
                            <a href="#">manage your cookies</a> at any time.
                        </div>
                    </div>
                </div>
        </>
    )
}
