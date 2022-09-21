import React from 'react';
import { useActiveMenuIsVisible } from '../../pages/hooks/useActiveMenuIsVisible';

export const WebMenu = ({ containerStyle }) => {
  useActiveMenuIsVisible();

  return (
    <nav>
      <div
        className="container fixed z-50 top-10 right-10 flex-row items-end"
        style={{ ...containerStyle }}
      >
        <ul className="flex justify-end">
          <li className="flex">
            <a
              href="#home"
              className={`home no-underline text-white text-xl font-sans mr-6 pb-5 hover:border-b-2 transition-all`}
            >
              HOME
            </a>
          </li>
          <li className="flex">
            <a
              href="#about"
              className={`about no-underline text-white text-xl font-sans mr-6 pb-5 hover:border-b-2 transition-all`}
            >
              SOBRE MI
            </a>
          </li>
          <li className="flex">
            <a className="services no-underline text-white text-xl font-sans mr-6 pb-5 hover:border-b-2 transition-all">
              SERVICIOS
            </a>
          </li>
          <li className="flex">
            <a className="contact no-underline text-white text-xl font-sans mr-6 pb-5 hover:border-b-2 transition-all">
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
