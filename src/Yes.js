
import heart from './assets/heart-xoxo.svg'

function Yes({ counter }) {


  return (
    <div className='flex flex-col'>
      <img src={heart} style={{ width: '250px' }} />
      <h1>yayyyyyy 😘</h1>
      {counter > 0 ? <p className='no-counter'>but you clicked no {counter} times :( </p> : <></>} <p></p>
    </div>
  );
}

export default Yes;
