import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLogged, decrement } from '../actions'

function Header() {
  const dispatch = useDispatch()
  const isLoged = useSelector(state => state.isLogged)
  return (
    <div>
        <h4>
          <button onClick={() => dispatch(isLogged())}>
            {isLoged ? "Log OUT" : "LOGIN"}
          </button>
        </h4>
        <h2>
          <button onClick={() => dispatch(decrement())}>MINUS</button>
        </h2>
    </div>
  )
}

export default Header