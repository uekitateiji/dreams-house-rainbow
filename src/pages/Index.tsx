import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-white">
    {/* Navigation */}
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-slate-800">BISCAYNE</div>
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-slate-600 hover:text-slate-800 transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('suites')} className="text-slate-600 hover:text-slate-800 transition-colors">
            Suites
          </button>
          <button onClick={() => scrollToSection('amenities')} className="text-slate-600 hover:text-slate-800 transition-colors">
            Amenities
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-800 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200')"
      }} />
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-2xl md:text-6xl font-light mb-6 tracking-wider">
          BISCAYNE<br />SHORES
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8  mx-auto leading-relaxed tracking-widest">
          Empresa especializada en la construcción de casas personalizadas <br></br>en SteelPanel, con tecnología de última generación.
        </p>
      </div>
    </section>

    {/* Hero Section */}
    <section id="hero" className="relative flex items-center justify-center bg-gradient-to-r bg-whiteh-[400px] lg:h-[450px]">

      <div className="relative z-10 text-center text-slate-900 px-6">
        <h2 className="text-2xl md:text-3xl font-light mb-6">
          Por qué elegir a Dreams House
        </h2>
        <p className="text-xl md:text-6xl font-light mb-8  mx-auto leading-relaxed tracking-widest">
          Quienes buscan una forma rápida, <br></br>eficiente y sostenible de construir.
        </p>
      </div>
    </section>



    {/* Tropical Paradise Section */}
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 order-2 md:order-1">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" alt="Tropical paradise" className="w-full h-full object-cover shadow-2xl" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
            Sobre nosotros
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 text-lg">
            QuikHouse es la fábrica responsable por el desarrollo y la producción del sistema constructivo SteelPanel, una tecnología industrializada que ofrece agilidad, resistencia y precisión en la construcción civil.
            Para llevar sus proyectos a la realidad con excelencia, QuikHouse cuenta con la alianza estratégica de Dreams House, empresa especializada en la ejecución de obras residenciales y comerciales.
            Juntas, ofrecen una solución completa: desde la fabricación de los paneles hasta el montaje final en el terreno.
          </p>
        </div>
      </div>
    </section>

    {/* Ocean Experience Section */}
    <section id="suites" className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
            Nuestro Sistema
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 text-lg">
            SteelPanel es un sistema constructivo exclusivo de QuikHouse. Está compuesto por paneles metálicos autoportantes de acero galvanizado que cumplen funciones estructurales y divisorias.
            Al ser prefabricados, garantizan rapidez en la instalación, alta resistencia, durabilidad y flexibilidad para aplicar diversos acabados.
            Es una solución ideal para edificaciones de hasta dos plantas, tanto residenciales como comerciales, con la garantía de calidad de un sistema industrializado.
          </p>
        </div>
        <div className="relative h-96">
          <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800" alt="Ocean view" className="w-full h-full object-cover shadow-2xl" />
        </div>
      </div>
    </section>


    {/* Modern Accommodation Section */}
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 order-2 md:order-1">
          <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800" alt="Modern suite" className="w-full h-full object-cover shadow-2xl" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
            NO CONSTRUIMOS CASAS, TRANSFORMAMOS TU ESTILO DE VIDA
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 text-lg">
            Elegir construir con el sistema SteelPanel es optar por una experiencia superior desde el primer día.
            Ofrecemos eficiencia en los plazos, acabados de alta calidad y flexibilidad total en los diseños.
            Cada proyecto se adapta a tus sueños, necesidades y estilo de vida, con soluciones personalizadas y atención a cada detalle.
            Nuestros sistemas permiten una instalación limpia, rápida y precisa, ideal para quienes valoran innovación, confort y durabilidad en su inversión.
            Más que construir estructuras, creamos espacios únicos que reflejan quién eres y cómo quieres vivir.
          </p>
        </div>
      </div>
    </section>



    {/* Pricing Section */}
    <section className="py-20 px-6">
      <div className="max-fullmx-auto px-[3%]">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="text-white py-24 flex bg-[#000e35]/90 px-[25px]">
            <CardContent className="text-center justify-center flex-1 flex flex-col gap-2">
              <h3 className="text-2xl font-light">OCEAN VIEW SUITES</h3>
              <div className="text-5xl font-light">$4,396</div>
              <p className="text-slate-300">per night</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 text-white p-8 flex bg-[#000e35]/90">
            <CardContent className="text-center justify-center flex-1 flex flex-col gap-2">
              <h3 className="text-2xl font-light">PENTHOUSE SUITE</h3>
              <div className="text-5xl font-light">$8,950</div>
              <p className="text-slate-300">per night</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <CardContent>
              <h4 className="text-xl font-light mb-2">WATERFRONT DINING</h4>
              <div className="text-3xl font-light text-slate-800">$2,733</div>
              <p className="text-slate-600">per person</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent>
              <h4 className="text-xl font-light mb-2">SPA PACKAGE</h4>
              <div className="text-3xl font-light text-slate-800">$2,899</div>
              <p className="text-slate-600">per session</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent>
              <h4 className="text-xl font-light mb-2">YACHT CHARTER</h4>
              <div className="text-3xl font-light text-slate-800">$5,996</div>
              <p className="text-slate-600">per day</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-20 px-6 bg-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
          WATERFRONT SERENITY WITH<br />
          FIVE-STAR SERVICE
        </h2>
        <p className="text-slate-600 leading-relaxed mb-8 text-lg max-w-2xl mx-auto">
          Discover unparalleled luxury where pristine waters meet world-class hospitality.
          Our dedicated team ensures every moment of your stay exceeds expectations.
        </p>
        <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg">
          CONTACT US
        </Button>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light mb-4">BISCAYNE SHORES</h3>
            <p className="text-slate-400 text-sm">
              Luxury waterfront resort in the heart of South Florida
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">ACCOMMODATIONS</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Ocean View Suites</li>
              <li>Penthouse Collection</li>
              <li>Waterfront Villas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">AMENITIES</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Private Marina</li>
              <li>Spa & Wellness</li>
              <li>Fine Dining</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">CONTACT</h4>
            <p className="text-sm text-slate-400">
              1234 Biscayne Boulevard<br />
              Miami, FL 33132<br />
              (305) 555-0123
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 Biscayne Shores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>;
};
export default Index;