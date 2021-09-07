import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faSearch } from "@fortawesome/free-solid-svg-icons";
let Navbar = ()=>{
    let txt = [['Products', 'products'],  ['Cartel', 'cartel'], ['About us', 'aboutUs'], ['Login', 'login'], ['SignUp', 'signUp']] 
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light our-nav">
                <Link href='/'>
                    <a className="navbar-brand" id='brando'><FontAwesomeIcon style={{fontSize:"24px"}} className='fas clover' icon={faSeedling}/>Fruit Store</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                {
                        txt.map((e,i)=>{
                            return <Link href={`/${e[1]}`} key={i}>
                                <a className="nav-item nav-link links">
                                <div className="list">{e[0]}</div></a>
                                </Link>
                        })
                    }
                </div>
            </div>
            <div className="input-container">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <a href='https://www.google.com' id="search"><FontAwesomeIcon className="fa" icon={faSearch}/></a>
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
            </div>
            </nav>
        </div>
    )
}

export default Navbar;