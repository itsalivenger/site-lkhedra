import CategoryDiv from '../Components/Products Components/categoryDiv/categoryDiv.js';
import ProductsList from '../Components/Products Components/productsList/productsList.js';
import Carrousel from '../Components/Home Components/carousel/ImagesCarrousel.js';
let numberOfProducts = 81;
let products = (props)=>{
    return (
        <div className='products'>
            <div>
                <Carrousel />
            </div>
            <div className='pageContainer container container-fluid'>
                <div className='category'>
                    il y'a {numberOfProducts} produits:
                    <CategoryDiv />
                </div>
                <ProductsList />
            </div>
        </div>
    );
}

export default products;