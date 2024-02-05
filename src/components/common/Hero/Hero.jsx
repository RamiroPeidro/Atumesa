import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, PhoneIcon, CreditCardIcon, ClockIcon} from '@heroicons/react/20/solid'
import EscenaRest from '../../../assets/Coffee shop-amico.svg';


const features = [
    {
        name: 'Pedido Instantáneo.',
        description:
          'Permita que sus clientes realicen pedidos directamente desde su mesa con tan solo unos clics, reduciendo tiempos de espera y mejorando el servicio.',
        icon: PhoneIcon,
    },
  {
    name: 'Pagos Digitales.',
    description:
      'Facilite el cierre de la experiencia con sistemas de pago integrados y seguros, agilizando cada transacción.',
    icon: CreditCardIcon,
  },
  {
    name: 'Servicio Continuo.',
    description:
      'Mantenga su restaurante en movimiento con una eficiencia operativa mejorada, asegurando que cada cliente reciba atención sin interrupciones.',
    icon: ClockIcon,
  },
]

export default function Example() {
  return (
    <div id='que-hacemos'className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Servicio Innovador</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Una nueva forma de servir</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Integre la tecnología a la mesa y transforme la experiencia gastronómica en su restaurante con "A tu mesa".
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={EscenaRest}
            alt="Escena del restaurante"
            className="mx-auto w-full max-w-sm sm:max-w-md lg:w-[48rem] lg:max-w-none"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
