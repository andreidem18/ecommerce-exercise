import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {


    return(
        <Link 
            to={`/shop/${product.id}/`} 
            className='product animate' 
            key={product.id} 
        >
            <div className="product-image">
                <img src={product.images[0].url} alt="" />
                <img src={product.images[1]?.url} alt="" className='overlay' />
            </div>
            <h5>{product.name}</h5>
            <span className="price">${product.price}</span>
        </Link>
    )
}

export default ProductItem;
