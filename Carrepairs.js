import React from "react"
import Picture from "./Picture"
function Carrepairs() {
    return (
        <div className="repair"> 
            <h1>We Repair All Kinds Of Cars</h1>
            <div className="div" />
            <select value="name" name="name" className="select">
                <option value="">Please make a choice...</option>
                <option value="acura">Acura</option>
                <option value="audi">Audi</option>
                <option value="aston-martin">Aston Martin</option>
                <option value="bentley">Bentley</option>
                <option value="bmw">BMW</option>
                <option value="bugatti">Bugatti</option>
                <option value="buick">Buick</option>
                <option value="cadillac">Cadillac</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="chrysler">Chrysler</option>
                <option value="ferrari">Ferrari</option>
                <option value="fiat">Fiat</option>
                <option value="ford">Ford</option>
                <option value="gmc">GMC</option>
                <option value="honda">Honda</option>
                <option value="hyundai">Hyundai</option>
                <option value="infinity">Infinity</option>
                <option value="isuzu">Isuzu</option>
                <option value="jaguar">Jaguar</option>
                <option value="jeep">Jeep</option>
                <option value="kia">KIA</option>
                <option value="land-rover">Land Rover</option>
                <option value="lexus">Lexus</option>
                <option value="mazda">Mazda</option>
                <option value="mercedes-benz">Mercedes Benz</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="nissan">Nissan</option>
            </select>
            <div />
            <Picture />
        </div>
    )
}

export default Carrepairs