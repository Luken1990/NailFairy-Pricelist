import { useState } from 'react';
import { services } from './data/services';

function App() {
  return (
    <>
      <main className="py-40">
        <div className="container mx-auto flex flex-col gap-y-10 items-center md:px-0 px-4">
          <h1 className="text-center text-4xl font-bold">Price List</h1>
          {services.map((service) => {
            return (
              <div className="w-full">
                <table className=" w-full table-auto">
                  <thead>
                    <tr>
                      <th
                        colspan="2"
                        className=" border border-rose-100 px-6 py-4  bg-rose-100"
                      >
                        {service.Title}
                      </th>
                    </tr>
                    <tr className="text-rose-400">
                      <th className="border px-4 py-2 text-left">Services</th>
                      <th className="border px-4 py-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.treatments.map(({ name, price, info }) => {
                      return (
                        <tr>
                          <td className="border px-4 py-2 text-[14px] font-semibold">
                            {name}
                            {info ? (
                              <p className="text-xs font-light pt-2">{info}</p>
                            ) : null}
                          </td>
                          <td className=" border px-4 py-2 text-center w-1/6">
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
    </>
  );
}

export default App;
