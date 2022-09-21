import { useEffect } from 'react';

export const useScroll = ({ onScroll }) => {
  useEffect(() => {
    const handleScroll = (event) => {
      console.log('window.scrollY', window.scrollY);
      onScroll();
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
