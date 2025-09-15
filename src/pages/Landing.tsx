import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, BarChart3, Users, Zap, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import quantumLogo from "@/assets/quantum-logo.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={quantumLogo} alt="Quantum Jud" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-primary">Quantum Jud</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Recursos</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Planos</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button>Teste Grátis</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🚀 Sistema CRM para Advocacia
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
            Revolucione sua
            <br />
            Gestão Jurídica
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            O Quantum Jud é a solução completa para escritórios de advocacia que buscam eficiência, 
            organização e crescimento sustentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Começar Teste Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Ver Demonstração
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              14 dias grátis
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Sem cartão de crédito
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Suporte incluído
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Funcionalidades pensadas especificamente para atender as necessidades dos profissionais do direito.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Gestão de Clientes</CardTitle>
                <CardDescription>
                  Centralize todas as informações dos seus clientes em um só lugar
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Controle de Processos</CardTitle>
                <CardDescription>
                  Acompanhe o andamento de todos os processos em tempo real
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Relatórios Avançados</CardTitle>
                <CardDescription>
                  Analytics detalhados para tomada de decisões estratégicas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Automação Inteligente</CardTitle>
                <CardDescription>
                  Automatize tarefas repetitivas e ganhe mais tempo
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Segurança Total</CardTitle>
                <CardDescription>
                  Conformidade com LGPD e máxima segurança dos dados
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multi-usuário</CardTitle>
                <CardDescription>
                  Trabalhe em equipe com controle de permissões granular
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos que crescem com você
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para o seu escritório
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center">Starter</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">R$ 99</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription className="text-center">
                  Perfeito para profissionais autônomos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Até 100 clientes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>1 usuário</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Relatórios básicos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Suporte por email</span>
                </div>
                <Button className="w-full mt-6">Começar Teste</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Mais Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-center">Professional</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">R$ 199</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription className="text-center">
                  Ideal para escritórios médios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Até 500 clientes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>5 usuários</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Relatórios avançados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Suporte prioritário</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Automações</span>
                </div>
                <Button className="w-full mt-6">Começar Teste</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center">Enterprise</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">R$ 399</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription className="text-center">
                  Para grandes escritórios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Clientes ilimitados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Usuários ilimitados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Relatórios customizados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Suporte 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>API personalizada</span>
                </div>
                <Button className="w-full mt-6">Falar com Vendas</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "O Quantum Jud revolucionou nossa gestão. Aumentamos nossa produtividade em 40%."
                </p>
                <div>
                  <p className="font-semibold">Dr. Ana Silva</p>
                  <p className="text-sm text-muted-foreground">Silva & Associados</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Interface intuitiva e recursos poderosos. Recomendo para qualquer escritório."
                </p>
                <div>
                  <p className="font-semibold">Dr. Carlos Santos</p>
                  <p className="text-sm text-muted-foreground">Santos Advocacia</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Suporte excepcional e funcionalidades que realmente fazem a diferença."
                </p>
                <div>
                  <p className="font-semibold">Dra. Maria Costa</p>
                  <p className="text-sm text-muted-foreground">Costa & Parceiros</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu escritório?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de advogados que já confiam no Quantum Jud para gerir seus escritórios.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Começar Teste Gratuito de 14 Dias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={quantumLogo} alt="Quantum Jud" className="h-8 w-8" />
                <h3 className="text-lg font-bold">Quantum Jud</h3>
              </div>
              <p className="text-muted-foreground">
                A solução completa para gestão jurídica moderna.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Quantum Jud. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;