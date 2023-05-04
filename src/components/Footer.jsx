import React from 'react';
import * as AiIcons from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className=" bg-base">
      <div className=" flex flex-col items-center p-10 text-text">
        <h3 className=' font-semibold mb-4'>Opening Times</h3>
        <div className='flex justify-between gap-8'>
          <p>Monday - Thursday:</p>
          <p>9:30 - 18:30</p>
        </div>
        <div className='flex justify-between gap-8'>
          <p>Thursday - Saturday:</p>
          <p>9:30 - 19:30</p>
        </div>
        <div className='flex justify-between gap-8'>
          <p>Sunday:</p>
          <p>Closed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
