import { Loader2 } from "lucide-react";
import { appConfig } from "@/config/app-config";

const LoadingScreen = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-muted-foreground" role="status" aria-live="polite">
    <Loader2 className="h-10 w-10 animate-spin text-primary" />
    <div className="text-center">
      <p className="text-sm uppercase tracking-widest text-primary/70">Carregando</p>
      <p className="text-lg font-semibold text-foreground">{appConfig.appName}</p>
      <p className="text-xs text-muted-foreground">Preparando sua experiência...</p>
    </div>
  </div>
);

export default LoadingScreen;
