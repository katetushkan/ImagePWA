import React, {useEffect, useState} from 'react';
import UploadAction from "./components/UploadAction/UploadAction";

import './App.css';
import {recognize} from "./services/RecognitionService/RecognitionService";
import Icon from "./components/Icon/Icon";
import Loader from "./components/Loader/Loader";
import Background from "./components/Background/Background";
import {toFixed} from "./services/NormalizationService/NormalizationService";

function App() {

  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(undefined);
  const [formatted, setFormatted] = useState(undefined)
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (!selectedFile) {
      return
    }
    setLoading(true)

    async function fetchData() {
      return await recognize(selectedFile)
        .then((response) => {
          setPrediction(response)
        })
        .catch((error) => {
          setErrors("Error happened")
        })
        .finally(() => {
          setLoading(false);
        })
    }

    fetchData();
  }, [selectedFile])

  useEffect(() => {
    if (!prediction) {
       return;
    }

    let formattedPrediction = {}
    
    for (let key in prediction) {
      formattedPrediction[key] = prediction[key].toPrecision(9)
    }

    setFormatted(formattedPrediction)
  }, [prediction])
  const handleFileSelected = async (file) => {
    setErrors(null)
    const data = new Uint8Array(await file.arrayBuffer())
    setSelectedFile(data);
  }

  return (
    <div className='app'>
      <Background/>
      <div className={'app__content'}>
        <h1 className={'app__content__title'}>To start recognition process, please, push the button down below</h1>
        {loading && <Loader className={'app__loader'}/>}
        {!loading &&
          <UploadAction
            onChange={handleFileSelected}
          >
            <Icon name={'start'} className={'app__upload-action__icon'}/>
          </UploadAction>}
        {
          !loading && formatted &&
          <div className={'app_predictions-container'}>
            <h2 className={'app__content__title--h2'}>Predictions: </h2>
            <ul className={'app_predictions-list'}>
              {Object.keys(formatted).map((key, index) => {
                return (
                  <li key={key} className={'app__predictions-item'}>
                    <p>{key}</p>
                    <p>{formatted[key]}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        }
        {
          errors && <p>{errors}</p>
        }
      </div>
    </div>
  );
}

export default App;
