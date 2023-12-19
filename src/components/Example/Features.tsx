import React from 'react';

const features = [
  {
    name: 'Typescript',
    doc: 'https://www.typescriptlang.org/',
    usage: '',
  },
  {
    name: 'Nextjs',
    doc: 'https://nextjs.org/docs/getting-started/installation',
    usage: '',
  },
  {
    name: 'Redux Toolkit',
    doc: 'https://redux-toolkit.js.org/introduction/getting-started',
    usage:
      'https://github.com/curlyzik/nextjs-mui-rtk/blob/main/src/redux/store.ts',
  },
  {
    name: 'Redux Logger',
    doc: 'https://www.npmjs.com/package/redux-logger',
    usage:
      'https://github.com/curlyzik/nextjs-mui-rtk/blob/main/src/redux/middlewares/customLogger.ts',
  },
  {
    name: 'Redux Persist',
    doc: 'https://www.npmjs.com/package/redux-persist',
    usage:
      'https://github.com/curlyzik/nextjs-mui-rtk/blob/main/src/redux/cutomStorage.ts',
  },
  {
    name: 'RTK Query Global Error Logger',
    doc: 'https://redux-toolkit.js.org/rtk-query/usage/error-handling#handling-errors-at-a-macro-level',
    usage:
      'https://github.com/curlyzik/nextjs-mui-rtk/blob/main/src/redux/middlewares/rtkQueryErrorLogger.ts',
  },
  {
    name: 'React Toastify',
    doc: 'https://www.npmjs.com/package/react-toastify',
    usage:
      'https://github.com/curlyzik/nextjs-mui-rtk/blob/main/src/utils/displaySuccessMessage.tsx',
  },
  {
    name: 'Page loader with "nextjs-toploader"',
    doc: 'https://www.npmjs.com/package/nextjs-toploader',
    usage:
      'https://github.com/curlyzik/nextjs-mui-rtk/blob/main/src/app/layout.tsx',
  },
  {
    name: 'Mui Config',
    doc: 'https://mui.com/material-ui/getting-started/installation',
    usage:
      'https://github.com/curlyzik/nextjs-mui-rtk/blob/main/src/_lib/MuiTheme.tsx',
  },
];
const Features = () => {
  return (
    <div>
      <div className="font-semibold text-4xl pb-4">
        <a
          href="https://github.com/curlyzik/nextjs-mui-rtk"
          target="_blank"
          className="underline"
        >
          Features ⚙️
        </a>
      </div>

      <div className="flex flex-col gap-y-5">
        {features.map((feature) => (
          <div key={feature.name}>
            ✔️{' '}
            <a href={feature.doc} className="font-semibold" target="_blank">
              {feature.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
