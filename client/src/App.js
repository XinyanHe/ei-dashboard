import './App.css';
import React, { useEffect, useState } from 'react'
import BasicTabs from './components/NavTabs';

function App() {

  const [pipesId, setPipesId] = useState([])
  const [pipesData, setPipesData] = useState()
  const [serviceData, setServiceData] = useState()
  const [serviceKey, setServiceKey] = useState([])
  const [configData, setConfigData] = useState()

  const [pipesId2, setPipesId2] = useState([])
  const [pipesData2, setPipesData2] = useState()
  const [serviceData2, setServiceData2] = useState()
  const [serviceKey2, setServiceKey2] = useState([])
  const [configData2, setConfigData2] = useState()

  useEffect(() => {

    fetch("/pipes").then(
      response => response.json()
    ).then(
      data => {
        setPipesId(Object.keys(data.pipes));
        setPipesData(Object.values(data.pipes));
        setServiceKey(Object.keys(data.services));
        setServiceData(Object.values(data.services));
        setConfigData(data.config);
      }
    )

    fetch("/pipes_2").then(
      response => response.json()
    ).then(
      data => {
        setPipesId2(Object.keys(data.pipes));
        setPipesData2(Object.values(data.pipes));
        setServiceKey2(Object.keys(data.services));
        setServiceData2(Object.values(data.services));
        setConfigData2(data.config);
      }
    )
  }, [])

  return (
    <div className="App">
      <BasicTabs
        pipesId={pipesId}
        pipesData={pipesData}
        serviceKey={serviceKey}
        serviceData={serviceData}
        pipesId2={pipesId2}
        pipesData2={pipesData2}
        serviceKey2={serviceKey2}
        serviceData2={serviceData2}
        configData={configData}
        configData2={configData2}
      />
    </div>
  );
}

export default App;

