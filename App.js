import Root from "./src/components/Root";
import { AuthProvider } from "./src/Context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
}

