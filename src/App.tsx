import { Hero } from "./components/Hero";
import { Form } from "./components/Form";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 2000,
          className:
            "backdrop-blur-sm backdrop-brightness-110 bg-transparent text-white",
        }}
      />
      <Hero />
      <Form />
    </div>
  );
}

export default App;
