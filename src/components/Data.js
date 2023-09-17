import React from "react";
import "./styles/data.css"


function renderComponent(toShow){
    const toRender = toShow[0];
    const list = []
    if(toRender){
        if(toRender.length === 0){
            list.push(<div className="nothing">No Item found</div>)
        }
        else{
            toRender.forEach(element => {
                const imgUrl = element.thumbnail;
                list.push(
                    <div className="searched">
                        <div className="title searchedItem">{element.title}</div>
                        <img src = {imgUrl} className="image" alt={element.category}></img>
                        <div className="description searchedItem">Description: {element.description}</div>
                        <div className="price searchedItem">Price: {element.price}</div>
                        <div className="rating searchedItem">Rating: {element.rating}</div>
                        <div className="brand searchedItem">Brand: {element.brand}</div>
                        <div className="category searchedItem">Category : {element.category}</div>
                    </div>
                )
            });
        }
        return(
            <>
            <div className="container">
            {list}
            </div>
            </>
        )
    }
    else{    
    return (<>
    <div className="container">
        Enter Some keyword to begin search
    </div>
    </>)
    }
}
function Data2(props){
    return renderComponent(props.data);
}

export default Data2