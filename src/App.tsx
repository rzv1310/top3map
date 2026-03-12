import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";

const TermeniConditii = React.lazy(() => import("./pages/TermeniConditii"));
const GDPR = React.lazy(() => import("./pages/GDPR"));
const Cookies = React.lazy(() => import("./pages/Cookies"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const CookieConsent = React.lazy(() => import("./components/CookieConsent"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <CookieConsent />
        </Suspense>
        <WhatsAppButton />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/termeni" element={<TermeniConditii />} />
            <Route path="/gdpr" element={<GDPR />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
