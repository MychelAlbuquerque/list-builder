import React, { useState } from 'react';

function CreateList() {
  const [list, setList] = useState([]);
  const [listItem, setListItem] = useState();
  const handleAddItem = () => {
    setList([...list, listItem]);
    setListItem('');
  }

  return (
    <div>
      <input
        value={ listItem }
        placeholder="insira um item na lista"
        onChange={ (e) => setListItem(e.target.value) }
      />
      <button
        onClick={ handleAddItem }
      >
        Add Item
      </button>
      {
        list.length > 0 && (<p>{ list } </p>)
      }
    </div>
  )
}

export default CreateList;