import { Layout } from "antd";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/UI/Navbar/Navbar";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";
import GlobalStyles from "./styles/global.ts";
import { useAppSelector } from "./hooks/useAppSelector.ts";
import { MoodSelectors } from "./store/selectors.ts";

function App() {
  const { setIsAuth, setUser } = useActions();
  const { moodColor } = useAppSelector(MoodSelectors);

  const { toggleColor } = useActions();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setIsAuth(true);
    }
    if (localStorage.getItem("mood")) {
      const color = localStorage.getItem("mood");
      toggleColor(color!);
    }
  }, []);

  return (
    <>
      <Layout>
        <GlobalStyles moodColor={moodColor} />

        <Navbar />
        <Layout.Content>
          <AppRoutes />
        </Layout.Content>
      </Layout>
    </>
  );
}

export default App;
