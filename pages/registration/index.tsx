import Link from 'next/link'
import styles from '../../styles/Login.module.css'

export default function(){
    return (
        <div className="container bg-white mt-5">
            <div className="row pt-3">
                <div className="col">
                <h2 className="text-warning font-weight-bold">
                    Create a Pets4Homes Account
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
                Please complete the fields below to create your free account. Already
                have an account? <Link href="/login" passHref><a>Click here</a></Link> to sign in.
                </div>
            </div>
            <div className="row mt-5 pb-4">
                <div className="col-12 col-md-6 h-100">
                <form
                    className="px-4 py-2 bg-white border rounded"
                >
                    <div className="form-group">
                    <label
                        htmlFor="accountType"
                        className={styles.label}>
                        Account Type*
                    </label>

                    <select
                        name="account type"
                        id="accountType"
                        className="form-control required"
                    >
                        <option value="">Select Account Type</option>
                        <option value="birds">Standard Account</option>
                        <option value="cats">Breeder / Frequent Account</option>
                        <option value="dogs">Rescue Center Account</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="firstName" className={styles.label}
                        >First Name*</label
                    >
                    <input type="text" id="firstName" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="lastName" className={styles.label}
                        >Last Name*</label
                    >
                    <input type="text" id="lastName" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label
                        htmlFor="phoneNumber"
                        className={styles.label}
                        >Phone Number*</label
                    >
                    <input type="tel" id="phoneNumber" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label
                        htmlFor="mailAdress"
                        className={styles.label}
                        >Email Adress*</label
                    >
                    <input type="email" id="mailAdress" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password" className={styles.label}
                        >Password*</label
                    >
                    <input type="password" id="password" className="form-control" />
                    </div>
                    <div className="form-check ml-3">
                    <label htmlFor="newsLetter" className="form-check-label">
                        <input
                        type="checkbox"
                        id="newsLetter"
                        className="form-check-input"
                        value=""
                        />Receive Pets4Homes Newsletters via Email
                    </label>
                    </div>
                    <div className="form-check ml-3">
                    <label htmlFor="terms" className="form-check-label">
                        <input
                        type="checkbox"
                        id="terms"
                        className="form-check-input"
                        value=""
                        />I agree to the Pets4Homes <a href="#">Terms of Use</a> and
                        <a href="#">Privacy and Cookie Policy</a>
                    </label>
                    </div>
                    <button
                    type="button"
                    className="btn btn-info btn-lg btn-block bg-warning border-0 my-3"
                    >
                    Register
                    </button>
                </form>
                </div>
                <div className="col-12 col-md-6 h-100">
                <div
                    className="bg-light font-weight-bold border-bottom-0 border-top border left- border-right p-2"
                >
                    Pets4Homes Account Benefits
                </div>

                <ul className="list-group border">
                    <li className="list-group-item border-0 d-flex">
                    <i className="fa fa-user fa-2x mr-4 text-warning"></i>
                    <span
                        >Creating a Pets4Homes account is easy and free, its gives you
                        access to extra features not available to visitors.</span
                    >
                    </li>
                    <li className="list-group-item border-0 d-flex">
                    <i className="fa fa-heart fa-2x mr-3 text-warning"></i>
                    <span>Keep track of your favourite adverts by saving them</span>
                    </li>
                    <li className="list-group-item border-0 d-flex">
                    <i className="fa fa fa-pencil fa-2x mr-3 text-warning"></i>
                    <span
                        >Creating and replying to ads is quick with pre-filled contact
                        details.</span
                    >
                    </li>
                    <li className="list-group-item border-0 d-flex">
                    <i className="fa fa-plus fa-2x mr-4 text-warning"></i>
                    <span
                        >You need to create an account before you can post adverts for
                        sale, adoption, wanted or stud.
                    </span>
                    </li>
                    <li className="list-group-item border-0 d-flex">
                    <i className="fa fa-camera fa-2x mr-3 text-warning"></i>
                    <span>Upload unlimited photos to each advert. </span>
                    </li>
                    <li className="list-group-item border-0 d-flex">
                    <i className="fa fa-newspaper-o fa-2x mr-3 text-warning"></i>
                    <span>Option to signup to receive Pets4Homes newsletters. </span>
                    </li>
                </ul>
                <div className="small mt-4 p-3 alert alert-warning rounded shadow-sm">
                    <strong>Account Types </strong>
                    <br />
                    <br />

                    <span
                    >Please make sure you sign up using the correct account type.
                    </span>
                    <br />
                    <br />
                    <strong>Standard Account</strong> - This is the default account type
                    and should be used by people who want access to the extra features
                    on Pets4Homes including the ability to advertise less than 3
                    different pets in a 12 month period.
                    <br />
                    <br />
                    <strong>Breeder Account</strong> - This account type should be used
                    by hobby breeders or frequent advertisers who will be advertising 3
                    or more different pets in a 12 month period. You will be able to
                    upload a logo and breeder profile on your account.
                    <br />
                    <br />
                    <strong>Rescue Centre Account</strong> - This account type should be
                    used by UK only Rescue Centres. You will be able to upload a logo
                    and your rescue centre information on your account.
                </div>
                </div>
            </div>
            </div>
    )
}
