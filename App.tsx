import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ItemDetail from "./pages/ItemDetail.tsx";
import Call from "./pages/Call.tsx";
import EightInchCakes from "./pages/EightInchCakes.tsx";
import SupremeCakes from "./pages/SupremeCakes.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu/:location/:slug" element={<ItemDetail />} />
          <Route path="/call" element={<Call />} />
          <Route path="/8-inch-cakes" element={<EightInchCakes />} />
          <Route path="/supreme-cakes" element={<SupremeCakes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
