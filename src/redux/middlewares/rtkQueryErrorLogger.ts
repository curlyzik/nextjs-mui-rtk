import displayErrorMessage from '@/utils/displayErrorMessage';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

/**
 * Log a warning and show a toast!
 */

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const errors = action.payload.data?.errors;

      if (errors) {
        Object.values(errors).map((error: any) => {
          return error.map((err: string) => displayErrorMessage(err));
        });
      } else if (action.payload.data.error) {
        displayErrorMessage(`${action.payload.data.error.message}`);
      } else {
        displayErrorMessage(`Something went wrong`);
      }
    }

    return next(action);
  };
