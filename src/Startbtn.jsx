import React from 'react';
import { useNavigate } from 'react-router-dom';

function Startbtn() {
  const navigate = useNavigate();

  return (
    <div className='flex place-content-center mt-80 text-white'>
      <button className='p-9' onClick={() => navigate('/midbtn')}>
        git add .
      </button>
    </div>
  );
}

export default Startbtn;
