
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800">DREAMS HOUSE</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-slate-600 hover:text-slate-800 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-slate-600 hover:text-slate-800 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('sistema')} className="text-slate-600 hover:text-slate-800 transition-colors">
              Sistema
            </button>
            <button onClick={() => scrollToSection('projetos')} className="text-slate-600 hover:text-slate-800 transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-slate-600 hover:text-slate-800 transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-slate-600 hover:text-slate-800 transition-colors">
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200')"
        }} />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-wider">
            DREAMS HOUSE
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Empresa especializada na construção de casas personalizadas em SteelPanel, com tecnologia de última geração.
          </p>
          <Button 
            onClick={() => scrollToSection('sobre')}
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 text-lg font-medium"
          >
            CONHEÇA NOSSO TRABALHO
          </Button>
        </div>
      </section>

      {/* Why Choose Dreams House Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-slate-800">
            Por que escolher Dreams House?
          </h2>
          <p className="text-xl md:text-2xl font-light text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Para quem busca uma forma rápida, eficiente e sostenível de construir.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" 
              alt="Sobre Dreams House" 
              className="w-full h-full object-cover rounded-lg shadow-2xl" 
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
              Sobre Nós
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              QuikHouse é a fábrica responsável pelo desenvolvimento e produção do sistema construtivo SteelPanel, 
              uma tecnologia industrializada que oferece agilidade, resistência e precisão na construção civil.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Para levar seus projetos à realidade com excelência, QuikHouse conta com a aliança estratégica 
              de Dreams House, empresa especializada na execução de obras residenciais e comerciais.
            </p>
          </div>
        </div>
      </section>

      {/* System Section */}
      <section id="sistema" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
              Nosso Sistema
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              SteelPanel é um sistema construtivo exclusivo da QuikHouse. Composto por painéis metálicos 
              autoportantes de aço galvanizado que cumprem funções estruturais e divisórias.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Sendo prefabricados, garantem rapidez na instalação, alta resistência, durabilidade e 
              flexibilidade para aplicar diversos acabamentos.
            </p>
          </div>
          <div className="relative h-96">
            <img 
              src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800" 
              alt="Sistema SteelPanel" 
              className="w-full h-full object-cover rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Nossos Projetos
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Conheça alguns dos projetos que transformaram sonhos em realidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800')"
              }} />
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Casa Moderna</h3>
                <p className="text-slate-600">Projeto residencial com design contemporâneo</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800')"
              }} />
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Casa Sustentável</h3>
                <p className="text-slate-600">Projeto eco-friendly com painéis SteelPanel</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800')"
              }} />
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Casa Minimalista</h3>
                <p className="text-slate-600">Design clean e funcional</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800" 
              alt="Estilo de vida" 
              className="w-full h-full object-cover rounded-lg shadow-2xl" 
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
              Não Construímos Casas,<br/>
              Transformamos Seu Estilo de Vida
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Escolher construir com o sistema SteelPanel é optar por uma experiência superior desde o primeiro dia.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Oferecemos eficiência nos prazos, acabamentos de alta qualidade e flexibilidade total nos designs. 
              Cada projeto se adapta aos seus sonhos, necessidades e estilo de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Nossos Serviços
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-slate-900 text-white p-8">
              <CardContent className="text-center">
                <h3 className="text-2xl font-light mb-4">PROJETOS RESIDENCIAIS</h3>
                <p className="text-slate-300 mb-4">Casas personalizadas com sistema SteelPanel</p>
                <div className="text-4xl font-light">Consulte</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 text-white p-8">
              <CardContent className="text-center">
                <h3 className="text-2xl font-light mb-4">PROJETOS COMERCIAIS</h3>
                <p className="text-slate-300 mb-4">Soluções para empreendimentos comerciais</p>
                <div className="text-4xl font-light">Consulte</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h4 className="text-xl font-medium mb-2">CONSULTORIA</h4>
                <p className="text-slate-600 mb-4">Orientação completa para seu projeto</p>
                <div className="text-2xl font-light text-slate-800">Grátis</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h4 className="text-xl font-medium mb-2">PROJETO EXECUTIVO</h4>
                <p className="text-slate-600 mb-4">Plantas e detalhamentos técnicos</p>
                <div className="text-2xl font-light text-slate-800">Consulte</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h4 className="text-xl font-medium mb-2">EXECUÇÃO</h4>
                <p className="text-slate-600 mb-4">Construção completa da sua casa</p>
                <div className="text-2xl font-light text-slate-800">Consulte</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            Construa Seu Sonho Conosco
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 text-lg max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar seus sonhos em realidade 
            com a tecnologia SteelPanel e a expertise da Dreams House.
          </p>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg">
            FALE CONOSCO
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-light mb-4">DREAMS HOUSE</h3>
              <p className="text-slate-400 text-sm">
                Especialistas em construção com sistema SteelPanel
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">SERVIÇOS</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Projetos Residenciais</li>
                <li>Projetos Comerciais</li>
                <li>Consultoria Técnica</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">SISTEMA</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>SteelPanel</li>
                <li>Construção Sustentável</li>
                <li>Tecnologia Avançada</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">CONTATO</h4>
              <p className="text-sm text-slate-400">
                Entre em contato conosco<br />
                para mais informações<br />
                sobre nossos serviços
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 Dreams House. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
