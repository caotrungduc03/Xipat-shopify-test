import { AppProvider, Frame } from "@shopify/polaris";
import { BrowserRouter } from "react-router-dom";
import Content from "./layout/Content";
import Navigator from "./layout/Navigator";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Frame navigation={<Navigator />}>
          <Content />
        </Frame>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
