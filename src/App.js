import './App.css'
import { useState } from 'react';
import { ColumnImages } from './components/ColumnImages';
import { useFetch } from './custom/useFetch';
import { ScrollSync } from 'react-scroll-sync';

function App() {

  // fetch the information
  const [data, setData] = useState([])

  useFetch(setData);

  return (
    <ScrollSync>
      <div className='main'>
        <ColumnImages
          data={data}
          parentClass='low'
          imgClass='tiny'
        />
        <ColumnImages
          data={data}
          parentClass='high'
          imgClass='big'
        />
      </div>
    </ScrollSync>
  );
}

export default App;
