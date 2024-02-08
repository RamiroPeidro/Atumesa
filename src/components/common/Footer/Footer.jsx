import React from 'react';

const Footer = () => {
  const navigation = [
    // { name: '¿Qué hacemos?', href: '#que-hacemos'},
    // { name: 'Beneficios', href: '#beneficios' },
    // { name: 'Tarifas', href: '#tarifas' },
    // Puedes agregar más elementos si es necesario
  ];

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-5 gap-8 text-gray-300'>
      <div>
        <h1 className='text-3xl font-bold text-[#1A202C]'>A TU <span className='text-indigo-600'>MESA</span>.</h1>
      </div>
      {navigation.map((item) => (
        <div key={item.name} className='flex flex-col justify-between'>
          <a href={item.href} className='font-medium text-gray-400 hover:text-gray-200'>
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Footer;
