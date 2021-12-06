import './item.css';
import iphoneimg from '../../../assets/img/iphone12.jpg';

const Item = ({items}) => {
    return (  
        <> 
            {items.map((item) => {
                return(
                <div className="item-container" key={item.id}>
                <h3 className="item-title">{item.title}</h3>
                <img src={iphoneimg} className="item-img"/>
                <div className="item-description-container">
                    <p className="item-description">
                        {item.description}
                    </p>
                    <h4>{item.price}</h4>
                    <span className="item-info"><a href="">Más información</a></span>
                </div>
                <div className="item-stock">Cantidad máxima: {item.stock}</div>
            </div>
            )})}    
        </>
    );
}
 
export default Item;