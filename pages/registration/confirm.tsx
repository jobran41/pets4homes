import Link from 'next/link'

export default function Confirm(){
    return (
        <div className="container bg-white mt-5 pb-4">
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
            <div className="row my-4">
                <div className="col">
                    <p>
                        Thank you for registering on the Pets4Homes website.
                        <b>
                            {' '}You have now been sent an activation email to your email account,
                            which you should receive in the next few minutes. You will need to
                            open this email and click on the activation link before you can
                            login to your Pets4Homes account and place any adverts.
                        </b>
                    </p>
                </div>
            </div>
            <div className="row my-4">
                <div className="col">
                    <p>
                        If you do not receive your activation email shortly, please check your
                        emails 'Spam' and/or 'Trash' folders to make sure your email system
                        hasnt marked our email as spam.
                    </p>
                </div>
            </div>
            <div className="row my-4">
                <div className="col">
                    <p>
                        Our emails will be sent from the email address
                        support@pets4homes.co.uk , please add this email address to your
                        address book/safe senders list in your email system, this will make
                        sure you receive all emails from us, including any responses to your
                        adverts.
                    </p>
                </div>
            </div>
            <div className="row my-4">
                <div className="col">
                    <p>
                        Once you have activated your account, you should be able to login at
                        Pets4Homes immediately where you can create and manage your pet
                        adverts from your account page.
                    </p>
                </div>
            </div>
            <div className="row my-4">
                <div className="col">
                    <p>
                        Whilst you are waiting for your activation email to arrive, please
                        feel free to continue browsing the website by
                        <Link href="/" passHref>
                            <a>Clicking Here</a>
                        </Link>.
                    </p>
                </div>
            </div>
            <div className="row my-4">
                <div className="col">
                    <p>
                        If you need to contact us for anything, please use the
                        <Link href="/contact" passHref>
                            <a>Contact Us</a>
                        </Link>
                        form.
                    </p>
                </div>
            </div>
            <div className="row my-4">
                <div className="col">
                    <p>
                        We hope you enjoy using the Pets4Homes website.
                    </p>
                </div>
            </div>
        </div>
    )
}
