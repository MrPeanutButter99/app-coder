import { useEffect, useState } from "react";
import Item from "../Item/Item";

import './itemlist.css';


const ItemList = () => {
    const [items, setItem] = useState([]);

    const productPromise = () => { 
        return (
            new Promise((resolve, reject) => {
            
                const products = [
                {
                    id: 1,
                    title: "Iphone 11 PRO",
                    description: "Original Apple 100%",
                    price: "$130.000,00",
                    pictureURL:"",
                    stock: 5
                },
                {
                    id: 2,
                    title: "Iphone 12 PRO",
                    description: "Original Apple 100%",
                    price: "$150.000,00",
                    pictureURL:"",
                    stock: 5
                },
                {
                    id: 3,
                    title: "Iphone 50 PRO",
                    description: "Original Apple 100%",
                    price: "$180.000,00",
                    pictureURL:"",
                    stock: 5
                }];
            
                setTimeout(() => resolve(products), 2000)
            })
        )
    };
    
    useEffect(() => {
        const list = productPromise();
        list.then( response => {
            console.log(response);
            setItem(response);
        })
    }, []);

    console.log(items);

    return (  
        <div className="items-list-container">
            <Item items={items}/>
        </div>
    );
}
 
export default ItemList;