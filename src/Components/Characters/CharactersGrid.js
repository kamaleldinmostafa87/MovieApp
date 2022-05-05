import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner';

const CharactersGrid = ({ items, isLoading ,Delete}) => {
    return isLoading ? (  <Spinner />
    ) : (
      <section className='cards'>
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item} Delete={Delete}></CharacterItem>
        ))}
      </section>
    )
  }

export default CharactersGrid
