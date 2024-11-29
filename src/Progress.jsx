import React from 'react';
import Blocks from './Blocks';
import Block1 from './Block1';

function Progress({ blocks }) {
  function renderBlocks() {
    return blocks.map((block, index) => {
      if (block.type === 'Blocks') {
        return <Blocks key={index} />;
      } else if (block.type === 'Block1') {
        return <Block1 key={index} />;
      } else {
        return null;
      }
    });
  }

  return (
    <div className='flex-col place-content-center mx-96'>
      <h1 className='text-3xl font-mono font-extrabold'>This is the Progress page</h1>
      <div className='flex flex-wrap w-96 h-96 border mt-9 overflow-auto'>
        {renderBlocks()}
      </div>
    </div>
  );
}

export default Progress;
