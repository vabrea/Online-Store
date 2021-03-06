import "./product.css"
import SizeSelect from "./sizeselect"
import {useState} from 'react'

const Product = (props) => {
    const [size, setSize] = useState(1)


    const handleSizeChange = (val) => {
        console.log("The size has changed", val)
        setSize(val)
    }

    return(
        <div className="product">
            <img src={"/images/" + props.info.image}></img>
            <h4>{props.info.title}</h4>
            <p>Available only in Men's US sizes</p>
            <p>8.5 - 12.5</p>

            <label>${props.info.price.toFixed(2)}</label>

            <SizeSelect onChange={handleSizeChange}></SizeSelect>

            <button className="btn btn-primary"><i className="bi bi-cart3"></i>Add to Cart</button>

        </div>
    )
}

export default Product