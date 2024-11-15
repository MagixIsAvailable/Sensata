import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login';
import Dashboard from './dashboard';
import ForgotPassword from './ForgotPassword';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <ChakraProvider value={undefined} children={undefined}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
