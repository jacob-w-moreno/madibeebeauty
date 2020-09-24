import React, {useState} from 'react';
import Footer from './Footer';
import Service from './Service';
import Madi from './Madi.jpg';
import Alert from './Alert';

const Landing = () => {
  const [alert, setAlert] = useState(false);
  console.log('alert:', alert);

  const setAlertFN = (trueorfalse) => {
    setAlert(trueorfalse);
  }

  return(
  <div id='main'>
    { alert ?
      <Alert
        setAlertFN={setAlertFN}/>
      :null }
    <div className='intro'>
      <img className='headerpic' src={Madi} alt='Madi'/>
      <div className='intro__words'>
        <h1>HI, I'M MADI</h1>
        <p>A hair stylist who can do a lot of things. I can do very many important things that will all make you look better than you did when you came in here. Isn't that great?</p>
        <button className='intro__button' onClick={()=>setAlert(true)}>SCHEDULE AN APPOINTMENT</button>
      </div>
    </div>
    <body className='mainbody'>
      <h2>SERVICES</h2>
      <Service
        name='HIGHLIGHTS'
        price='$100+'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='BALAYAGE'
        price='$100+'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='COLOR'
        price='$85+'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='TONER REFRESH'
        price='$45'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='COLOR / DECOLORIZER REMIX'
        price='$10'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name="WOMEN'S TRIM / CUT"
        price='$25 - 35'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='DEEP CONDITIONER'
        price='$20'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='EXTENSIONS'
        price='REQUEST PRICE'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='SPRAY TAN'
        price='$20'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='TEETH WHITENING'
        price='$125'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='HIGHLIGHTS'
        price='$50'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='BROW WAX'
        price='$15'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='BROW TINT'
        price='$10'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='LASH TINT'
        price='$15'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='LIP WAX'
        price='$10'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='NOSE WAX'
        price='$10'
        setAlertFN={setAlertFN}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
    </body>
    <Footer/>
  </div>
  )
}
export default Landing;
