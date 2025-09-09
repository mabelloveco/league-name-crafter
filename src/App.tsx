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
import FunnyNames from "./pages/FunnyNames";
import InappropriateNames from "./pages/InappropriateNames";
import PlayerThemedNames from "./pages/PlayerThemedNames";
import PopCultureNames from "./pages/PopCultureNames";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

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

                {/* FAQ replaces Generator */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/generator" element={<Navigate to="/faq" replace />} />

                {/* Name pages */}
                <Route path="/funny-names" element={<FunnyNames />} />
                <Route path="/inappropriate-names" element={<InappropriateNames />} />
                <Route path="/player-themed-names" element={<PlayerThemedNames />} />
                <Route path="/pop-culture-names" element={<PopCultureNames />} />

                {/* Static pages */}
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />

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
