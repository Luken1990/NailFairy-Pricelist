import { services } from '../data/services';

import React from 'react';

const Main = () => {
  return (
    <main className="py-20">
      <div className="container mx-auto flex flex-col gap-y-10 items-center md:px-0 px-4">
        {services.map((service) => {
          return (
            <div className="w-full">
              <table className=" w-full table-auto">
                <thead>
                  <tr>
                    <th
                      colspan="2"
                      className=" text-text border border-base px-6 py-4 bg-base tracking-widest"
                    >
                      {service.Title}
                    </th>
                  </tr>
                  <tr className="text-primary">
                    <th className="border border-base px-4 py-2 text-left">
                      Services
                    </th>
                    <th className="border border-base px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {service.treatments.map(({ name, price, info }) => {
                    return (
                      <tr className="text-text">
                        <td className="border border-base px-4 py-2 text-[14px] font-semibold">
                          {name}
                          {info ? (
                            <p className="text-xs font-light pt-1">{info}</p>
                          ) : null}
                        </td>
                        <td className=" border border-base px-4 py-2 text-center w-1/6">
                          £{price}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
