import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Painel from "./pages/Painel";
import Empresas from "./pages/Empresas";
import NovaEmpresa from "./pages/NovaEmpresa";
import Planos from "./pages/Planos";
import NovoPlano from "./pages/NovoPlano";
import Assinaturas from "./pages/Assinaturas";
import NovaAssinatura from "./pages/NovaAssinatura";
import UsuariosPage from "./pages/Usuarios";
import Relatorios from "./pages/Relatorios";
import Suporte from "./pages/Suporte";
import Configuracoes from "./pages/Configuracoes";
import Inicio from "./pages/Inicio";
import Entrar from "./pages/Entrar";
import Cadastro from "./pages/Cadastro";
import DashboardLayout from "./components/layout/DashboardLayout";
import NaoEncontrado from "./pages/NaoEncontrado";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<Painel />} />
            <Route path="empresas" element={<Empresas />} />
            <Route path="empresas/nova" element={<NovaEmpresa />} />
            <Route path="planos" element={<Planos />} />
            <Route path="planos/novo" element={<NovoPlano />} />
            <Route path="assinaturas" element={<Assinaturas />} />
            <Route path="assinaturas/nova" element={<NovaAssinatura />} />
            <Route path="usuarios" element={<UsuariosPage />} />
            <Route path="relatorios" element={<Relatorios />} />
            <Route path="suporte" element={<Suporte />} />
            <Route path="configuracoes" element={<Configuracoes />} />
          </Route>
          <Route path="/" element={<Inicio />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
