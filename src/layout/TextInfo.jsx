import React from 'react';

const Top = () => {
  return (
    <div className="top-header py-2">
      <div className="container mx-auto">
        <h2 className="mb-2 font-bold">Websites</h2>
        <div className="text flex gap-4">
          <p><a href="" className="text-gray-700 hover:text-yellow-500">Gift Card</a></p>
          <p><a href="" className="text-gray-700 hover:text-yellow-500">Mobile Top Up</a></p>
          <p><a href="" className="text-gray-700 hover:text-yellow-500">Bill Payment</a></p>
        </div>
      </div>
    </div>
  );
}

export default Top;
