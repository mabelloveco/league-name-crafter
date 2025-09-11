import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import FAQ from "./pages/FAQ"; // ✅ new FAQ page
import Generator from "./pages/Generator"; // ✅ Generator Q&A page
import FunnyNames from "./pages/FunnyNames";
import InappropriateNames from "./pages/InappropriateNames";
import PlayerThemedNames from "./pages/PlayerThemedNames";
import PopCultureNames from "./pages/PopCultureNames";
import BestTeamNames2025 from "./pages/BestTeamNames2025";

// Blog pages
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

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

                {/* FAQ and Generator pages */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/generator" element={<Generator />} />

                {/* Name pages */}
                <Route path="/funny-names" element={<FunnyNames />} />
                <Route path="/inappropriate-names" element={<InappropriateNames />} />
                <Route path="/player-themed-names" element={<PlayerThemedNames />} />
                <Route path="/pop-culture-names" element={<PopCultureNames />} />
                  <Route path="/best-team-names-2025" element={<BestTeamNames2025 />} />

                {/* Blog */}
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" replace />} />
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
