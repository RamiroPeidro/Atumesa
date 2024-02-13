export default function FAQ() {
  return (
    <>
      {/* FAQ Section: Simple */}
      <div className="my-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Heading */}
          <div className="text-center">
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-500">
              Te respondemos
            </div>
            <h2 className="text-4xl font-black text-black dark:text-white">
              Preguntas frecuentes
            </h2>
          </div>
          {/* END Heading */}

          {/* FAQ */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h4 className="mb-2 font-semibold">
              ¿Cómo puedo pedir a través del código QR?"
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                 Simplemente escanea el código QR ubicado en tu mesa con la cámara de tu teléfono. Serás dirigido a nuestro menú digital donde podrás elegir tus platos o bebidas, personalizar tu pedido y enviarlo directamente a la cocina o barra.

              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">
              ¿Es seguro pagar a través de este sistema?
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                 Absolutamente. Utilizamos encriptación de extremo a extremo para asegurar que tu información de pago esté protegida. No almacenamos datos de tarjetas de crédito en nuestros servidores.

              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">
              ¿Puedo modificar o cancelar mi pedido después de enviarlo?
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              Sí, puedes hacer modificaciones o cancelar tu pedido dentro de un corto período de tiempo después de haberlo enviado. Por favor, comunícate inmediatamente con el personal del lugar o utiliza la opción correspondiente en la aplicación.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">
              ¿Qué hago si tengo alergias alimentarias?
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              Al realizar tu pedido, encontrarás una sección donde podrás indicar cualquier alergia alimentaria o restricción dietética. Nos aseguraremos de que tu comida se prepare de acuerdo con tus necesidades.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">
              ¿Cómo puedo obtener mi factura?
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
               Una vez que completes tu pago, te enviaremos la factura electrónicamente al correo electrónico que nos proporcionaste. También puedes acceder a todas tus facturas anteriores desde tu cuenta en nuestra plataforma.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">
              ¿Ofrecen soporte en caso de tener problemas con un pedido?
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
               Sí, nuestro equipo de soporte está disponible para ayudarte con cualquier problema o pregunta que puedas tener. Puedes contactarnos a través de la aplicación, nuestro sitio web o por teléfono.
              </p>
            </div>
          </div>
          {/* END FAQ */}

          {/* Link
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
            >
              <svg
                className="hi-mini hi-arrow-top-right-on-square inline-block size-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Go to support center</span>
            </a>
          </div> */}
          {/* END Link */}
        </div>
      </div>
      {/* END FAQ Section: Simple */}
    </>
  );
}
