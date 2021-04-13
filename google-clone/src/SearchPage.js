import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer'
import { Link } from 'react-router-dom'


import './SearchPage.css';


const results = [
  {
    queto : "The purpose of Innovation Management is not to promote innovation, but to manage innovation as a process.",
    author : "Pearl Zhu, Digitizing Boardroom: The Multifaceted Aspects of Digital Ready Boards"
  },
  {
    queto : "An innovation ecosystem is a systematic innovation methodological environment or a sort of innovation philosophy.",
    author : "Pearl Zhu, Unpuzzling Innovation: Mastering Innovation Management in a Structural Way"
  },
  {
    queto : "To strengthen the IT-business link, it takes more resource to doing innovation, not just IT innovation, but business innovation.",
    author : "Pearl Zhu, Digitizing Boardroom: The Multifaceted Aspects of Digital Ready Boards"
  },
  {
    queto : "Innovation is the heart of humanity.",
    author : "Lailah Gifty Akita, Pearls of  Wisdom: Great  mind"
  },
  {
    queto : "The paradox of innovation is that it is accepted as an innovation when it has become imitation.",
    author : "Piero Scaruffi"
  },

]

function SearchPage() {

  const [ {term}, dispatch ] = useStateValue();


	const [input,setInput] = useState('')
  const [input_button,setInput_button] = useState('')
	const history = useHistory();
  const [result,setResult] = useState('')

  const search = async (e) => {
    e.preventDefault();
    console.log("=======0.1=======")
    console.log(input)
    setInput_button(input);

  }

  useEffect(()=>{
    console.log("=======1.1=======")
          fetch('http://127.0.0.1:5000/query?search_input='+input_button)
            .then( resp => resp.json())
            .then((data)=> {
                console.log(data)
                setResult(data)
            })
  },[input_button])

  useEffect(()=>{
    console.log("=======1.0=======")
          fetch('http://127.0.0.1:5000/query?search_input='+term)
            .then( resp => resp.json())
            .then((data)=> {
                console.log(data)
                setResult(data)
            })
  },[])



  return (
    <div className="search__page">
      <div className="search__page__header__container">
        <Link to="/">
          <img 
            className="search__page__image"
            src="https://www.tailorbrands.com/wp-content/uploads/2020/02/logo-design-quotes-thumbnail.jpg"
          />
        </Link>
        <div className="search__page__input">
          <SearchIcon className="search__input__icon" />
          <input value = {input} onChange={e=>setInput(e.target.value)} />
          <MicIcon />
        </div>
        <div className="search__page__buttons">
          <Button type='submit' onClick={search} variant="outlined">Quote Search</Button>
        </div>

      </div>

      <div className="search__page__result">
      	 {result&&result.map( item => ( 
            <div className="search__page__result__text">
              <h3>{item.quote}</h3>
              <h5>{"-----"+"     "+item.author}</h5>
            </div>
         ))}
      </div>
    </div>
  );
}

export default SearchPage;
