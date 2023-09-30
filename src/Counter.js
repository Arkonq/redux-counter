import React, { useState } from "react";
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function Counter(props) {
  // const [count, setCount] = useState(0);

  const increment = () => {
    props.dispatch(increment());
  };
  
  const decrement = () => {
    props.dispatch(decrement());
  };

  const reset = () => {
    props.dispatch(reset());
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{props.count}</span>
        <button onClick={increment}>+</button>
      </div>
        <button className="reset" onClick={reset}>RESET</button>
    </div>
  );
}

export default connect(mapStateToProps)(Counter);
