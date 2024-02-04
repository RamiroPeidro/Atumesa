import React from 'react';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-5 gap-8 text-gray-300'>
      <div>
        <h1 className='text-3xl font-bold text-[#1A202C]'>A TU MESA.</h1>
      </div>
      <div className='flex flex-col justify-between'>
        <h6 className='font-medium text-gray-400'>¿Qué hacemos?</h6>
        {/* Contenido adicional para esta sección */}
      </div>
      <div className='flex flex-col justify-between'>
        <h6 className='font-medium text-gray-400'>Beneficios</h6>
        {/* Contenido adicional para esta sección */}
      </div>
      <div className='flex flex-col justify-between'>
        <h6 className='font-medium text-gray-400'>Tarifas</h6>
        {/* Contenido adicional para esta sección */}
      </div>
      <div className='flex flex-col justify-between'>
        <h6 className='font-medium text-gray-400'>Conocenos</h6>
        {/* Contenido adicional para esta sección */}
      </div>
    </div>
  );
};

export default Footer;
