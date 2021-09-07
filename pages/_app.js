import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import aboutUs from '../styles/aboutUs.css';
import appcss from '../styles/app.css';
import carrousel from '../styles/carrousel.css';
import cartel from '../styles/cartel.css';
import categoryDiv from '../styles/categoryDiv.css';
import footer from '../styles/footer.css';
import home from '../styles/home.css';
import item from '../styles/item.css';
import login from '../styles/login.css';
import manageItems from '../styles/manageItems.css';
import mostSold from '../styles/mostSold.css';
import navbar from '../styles/navbar.css';
import product from '../styles/product.css';
import products from '../styles/products.css';
import productsList from '../styles/productsList.css';
import profile from '../styles/profile.css';
import profileInfo from '../styles/profileInfo.css';
import security from '../styles/security.css';
import signUp from '../styles/signUp.css';
import smallAbout from '../styles/smallAbout.css';
import tableHead from '../styles/tableHead.css';
import total from '../styles/total.css';
import updateItemBox from '../styles/updateItemBox.css';
import Layout from '../Components/layout';
import HeadTag from '../Components/head.js';
function MyApp({ Component, pageProps }) {
    return(
        <Layout>
            <HeadTag />
            <Component {...pageProps} />
        </Layout>
    ) 

  }
export default MyApp;