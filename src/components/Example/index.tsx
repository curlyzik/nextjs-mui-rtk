'use client';

import React from 'react';
import RTK from './RTK';
import Todo from './Todo';
import Features from './Features';

const Example = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-x-12">
        <RTK />
        <Todo />
        <Features />
      </div>
    </div>
  );
};

export default Example;
