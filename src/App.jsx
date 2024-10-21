import { useState, useEffect } from 'react';
import './App.css';
import MainTopContent from './assets/component/main-top-content';
import Component1 from './assets/component/component1';
import Component2 from './assets/component/component2';
import Component3 from './assets/component/component3';
import Component4 from './assets/component/component4';
import Component5 from './assets/component/component5';
import Component6 from './assets/component/component6';
import Component7 from './assets/component/component7';
import Component8 from './assets/component/component8';
import Component9 from './assets/component/component9';
import SlideBar from './assets/component/slide-bar';

function App() {
  const [showSlideBar, setShowSlideBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const mainTopContentHeight = document.querySelector('.main-top-content-wrapper').offsetHeight;
      setShowSlideBar(scrollY > mainTopContentHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <MainTopContent />
      {showSlideBar && (
        <div className="slidebar-container">
          <SlideBar />
        </div>
      )}
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
    </>
  );
}

export default App;
