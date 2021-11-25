import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    console.log(greeting);
    return (  
        <div className="itemListContainer">
            <h2 className="ItemListGreeting">{greeting}</h2>
        </div>
    );
}
 
export default ItemListContainer;