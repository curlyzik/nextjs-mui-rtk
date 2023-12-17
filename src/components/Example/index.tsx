'use client';

import React from 'react';
import RTK from './RTK';
import Todo from './Todo';
import Features from './Features';
import { Divider } from '@mui/material';

const Example = () => {
  return (
    <div className="p-6">
      <div className="grid gap-y-7 md:grid-cols-3 gap-x-12">
        <RTK />
        <Divider className="md:hidden" />
        <Todo />
        <Divider className="md:hidden" />
        <Features />
      </div>
    </div>
  );
};

export default Example;
