import { Layout } from "antd";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
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
