import { Suspense, lazy, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import DashboardLayout from "./components/layout/DashboardLayout";
import { appConfig } from "@/config/app-config";
import { adminRelativePath, routes } from "@/config/routes";
import LoadingScreen from "@/components/common/LoadingScreen";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Companies = lazy(() => import("./pages/Companies"));
const NewCompany = lazy(() => import("./pages/NewCompany"));
const Plans = lazy(() => import("./pages/Plans"));
const NewPlan = lazy(() => import("./pages/NewPlan"));
const Subscriptions = lazy(() => import("./pages/Subscriptions"));
const NewSubscription = lazy(() => import("./pages/NewSubscription"));
const UsersPage = lazy(() => import("./pages/Users"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Support = lazy(() => import("./pages/Support"));
const Logs = lazy(() => import("./pages/Logs"));
const Settings = lazy(() => import("./pages/Settings"));
const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const NewUser = lazy(() => import("./pages/NewUser"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => {
  const routerBaseName = useMemo(() => (appConfig.basePath === "/" ? undefined : appConfig.basePath), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={routerBaseName}>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path={routes.admin.root} element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path={adminRelativePath.companies} element={<Companies />} />
                <Route path={adminRelativePath.newCompany} element={<NewCompany />} />
                <Route path={adminRelativePath.plans} element={<Plans />} />
                <Route path={adminRelativePath.newPlan} element={<NewPlan />} />
                <Route path={adminRelativePath.subscriptions} element={<Subscriptions />} />
                <Route path={adminRelativePath.newSubscription} element={<NewSubscription />} />
                <Route path={adminRelativePath.users} element={<UsersPage />} />
                <Route path={adminRelativePath.newUser} element={<NewUser />} />
                <Route path={adminRelativePath.analytics} element={<Analytics />} />
                <Route path={adminRelativePath.support} element={<Support />} />
                <Route path={adminRelativePath.logs} element={<Logs />} />
                <Route path={adminRelativePath.settings} element={<Settings />} />
              </Route>
              <Route path={routes.home} element={<Landing />} />
              <Route path={routes.login} element={<Login />} />
              <Route path={routes.register} element={<Register />} />
              <Route path={routes.notFound} element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
