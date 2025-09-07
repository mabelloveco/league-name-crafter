import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import HomePage from "./pages/HomePage";
import Generator from "./pages/Generator";
import FunnyNames from "./pages/FunnyNames";
import InappropriateNames from "./pages/InappropriateNames";
import PlayerThemedNames from "./pages/PlayerThemedNames";
import PopCultureNames from "./pages/PopCultureNames";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/generator" element={<Generator />} />
                <Route path="/funny-names" element={<FunnyNames />} />
                <Route path="/inappropriate-names" element={<InappropriateNames />} />
                <Route path="/player-themed-names" element={<PlayerThemedNames />} />
                <Route path="/pop-culture-names" element={<PopCultureNames />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
