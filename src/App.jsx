import Routes from './routes/Routes';
import AuthProvider from './providers/AuthProvider';
import ReactQueryClientProvider from './providers/ReactQueryClientProvider';
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <ReactQueryClientProvider>
      <AuthProvider>
        <Routes />            
        <Toaster />
      </AuthProvider>
    </ReactQueryClientProvider>
  );
}
