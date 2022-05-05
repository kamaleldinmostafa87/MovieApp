import React from 'react'

export default function CharacterItem({item,Delete}) {
    return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' /> 
        </div>
        
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <button id={item.char_id} onClick={Delete(item.char_id)}>Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}
