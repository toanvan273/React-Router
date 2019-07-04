import React from 'react';
import { NavLink ,Route} from "react-router-dom";
import Product from './Product'

class Products extends React.Component {
    render() {
        var products = [
            {
                id: 1,
                slug: 'iphone',
                name: 'Iphone X',
                price: 35000000
            },
            {
                id: 2,
                slug: 'samsung',
                name: 'Samsung Galaxy S7',
                price: 12000000
            },
            {
                id: 3,
                slug: 'oppo',
                name: 'Oppo F1s',
                price: 7000000
            },
        ]

        var { match, location } = this.props;
        var url = match.url;
        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item">
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>

            )
        })
        console.log(location);
        

        return (
            <div className="container">
                <h1> Đây là Products</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row"> 
                    <Route path="/products/:name" component={Product} />  
                </div>
            </div>
        )
    }
}
 //  // slug chính là params {**} 


export default Products;
