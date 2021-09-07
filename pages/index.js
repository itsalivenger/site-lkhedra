import react from "react";
import About from "../Components/About Components/About/smallAbout.js";
import ImagesCarrousel from "../Components/Home Components/carousel/ImagesCarrousel.js";
import MostSoldDiv from '../Components/Home Components/mostSold/mostSold.js';
class Home extends react.Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div>
                <div id='container'>
                    <ImagesCarrousel />
                    <MostSoldDiv />
                    <About />
                </div>
            </div>
        )
    }
}
export default Home;