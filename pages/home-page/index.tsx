import Link from 'next/link'
import styles from '../../styles/HomePage.module.css'
const alerts = [
    {
        title: "Important announcement regarding Corona",
        text: "We are receiving a significant number of questions with regards to the new rules on staying at home and away from others. Please read our guidelines with regards to the Corona virus.",
        color: "success",
        buttons: ["More information", "Dismiss"]
    },
    {
        title: "Licensing Notice",
        text: "From 1st October 2018, the Animal Welfare (Licensing of Activities Involving Animals) requirements in England changed. If you are a dog breeder or sell animals as pets and aren't currently licensed, you MUST contact your local licensing team to discuss. If you have an animal activities license, please update your account details to include the license details and email us a copy of your license.",
        color: "warning",
        buttons: ["More information", "Edit licence details","Dismiss"]
    },
    {
        title: "Personalise Your Profile",
        text: "We now display your profile name and photo next to all pet listings. Please make sure your Pets4Homes profile is updated, including photo/avatar, and a little information about yourself. Users with completed profiles and photos are more likely to get a higher response to their adverts.",
        color: "warning",
        buttons: ["Update your profile","Dismiss"]
    },
    {
        title: "Posting Advice",
        text: "Please Note that 30% of adverts posted do not make it past our approval process the first time. Please read our posting advice BEFORE placing an advert to make sure you advert goes live as quickly as possible.",
        color: "info",
        buttons: ["More information", "Dismiss"]
    },
    {
        title: "Email & Whatsapp Phishing Warning",
        text: "Please be aware of fake emails or whatsapp messages pretending to be from Pets4Homes support or fraud team asking for your login details (Email and Password), if you receive any, please report them to us as soon as possible. We will NEVER email you asking for your password. Please keep your password secure and NEVER give it out to anyone.",
        color: "danger",
        buttons: ["Dismiss"]
    }
]

const cards = [
    {
        title: "Post New Advert",
        icon: "fa-plus",
        text: "You can create multiple free adverts on the Pets'Homes website with unlimited photos."
    },
    {
        title: "Manage Adverts",
        icon: "fa-folder-open",
        text: "You currently have no adverts. Please create a new advert using the option above."
    },
    {
        title: "Edit Pest4Homes Profile",
        icon: "logo.jpg",
        text: "Update your Public Pets4Homes Profile Page Information, including Profile Page name / url, Profile Photo, About us and website adress."
    },
    {
        title: "Following User Activity",
        icon: "fa-users",
        text: "View listings by people you follown view and manage followersn search for people."
    },
    {
        title: "My Favourites",
        icon: "fa-heart",
        text: "View or manage your favourite Pets4Homes adverts."
    },
    {
        title: "Edit Personal Details",
        icon: "fa-user-plus",
        text: "Edit your personal details, including name, address, telephone, license details and preferences."
    },
    {
        title: "Edit Login Details",
        icon: "fa-lock",
        text: "Change your login details, including email and password."
    },
    {
        title: 'Upgrade to "Breeder / Frequent" Account',
        icon: "fa-arrow-up",
        text: 'Upgrade your account to a "Breeder / Frequent" account for free, if you need to place 3 or more adverts in a 12 month period.'
    },
    {
        title: 'Contact Support',
        icon: "fa-envelope",
        text: 'Contact Pets4Homes support via email.'
    },
]

const Alert = ({color, title, text, buttons}) => (
    <div className="row mt-3">
        <div className={`col alert alert-${color} border-${color}`}>
            <p>
                <b>{title}</b> - {text}
            </p>
            <div className="d-flex">
                {
                    buttons.map((btn, j) => (
                        <button className={`btn btn-${color} ${(j === 0 || j === 1) && "mr-2"}`} key={j}>{btn}</button>
                    ))
                }
            </div>
        </div>
    </div>
)

const Card = ({ title, icon, text, i }) => (
    <Link href='/' passHref>
        <div className={`col-sm-6 mb-3 ${styles.card}`}>
            <div className="card h-100 border rounded shadow-sm">
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{title}</h5>
                    <div className={`${styles.cardContent} card-body d-flex align-items-center`}>
                        {i === 2 ? <img src={icon} alt="logo p4h"/> : <i className={`fa ${icon} fa-4x text-warning p-2`}></i>}
                        <p className="ml-4 w-100">
                            {text}
                        </p>
                        <a className="stretched-link"></a>
                    </div>
                </div>
            </div>
        </div>
    </Link>
)

export default function HomePage() {
    return (
    <div className="container bg-white my-5 pb-3">
        <div className="row pt-3">
            <div className="col">
                <h2 className="text-warning font-weight-bold">
                    My Account Homepage
                </h2>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <hr className="w-100 px-0 border" />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <p>
                    Welcome <b>Client</b> to your account dashboard at Pets4Homes. From
                    this account page, you can create new pet adverts and manage your
                    existing pet adverts. If you have any problems please contact our
                    support desk using the Contact Support option.
                </p>
            </div>
        </div>
        {/* ALERTS */}
            {
                alerts.map((el, i) => <Alert {...el} key={i}/>)
            }
        {/* Menu */}
        <div className="row mt-3">
            {
                cards.map((el, i) => <Card key={i} {...el} i={i} />)
            }
        </div>
    </div>
    )
}
