import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import DataProvider from "./utils/DataProvider";
import Layout from "pages/Layout";
import Home from "pages/Home";
import Form from "pages/Form";
import Chatbot from "pages/Chatbot";

function App({ Component, pageProps }) {
  return (
    <Provider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="form" element={<Form />} />
              <Route path="chatbot" element={<Chatbot />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </Provider>
  );
}

export default App;
