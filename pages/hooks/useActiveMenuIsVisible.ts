import { useScroll } from './useScroll';

export const useActiveMenuIsVisible = () => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav .container ul li a');
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
    navLi.forEach((li) => {
      console.log(current);
      li.classList.remove('border-b-2');
      if (li.classList.contains(current)) {
        li.classList.add('border-b-2');
      }
    });
  };

  useScroll({ onScroll: handleScroll });
};
