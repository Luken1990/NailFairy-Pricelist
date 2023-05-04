import React from 'react';
import * as AiIcons from 'react-icons/ai';

const Header = () => {
  return (
    <header className="bg-base min-h-1/2">
      <div className="container mx-auto md:px-0 px-4">
        <div className=" flex flex-col justify-between items-center md:flex-row py-20 relative gap-y-14">
          <div className="md:text-left text-center text-text">
            <h1 className="text-6xl font-bold mb-2">Nail Fairy</h1>
            <h3 className="text-2xl text-white font-bold">PriceList</h3>

            <div className="flex flex-col gap-2 py-6 text-sm text-text">
              <div className="flex flex-row items-center gap-2 md:justify-start justify-center">
                <AiIcons.AiOutlinePhone size={20} />
                <a href="tel:020-8770-1735">Get in Touch</a>
              </div>
              <div className="flex flex-row items-center gap-2 md:justify-start justify-center">
                <AiIcons.AiOutlineInstagram size={20} />
                <a href="https://www.instagram.com/nailfairybeeches/">
                  Follow Us
                </a>
              </div>
            </div>

          </div>
          <figure className=" overflow-hidden w-72 h-72 before:w-72 before:h-72 before:border-4 before:border-white before:absolute before:-translate-x-6 before:-translate-y-6">
            <img
              className=" w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=664&q=80"
              alt=""
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
