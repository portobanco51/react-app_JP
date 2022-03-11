import React from 'react'

export const Item = ({ item }) => {
    return (<>
        <div>
            <li className='item'>
                <div className='item__list'>
                    <h3>Title: {item.title}</h3>
                    <p>Id: {item.id}</p>
                    {/* <img src={item.thumbnailUrl} alt={item.id}></img> */}
                    <hr></hr>
                </div>
            </li >
        </div ></>

    )
}
