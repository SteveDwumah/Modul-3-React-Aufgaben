import Cocooil from"./assets/img/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"
import Camera from "./assets/img/photo-1526170375885-4d8ecf77b99f.jpeg"
import Shampoo from "./assets/img/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpeg"

function App(){
  return(
    <div className="productDiv">
      <div>
        <img src={Cocooil} width={300}/>
        <p>Cocooil</p>
        <p>$30</p>
        <button>BUY NOW</button>
      </div>
      <div>
        <img src={Camera} width={300}/>
        <p>Camera</p>
        <p>$60</p>
        <button>BUY NOW</button>
      </div>
      <div>
        <img src={Shampoo} width={300}/>
        <p>Shampoo</p>
        <p>$20</p>
        <button>BUY NOW</button>
      </div>
    </div>
  )
}

export default App
