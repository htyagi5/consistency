import React from 'react';
import { useNavigate } from 'react-router-dom';

function Lastbtn({ setBlocks, blocks, clearData }) {
  const navigate = useNavigate();

  const handleAddBlock = () => {
    setBlocks([...blocks, { type: 'Blocks' }]);
    navigate('/progress');
  };

  const handleAddBlock1 = () => {
    setBlocks([...blocks, { type: 'Block1' }]);
    navigate('/progress');
  };

  return (
    <div className='flex place-content-center mt-80 text-white'>
      <button className='p-10 m-2' onClick={handleAddBlock}>
        git push origin main
      </button>
      <button className='p-10 m-2' onClick={handleAddBlock1}>
        Show Block1
      </button>
      <button className='p-10 m-2' onClick={clearData}>
        Clear Data
      </button>
    </div>
  );
}

export default Lastbtn;
