import { Layout } from "antd";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/UI/Navbar/Navbar";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";
function App() {
  const { setIsAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRoutes />
        </Layout.Content>
      </Layout>
    </>
  );
}

export default App;
