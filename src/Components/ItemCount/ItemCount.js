import react, {useState, useEffect} from "react"; 

import './itemcount.css';
import product from "../../assets/img/iphone.jpg";

const ItemCount = ({stock, initial}) => {
    const onAdd = (counter) => {
        console.log(counter)
    }

    const add = (counter) => {
        if(counter == stock){
            return 0;
        }
        
        setCounter(counter + 1)
    }

    const subTrack = (counter) => {
        if(counter <= initial){
            return 0;
        }

        setCounter(counter - 1)
    }

    const [counter, setCounter] = useState(initial);
    
    useEffect((initial, counter) => {
         console.log('El componente se monta')
        return () => {
          console.log('El componente se desmonta')
        }
    }, [counter])

    return (
            <div className="item-container">
                <img src={product} className="item-img"/>
                <div className="item-quantity">
                    <button className="counter-btn" onClick={()=> subTrack(counter)}>-</button>
                    <span><h4>{counter}</h4></span>
                    <button className="counter-btn" onClick={()=> add(counter)}>+</button>
                </div>
                <div className="addCart">Agregar</div>
            </div>
    );
}
 
export default ItemCount;