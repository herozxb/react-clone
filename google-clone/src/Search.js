import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer'

import './Search.css';

function Search() {

  const [{}, dispatch] = useStateValue();

	const [input,setInput] = useState('')
	const history = useHistory();

	const search = e => {
		e.preventDefault();

    dispatch({
      type : actionType.SET_SEARCH_TERM,
      term:input
    })

		history.push('/search')
	}



  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__input__icon" />
        <input value = {input} onChange={e=>setInput(e.target.value)} />
        <MicIcon />
      </div>

      <div className="search__buttons">
      	<Button type='submit' onClick={search} variant="outlined">Quote Search</Button>
      </div>
    </div>
  );
}

export default Search;
