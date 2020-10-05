import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from '../store'
import Navbarr from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }){
    return (
        <Provider store={store}>
            <div className="bg-light">
                <Navbarr />
                <Component {...pageProps} />
                <Footer />
            </div>
        </Provider>
    )
}