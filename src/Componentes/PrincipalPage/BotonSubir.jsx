import React, { useState, useEffect } from 'react';
import './BotonSubir.css'; 

function BotonSubir(props) {
  const [showButton, setShowButton] = useState(false);
  const esIngles = props.isEnglish;

  useEffect(() => {
    // Escuchar el evento de scroll para mostrar u ocultar el botón
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`scroll-to-top ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
      {esIngles ? 'Home' : 'Subir' }
    </button>
  );
}

export default BotonSubir;
