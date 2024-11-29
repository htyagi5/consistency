import React from 'react';
import { useNavigate } from 'react-router-dom';

function Midbtn() {
  const navigate = useNavigate();

  return (
    <div className='flex place-content-center mt-80 text-white'>
      <button className='p-9' onClick={() => navigate('/lastbtn')}>
        git commit -m "Hello"
      </button>
    </div>
  );
}

export default Midbtn;
