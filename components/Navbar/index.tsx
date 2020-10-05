import styles from '../../styles/Navbar.module.css'
import { Navbar, Nav, Button, Form, Dropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Navbarr = () => {
    const router = useRouter()

    return (
        <Navbar className={styles.navbar} expand="lg">
            <Link href="/" passHref>
                <Navbar.Brand>
                    <img src="/logo.jpg" alt="pets4homes" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/" passHref>
                        <Nav.Link className={styles.link}>Home</Nav.Link>
                    </Link>
                    <Link href="/adoption" passHref>
                        <Nav.Link className={styles.link}>Adoption</Nav.Link>
                    </Link>
                    <Link href="/sale" passHref>
                        <Nav.Link className={styles.link}>Sale</Nav.Link>
                    </Link>
                    <Link href="/stud" passHref>
                        <Nav.Link className={styles.link}>Stud</Nav.Link>
                    </Link>
                    <Link href="/pets-wanted" passHref>
                        <Nav.Link className={styles.link}>Pets Wanted</Nav.Link>
                    </Link>
                    <Link href="/advice" passHref>
                        <Nav.Link className={styles.link}>Pet Advice</Nav.Link>
                    </Link>
                    <Link href="/dog-breeds" passHref>
                        <Nav.Link className={styles.link}>Dog Breeds</Nav.Link>
                    </Link>
                    <Link href="/cat-breeds" passHref>
                        <Nav.Link className={styles.link}>Cat Breeds</Nav.Link>
                    </Link>
                    <Link href="/insurance" passHref>
                        <Nav.Link className={styles.link}>Pet Insurance</Nav.Link>
                    </Link>
                    <Link href="/contact" passHref>
                        <Nav.Link className={styles.link}>Contact Us</Nav.Link>
                    </Link>
                </Nav>


                <Form inline>
                {!router.pathname.includes('/home-page') ? (
                        <>
                            <Link href="/registration">
                                <Button className={styles.button} variant="outline-warning">Register</Button>
                            </Link>
                            <Link href="/login">
                                <Button className={styles.button} variant="outline-warning">Login</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="" passHref>
                                <button className={styles.accountBtn}>
                                    <i className="fa fa-wechat p-2 text-white"></i>  My messages
                                </button>
                            </Link>
                            <div className="dropdown button rounded">
                                <button
                                    className={`${styles.accountBtn} btn dropdown-toggle`}
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="fa fa-user p-2 text-white"></i>
                                    My account
                                </button>

                                <div
                                    className="dropdown-menu bg-warning text-white dropdown-menu-right"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-user p-2`}></i>
                                            Account Homepage
                                        </a>
                                    </Link>

                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-plus p-2`}></i>
                                            Post an Advert
                                        </a>
                                    </Link>

                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-folder-open p-2`}></i>
                                            Manage adverts
                                        </a>
                                    </Link>
                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-heart p-2`}></i>
                                            My Favourites
                                        </a>
                                    </Link>
                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-users p-2`}></i>
                                            Following Activity
                                        </a>
                                    </Link>
                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-lock p-2`}></i>
                                            Edit login
                                        </a>
                                    </Link>
                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-user-plus p-2`}></i>
                                            Edit Personal Details
                                        </a>
                                    </Link>
                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-file-text-o p-2`}></i>
                                            Edit Pets4Homes Profile
                                        </a>
                                    </Link>
                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-arrow-up p-2`}></i>
                                            Upgrade to Breeder
                                        </a>
                                    </Link>
                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-envelope p-2`}></i>
                                            Contact Support
                                        </a>
                                    </Link>
                                    <hr className="w-100 px-0 border border-white" />
                                    <Link href="" passHref>
                                        <a className={`${styles.dropItem} dropdown-item`}>
                                            <i className={`${styles.icons} fa fa-power-off p-2`}></i>
                                            Logout
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                }
                        </Form> 

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbarr
