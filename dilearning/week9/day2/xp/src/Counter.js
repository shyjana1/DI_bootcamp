import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './redux/action'
const Counter = ({ count, onDecrement, onIncrement }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
)
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment())
    },
    onDecrement: () => {
      dispatch(decrement())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)