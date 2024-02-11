
import ReactDOM from 'react-dom/client';
import Yes from './Yes';
import { useState } from 'react';
import heart from './assets/heart-uraqt.svg'

function Question({ name = '' }) {

  const [counter, setCounter] = useState(0);

  const ohNo = [
    "no",
    "aw c'mon",
    "pretty pls",
    "snookums pls",
    "I made reservations",
    "y tho",
    "last chance",
    "no rly, last chance",
    "😭",
    "💔"
  ]

  return (
    <div id="content">
      <img src={heart} style={{ width: '250px' }} alt={'ur a qt'} />
      <p>{name === '' ? 'W' : `${name}, w`}ill you be my valentine?</p>
      <div className='flex'>


        <button
          onClick={() => {
            const root = ReactDOM.createRoot(document.getElementById('content'));
            root.render(<Yes counter={counter} />);
          }}
          className='btn btn-yes'
          style={{
            padding: `${(4 * counter) + 15}px ${(8 * counter) + 30}px`,
            'font-size': `${4 * counter + 20}px`,
          }}
        >yes</button>
        <button className='btn btn-no'
          onClick={() => {
            setCounter(counter + 1)


          }} >{ohNo[Math.min(counter, ohNo.length - 1)]}</button>
      </div>
    </div>
  );
}

export default Question;
