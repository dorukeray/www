import { ColorSchemeProvider, Loader, MantineProvider } from "@mantine/core";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useAppStore } from "./stores/appStore";
import theme from "./styles/theme";

function App() {
  const loading = useAppStore((state) => state.getLoading());

  const colorScheme = useAppStore((state) => state.colorScheme);
  const toggleColorScheme = useAppStore((state) => state.toggleColorScheme);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          ...theme,
          colorScheme,
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Suspense>
          {loading ? (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Loader variant="dots" color="green" />
            </div>
          ) : (
            <Outlet />
          )}
        </Suspense>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
