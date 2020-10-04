import React, { useState } from 'react'
import Joke from '../Joke/Joke'
import { useDispatch, useSelector } from 'react-redux'
import { getJoke, startGetting } from '../../redux/actions'
import '../../index.css';


function Home() {

  const dispatch = useDispatch()
  const loading = useSelector(state => state?.loading)
  const [hidden, setHidden] = useState(false)

  return (<>
    <div className="container">
      {!hidden && < a
        id="jokeBtn"
        className="btn-floating btn-large waves-effect waves-light red"
        onClick={() => {
          setHidden(true)
          // dispatch(getJoke())
          dispatch(startGetting())
        }}
      >
        <i className="material-icons">
          add
				</i>
      </a>}
      {loading
        ? <div className="loader"></div>
        : <Joke />}
    </div >
  </>)
}

export default Home