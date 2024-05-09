import { Layout } from "antd";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/UI/Navbar/Navbar";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";
import GlobalStyles from "./styles/global.ts";
import { useAppSelector } from "./hooks/useAppSelector.ts";
import {
  AuthSelectors,
  EventSelectors,
  MoodSelectors,
} from "./store/selectors.ts";
import { Footer } from "antd/es/layout/layout";

function App() {
  const { setIsAuth, setUser, fetchEvents } = useActions();
  const { moodColor } = useAppSelector(MoodSelectors);
  const { user } = useAppSelector(AuthSelectors);
  const { events } = useAppSelector(EventSelectors);

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

  useEffect(() => {
    fetchEvents(user.username);
  }, [events.length]);

  return (
    <>
      <Layout>
        <GlobalStyles moodColor={moodColor} />
        <Navbar />
        <Layout.Content>
          <AppRoutes />
        </Layout.Content>
        <Footer
          style={{
            textAlign: "center",
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}

export default App;
