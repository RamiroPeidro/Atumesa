import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border rounded shadow-sm">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-gray-600 transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const FAQ = () => {
    return (
      <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="flex flex-col mb-16 sm:text-center">
            <a href="/" class="mb-6 sm:mx-auto">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  class="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-indigo-600 font-semibold">
                <span class="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{' '}
                Soluciones rápidas a tus preguntas
              </h2>
            </div>
          </div>
          <div class="space-y-4">
            <Item title="¿Cómo puedo pedir a través del código QR?">
            Simplemente escanea el código QR ubicado en tu mesa con la cámara de tu teléfono. Serás dirigido a nuestro menú digital donde podrás elegir tus platos o bebidas, personalizar tu pedido y enviarlo directamente a la cocina o barra.
            </Item>
            <Item title="¿Es seguro pagar a través de este sistema?">
            Absolutamente. Utilizamos encriptación de extremo a extremo para asegurar que tu información de pago esté protegida. No almacenamos datos de tarjetas de crédito en nuestros servidores.
            </Item>
            <Item title="¿Puedo modificar o cancelar mi pedido después de enviarlo?">
            Sí, puedes hacer modificaciones o cancelar tu pedido dentro de un corto período de tiempo después de haberlo enviado. Por favor, comunícate inmediatamente con el personal del lugar o utiliza la opción correspondiente en la aplicación.
            </Item>
            <Item title="¿Qué hago si tengo alergias alimentarias?">
            Al realizar tu pedido, encontrarás una sección donde podrás indicar cualquier alergia alimentaria o restricción dietética. Nos aseguraremos de que tu comida se prepare de acuerdo con tus necesidades.
          </Item>
          <Item title="¿Cómo puedo obtener mi factura?">
            Una vez que completes tu pago, te enviaremos la factura electrónicamente al correo electrónico que nos proporcionaste. También puedes acceder a todas tus facturas anteriores desde tu cuenta en nuestra plataforma.
          </Item>
          <Item title="¿Ofrecen soporte en caso de tener problemas con un pedido?">
            Sí, nuestro equipo de soporte está disponible para ayudarte con cualquier problema o pregunta que puedas tener. Puedes contactarnos a través de la aplicación, nuestro sitio web o por teléfono.
          </Item>
          </div>
        </div>
      </div>
    );
  };