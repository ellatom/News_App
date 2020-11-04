
import React, { useState } from 'react';

function Searchbar(props) {

  const [keyword, setkeyword] = useState('');
  const{searchWord}=props;

  const editSearchTerm = (event) => {
    event.preventDefault();
    
    let search = event.target.value;
    searchWord(search);//like this.props.searchWord
    setkeyword(search);
  };

    return (
        <>
        <div className="gap">
          <input 
            className="prompt" 
            placeholder="Search..." 
            type="text"
            value={keyword}
            onChange={editSearchTerm}
          />
        </div>
        </>
    );
  }

export default Searchbar;
