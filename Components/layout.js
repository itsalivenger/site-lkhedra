import Navbar from "./navbar.js";
import Footer from "./footer.js";
export default function Layout({children}) {
    return (
        <div id="app-container">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
