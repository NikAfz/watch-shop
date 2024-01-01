import React from "react"
import rolex from "../assets/rolex-png.png"
import citizen from "../assets/Citizen_logo_PNG1.png"
import Jacob from "../assets/Jacob & Co Logo Vector.png"
import Patek from "../assets/Patek_Philippe_logo_PNG10.png"
import tudor from "../assets/Tudor_logo_PNG1.png"

function Brands() {
  return(
    <div className="Brands">
      <div className="brands--container">
        <h2 className="brands--header">brands we suport</h2>
        <div className="brands--img-list">
          <a href="https://www.rolex.com/" target="_blank" ><img className="rolex" src={rolex} alt="" /></a>
          <a href="https://www.citizenwatch.com/" target="_blank" ><img className="citizen" src={citizen} alt="" /></a>
          <a href="https://jacobandco.com/" target="_blank" ><img className="Jacob" src={Jacob} alt="" /></a>
          <a href="https://www.patek.com/" target="_blank" ><img className="Patek" src={Patek} alt="" /></a>
          <a href="https://www.tudorwatch.com/" target="_blank" ><img className="tudor" src={tudor} alt="" /></a>
        </div>
      </div>
    </div>
  )
}
export default Brands;