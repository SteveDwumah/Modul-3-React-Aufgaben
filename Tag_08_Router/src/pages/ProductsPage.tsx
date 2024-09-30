import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import table from "../assets/images/Tisch.png"
import chair from "../assets/images/Stuhl.png"
import bowls from "../assets/images/Schuesseln.png"



export default function ProductsPage(){
    return(
        <>
            <NavBar/>
            <section>
                <div>
                    <p>What we have</p>
                    <span></span>
                    <p>PRODUCTS</p>
                </div>
                <div className="productList">
                    <div className="prod1">
                        <p>Jenson</p>
                        <img src={table} alt="" />
                        <button>Shop now</button>
                    </div>
                    <div className="prod2">
                        <p>Deon</p>
                        <img src={chair} alt="" />
                        <button>Shop Now</button>
                    </div>
                    <div className="prod3">
                        <p>Krisha</p>
                        <img src={bowls} alt="" />
                        <button>Shop Now</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}