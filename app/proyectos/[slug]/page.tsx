import Link from 'next/link'

const proyectos = [
  {
    slug: 'terraza-torre-jeshua-4',
    nombre: 'Terraza Torre Jeshua 4',
    categoria: 'Remodelación residencial / Terraza',
    descripcion:
      'Proyecto de remodelación de terraza moderna en Santo Domingo realizado por Constructora Arte.',
    imagenes: [
      '/images/terraza-torre-jeshua4/20180424_111649.jpg',
      '/images/terraza-torre-jeshua4/20180425_101403.jpg',
      '/images/terraza-torre-jeshua4/20180425_152951.jpg',
    ],
  },

  {
    slug: 'cocina-torre-romanza',
    nombre: 'Cocina Torre Romanza',
    categoria: 'Remodelación de cocina',
    descripcion:
      'Remodelación moderna de cocina en Torre Romanza con terminaciones elegantes y funcionales.',
    imagenes: [
      '/images/cocina-torre-romanza-1.jpg',
      '/images/cocina-torre-romanza-2.jpg',
    ],
  },

  {
    slug: 'bano-torre-romanza',
    nombre: 'Baño Torre Romanza',
    categoria: 'Remodelación de baño',
    descripcion:
      'Proyecto de remodelación de baño moderno en Santo Domingo con porcelanato y terminaciones premium.',
    imagenes: [
      '/images/bano-torre-romanza/Foto0509.jpg',
      '/images/bano-torre-romanza/Foto0516(1).jpg',
      '/images/bano-torre-romanza/Foto0517(1).jpg',
    ],
  },
]

export default function ProyectoPage({
  params,
}: {
  params: { slug: string }
}) {
const proyecto = proyectos.find(
  (p) => p.slug.trim().toLowerCase() === params.slug.trim().toLowerCase()
)

  if (!proyecto) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Proyecto no encontrado
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">
            Constructora Arte
          </Link>

          <Link
            href="/"
            className="bg-yellow-500 text-slate-900 px-5 py-3 rounded-xl font-bold"
          >
            Volver
          </Link>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-600 font-semibold mb-3">
            {proyecto.categoria}
          </p>

          <h1 className="text-5xl font-extrabold mb-6">
            {proyecto.nombre}
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-4xl">
            {proyecto.descripcion}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyecto.imagenes.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${proyecto.nombre} foto ${index + 1}`}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}