import React from 'react';
import * as AiIcons from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className=" bg-base">
      <div className=" flex flex-col items-center p-10 text-text">
        <div className=' flex items-center mb-4 gap-2'>
          <AiIcons.AiOutlineClockCircle />
          <h3 className=" font-semibold">Opening Times</h3>
        </div>
        <div className="flex justify-between gap-4 w-[280px]">
          <p>Monday - Wednesday:</p>
          <p>9:30 - 18:30</p>
        </div>
        <div className="flex justify-between gap-4 w-[280px]">
          <p>Thursday - Friday:</p>
          <p>9:30 - 19:30</p>
        </div>
        <div className="flex justify-between gap-4 w-[280px]">
          <p>Saturday:</p>
          <p>9:30 - 18:30</p>
        </div>
        <div className="flex justify-between gap-4 w-[280px]">
          <p>Sunday:</p>
          <p>Closed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
