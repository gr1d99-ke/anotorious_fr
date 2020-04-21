import React from 'react';
import { Dashboard } from "@uppy/react"
import Uppy from "@uppy/core";
import AwsS3 from "@uppy/aws-s3";
import ms from "ms";

const uppy = Uppy({
  meta: { type: 'avatar' },
  restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true
});

uppy.use(AwsS3, {
  limit: 2,
  timeout: ms('1 minute'),
  companionUrl: process.env.REACT_APP_COMPANION_URL
});

function App() {
  return (
    <div className="App">
      <header>Uppy Stuff</header>
      <Dashboard uppy={uppy}/>
    </div>
  );
}

export default App;
