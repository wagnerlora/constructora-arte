# Reemplaza TODO el inicio de tu `page.tsx` por este bloque

```tsx
export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const proyecto = proyectos.find(
    (p) => p.slug.trim().toLowerCase() === slug.trim().toLowerCase()
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
```

## IMPORTANTE

Debes borrar el bloque viejo repetido que tienes arriba.

El error ocurrió porque quedaron DOS funciones `ProyectoPage` dentro del mismo archivo.

Después de pegar este código, guarda el archivo y prueba nuevamente.
