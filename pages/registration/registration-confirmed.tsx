import Link from 'next/link'


export default function Confirmed() {
    return (
        <div className="container bg-white my-3 pb-4">
            <div className="row pt-3">
                <div className="col">
                <h2 className="text-warning font-weight-bold">
                    Pets4Homes Account Activation
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
                Thank you, your Pets4Homes account has been successfully activated and
                you may now sign in to your account.
                </div>
            </div>
            <div className="row my-4">
                <div className="col">
                Please click on the following link to access your account - {' '}
                <Link href="/login" passHref><a>sign in</a></Link>. If you experience any problems logging in to
                your account, please contact us using the contact us link at the
                bottom of the page.
                <br />
                <br />
                <br />
                </div>
            </div>
            <div className="row my-4">
                <div className="col">
                The Pets4Homes Team <br />
                https://www.pets4homes.co.uk
                </div>
            </div>
            </div>
    )
}
