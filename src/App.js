import React from 'react';
import './App.css';
import Pera from './components/Pera';
import Imge from './components/Imge';
import Olist from './components/Olist';
import Unlist from './components/Unlist'; 
import Lecture2 from './components/Lecture2';

function app() {
  return (
<>

    <div className='bg-gray-600'>
      <Pera/>
      <Pera/>
      <Pera/>
      <Pera/>
      <Pera/>
      <Imge/>
      <Olist/>
      <Unlist/>
      <Lecture2/>
    </div>  
    
</>
 
  );
}

export default app;
