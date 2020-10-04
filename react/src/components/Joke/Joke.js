import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../../index.css';
import { getJoke, startGetting } from '../../redux/actions';


function Joke() {

  const joke = useSelector(state => state?.joke)
  const dispatch = useDispatch()

  return (<>
    {joke && <div className="card">
      <div className="card-content">
        <p id="showJoke">{joke}</p>
      </div>
      <a
        id="next"
        className="btn-floating btn-large waves-effect waves-light red jokeBtn"
      >
        <i
          className="material-icons jokeBtn"
          onClick={() => {
            // dispatch(getJoke())
            dispatch(startGetting())
          }}
        >
          arrow_forward
          </i>
      </a>
      <div className="card"></div>
    </div>}
  </>)
}

export default Joke