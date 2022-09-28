import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import data from './data/data.json'
import { convertPathJSON, processEdge, processNode, convertEdge, convertNode, prepareData } from './utils';
import SigmaExample from './SigmaExample';
import Plot from 'react-plotly.js' 

const App = () => {
  const [jsondata, setData] = useState(null)
  
  return (
  <div >
    {/* <CircularExample data={jsondata} width={3600} height={1800} /> */}
    <SigmaExample />
  </div>
)};

render(<App />, document.getElementById('root'));
