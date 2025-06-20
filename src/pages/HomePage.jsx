import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const [billingCycle, setBillingCycle] = useState("anual");

  const prices = {
    mensual: {
      Starter: "0€",
      Basic: "19,90€",
      Pro: "69€",
      Advanced: "190€",
      Personalizado: "Consultar"
    },
    anual: {
      Starter: "0€",
      Basic: "15,92€",
      Pro: "55,20€",
      Advanced: "152,00€",
      Personalizado: "Consultar"
    }
  };

  const totals = {
    anual: {
      Starter: "0€",
      Basic: "191,04€",
      Pro: "662,40€",
      Advanced: "1.824,00€",
      Personalizado: "Consultar",
      }
  };

  return (
    <main className="p-6 space-y-8 scroll-smooth">
      <section
  className="bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white text-center px-4"
  style={{ backgroundImage: "url('/tienda-reacondicionados.png')" }}
>
  <div className="bg-black bg-opacity-60 p-8 rounded-xl">
  <h1 className="text-6xl font-bold mb-4">PhoneCycle Manager</h1>
  <h1 className="text-4xl font-bold mb-4">Gestiona tu negocio de reacondicionados y usados</h1>
    <p className="text-xl mb-6">El primer software integral para tiendas de móviles</p>
    <a href="#contacto">
      <Button className="text-lg px-6 py-3">Solicita una demo</Button>
    </a>
  </div>
</section>

      {/* Hero Section */}
      <section className="text-center pt-20 pb-6">
        <h1 className="text-5xl font-bold mb-4">Gestiona tu negocio de reacondicionados y usados de forma fácil y eficiente</h1>
        <p className="text-xl mb-16">El primer software integral especializado para tiendas de móviles reacondicionados y usados</p>
        <a href="#contacto">
  <Button className="text-lg px-8 py-4">Solicita una demo</Button>
</a>
      </section>

      {/* Qué es PCM */}
      <section className="max-w-4xl mx-auto text-center mt-4">
        <h2 className="text-3xl font-semibold mb-4">¿Qué es PhoneCycle Manager?</h2>
        <p className="text-lg mb-6">
          PhoneCycle Manager es el software líder en la gestión integral de compra, venta y reparación de smartphones reacondicionados y usados. Diseñado específicamente para el sector.
        </p>
      </section>

      {/* Ventajas */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {["Una sola herramienta", "Modular y económica", "Fácil de usar y sin instalaciones", "Compra directa a mayoristas", "Analítica avanzada", "Gestión total del negocio"].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-lg font-medium">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vídeo explicativo */}
<section className="max-w-4xl mx-auto text-center mb-12">
  <h2 className="text-3xl font-semibold mb-4"> PCM </h2>
  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
  <iframe
  className="absolute top-0 left-0 w-full h-full"
  src="https://www.youtube.com/embed/TSnKQmsFnxc"
  title="Video explicativo PCM"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
  </div>
</section>


      {/* Planes de Suscripción */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Planes que se adaptan a ti</h2>
        <div className="flex justify-center gap-4 mb-8">
  <Button variant={billingCycle === "mensual" ? "default" : "outline"} className="w-40 py-2 text-base" onClick={() => setBillingCycle("mensual")}>
    Plan mensual
  </Button>
  <Button variant={billingCycle === "anual" ? "default" : "outline"} className="w-40 py-2 text-base" onClick={() => setBillingCycle("anual")}>
    Plan anual
  </Button>
</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[{
            plan: "Starter",
            features: ["- 1 centro", "- 1 usuario", "- Órdenes de compra", "- Entradas", "- Tienda", "- Contabilidad"]
          }, {
            plan: "Basic",
            features: ["- Plan Starter +", "- Compra directa a mayoristas"]
          }, {
            plan: "Pro",
            features: ["- Plan Basic +", "- 2 centros", "- 3 usuarios", "- Compra a Particular", "- Control Policial", "- Test", "- Stock Total", "- Reservas", "- No disponibles", "- Caja", "- Control de pagos", "- Garantías", "- Accesorios", "- Inventario", "- Taller", "- Buscador de Imeis"]
          }, {
            plan: "Advanced",
            features: ["- Plan Pro +", "- 5 Centros", "- 10 usuarios", "- Módulo Mayor", "- Devoluciones"]
          }, {
            plan: "Personalizado",
            features: ["- Centros ilimitados", "- Usuarios ilimitados", "- Personalización de funcionalidades"]
          }
        ].map(({ plan, features }, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan}</h3>
                {plan === "Personalizado" ? (
                  <p className="text-2xl text-blue-600 mb-1">{prices[billingCycle][plan]}</p>
                ) : (
                  <p className="text-2xl text-blue-600 mb-1">
  {prices[billingCycle][plan].replace('€', '€ ')}<span className="text-sm text-gray-700">/mes</span>
</p>
                )}
                {billingCycle === "anual" && (
                  <p className="text-sm text-gray-500 mb-2">Total anual: {totals.anual[plan]}</p>
                )}
                <ul className="text-sm text-gray-600 text-left space-y-1">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tutoriales */}
      <section className="bg-gray-100 py-16 text-center">
  <h2 className="text-3xl font-semibold mb-4">Tutoriales</h2>
  <p className="text-lg mb-6">Aprende a usar PhoneCycle Manager con nuestros vídeos paso a paso</p>
  <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
    <div className="flex justify-center flex-wrap gap-4">
    {["Introducción a PCM", "Inicio de sesión y configuración de cuenta", "Entrada de inventario", "Compra particular", "Gestión de tienda"].map((title, index) => (
  title === "Introducción a PCM" ? (
    <a
      key={index}
      href="https://www.youtube.com/embed/TSnKQmsFnxc"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" className="text-sm px-4 py-2">{title}</Button>
    </a>
  ) : (
    <Button key={index} variant="outline" className="text-sm px-4 py-2">{title}</Button>
  )
))}

    </div>
    <div className="flex justify-center flex-wrap gap-4">
      {["Garantías", "Mantenimiento de modelos y precios", "Gestión de accesorios", "Gestión de stock e inventarios", "Ventas al Mayor"].map((title, index) => (
        <Button key={index + 5} variant="outline" className="text-sm px-4 py-2">{title}</Button>
      ))}
    </div>
    <div className="flex justify-center flex-wrap gap-4">
    {["Teléfonos en Test", "Roles de Usuarios", "Control de Pagos y Contabilidad", "Taller", "Devoluciones"].map((title, index) => {
  if (title === "Roles de Usuarios") {
    return (
      <a
        key={index + 10}
        href="/roles-usuarios.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm px-4 py-2 border rounded-xl border-gray-300 hover:bg-gray-100 mr-2 mb-2 inline-block text-center"
      >
        {title}
      </a>
    );
  }

  return (
    <Button key={index + 10} variant="outline" className="text-sm px-4 py-2">
      {title}
    </Button>
  );
})}

    </div>
  </div>
</section>

      {/* Contacto */}
      <section id="contacto" className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <p className="mb-6">¿Tienes dudas o quieres una demo? Escríbenos:</p>
        <form
          className="space-y-4"
          action="https://formspree.io/f/meogdbpa"
          method="POST"
        >
          <Input name="nombre" placeholder="Nombre" required />
          <Input name="empresa" placeholder="Empresa" />
          <Input name="telefono" placeholder="Teléfono" />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="mensaje" placeholder="Mensaje" className="h-24" required />
          <Button type="submit" className="w-full">Enviar</Button>
        </form>
        <div className="mt-8 text-sm">
          <p>📧 info@estudio510.com</p>
          <p>📞 +34 629 262 690</p>
          {/* <p>🌐 www.pcm2050.com</p> */}
        </div>
      </section>
    </main>
  );
}
