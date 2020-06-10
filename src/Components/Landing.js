import React from 'react';
import Footer from './Footer';
import Service from './Service';

const Landing = () => {
  return(
  <div id='main'>
      <img className='headerpic' src='https://drive.google.com/uc?id=19ShXf9KqyOfYHhdgmOWmiJCKXGJT642Y' alt='Madi' width='100%'/>
      <body id='mainbody'>
      <p>
      <span>HI, I'M MADI. </span>Curabitur quis elit nec tortor congue scelerisque. Nam tincidunt metus diam, quis tincidunt mauris egestas et. Nullam eget libero nec ante eleifend tristique. Nam rhoncus finibus sapien sit amet commodo. Sed ac tortor sapien. Nam eu ex fermentum, lobortis dolor ut, condimentum felis. Ut mollis orci turpis, et iaculis dui posuere a.
      </p>
      <div id='line'/>
      <Service
        name='HIGHLIGHTS'
        price='$100+'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='BALAYAGE'
        price='$100+'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='COLOR'
        price='$85+'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='TONER REFRESH'
        price='$45'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='COLOR / DECOLORIZER REMIX'
        price='$10'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name="WOMEN'S TRIM / CUT"
        price='$25 - 35'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='DEEP CONDITIONER'
        price='$20'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='EXTENSIONS'
        price='REQUEST PRICE'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='SPRAY TAN'
        price='$20'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='TEETH WHITENING'
        price='$125'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='HIGHLIGHTS'
        price='$50'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='BROW WAX'
        price='$15'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='BROW TINT'
        price='$10'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='LASH TINT'
        price='$15'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='LIP WAX'
        price='$10'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      <Service
        name='NOSE WAX'
        price='$10'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mattis nulla, quis suscipit urna iaculis sit amet.'/>
      </body>
    <Footer/>
  </div>
  )
}
export default Landing;