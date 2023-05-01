import React, { useState } from 'react';
import Item from '../components/Item';

function CreateList() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState();

  const handleAddItem = () => {
    setList([...list, item]);
    setItem('');
  }

  return (
    <div>
      <input
        value={ item }
        placeholder="insira um item na lista"
        onChange={ (e) => setItem(e.target.value) }
      />
      <button
        onClick={ handleAddItem }
      >
        Add Item
      </button>
      <div className="items">
        {
          list.map((item) => (
            <Item item={ item }/>
          ))
        }
      </div>
    </div>
  )
}

export default CreateList;