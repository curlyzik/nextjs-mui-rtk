import { Button } from '@mui/material';
import React from 'react';

const ShowWelcomeMessage = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4">
        <div>
          <div className="font-semibold text-4xl pb-4">RTK Query
          </div>
          <div>
            <Button variant="contained">Fetch Data</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowWelcomeMessage;
