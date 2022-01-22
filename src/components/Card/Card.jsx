import React, { useState, useEffect, useRef } from 'react';
import './Card.css';

const incr = 1;

const styleH3 = { color: 'darkgreen' };

export const Card = ({ children }) => {
  const [count, setCount] = useState(20);

  // State for controlled input
  const [line, setLine] = useState('Initial text');

  // variable for link to uncontrolled input
  const inputRef = useRef(null);

  const { current: myInputForName } = inputRef;

  console.log('Re-render', myInputForName?.value);

  // {cuurent: null}
  // {cuurent: inputRef.current.value}

  //  This action will do when changed count state
  useEffect(() => {
    console.log('Changed count ', count);
  }, [count]);

  // Change count state
  function changeCount(flg) {
    setCount(flg ? count + incr : count - incr);
  }
  // Change line state
  function changeLine(e) {
    setLine(e.target.value);
  }

  const clearInput = (e) => {
    if (e.key === 'Escape') {
      // Clear input when press ESC
      setLine('');
    }
  };

  function printUncotrolledValue() {
    alert(
      'This is uncontrolled input value: ' + inputRef.current.value ??
        'empty field'
    );
  }

  return (
    <div className="card">
      <h2>
        DEMO {'  '}
        {children}
      </h2>
      <h3 style={{ color: 'darkblue' }}>{`Result: ${count}`}</h3>
      <hr />
      <div className="card-control">
        <button onClick={() => changeCount(true)}>Plus 1</button>
        <button onClick={() => changeCount(false)}>Minus 1</button>
      </div>
      <hr />
      <h3 style={styleH3}>Result: {line}</h3>
      <label>
        Управляемый input
        <input
          type="text"
          value={line}
          onChange={changeLine}
          onKeyDown={clearInput}
        />
      </label>
      <hr />
      <label>
        Неупарвляемый input
        <input ref={inputRef} placeholder="enter something" />
      </label>
      <button onClick={printUncotrolledValue} style={{ marginTop: '0.5rem' }}>
        Get uncontrolled input value
      </button>
    </div>
  );
};
