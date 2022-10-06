import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import data from './data/data.json'
import { convertPathJSON, processEdge, processNode, convertEdge, convertNode, prepareData } from './utils';
import Plot from 'react-plotly.js'
import CircularExample from './CircularExample' 

const App = () => {
  const [jsondata, setData] = useState(null)
  useEffect(()=>{
    convertPathJSON(data,setData)
  },[])
  return (
  <div>
    <CircularExample data={jsondata} width={1200} height={500} />

  </div>
)};

render(<App />, document.getElementById('root'));
