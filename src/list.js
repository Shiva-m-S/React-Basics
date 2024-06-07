import React from 'react'

function ListItem(props){
    return (
        <li>{props.item}</li>
    )
}
function List(){
    const arr = [1,2,3,4,5,6,7,8,9,10];
    return(
        <ul>
            {arr.map((number)=><ListItem item={number} key={number.toString()}/>)}
        </ul>
    )
}
export default List;