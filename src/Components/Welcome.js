import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome" style={{ backgroundImage: "url('office.png')", backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 className="text-white`">Welcome to Manlitics</h1>
        <p className="text-white mt-3" >We are team of talented designers making websites with Bootstrap</p>
        <button className="btn mt-3 style={{ borderRadius: '10px',padding: '20px' }}">Get Started</button>
    </div>
  );
};

export default Welcome;
