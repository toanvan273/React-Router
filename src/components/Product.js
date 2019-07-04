import React from 'react';

class Product extends React.Component {
    render(){
        let { match } = this.props
        console.log('match',match)
        let name = match.params.name
        return (
            <h1>
               Chi tiết sản phẩm: {name}
            </h1>
        )
    }
}

export default Product;
