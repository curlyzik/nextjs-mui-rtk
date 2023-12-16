'use client';

import React from 'react';
import RTK from './RTK';
import Todo from './Todo';

const Example = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-x-6">
        <RTK />
        <Todo />
      </div>
    </div>
  );
};

export default Example;
