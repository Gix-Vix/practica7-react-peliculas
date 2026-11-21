import AppRouter from "./routers/AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1 className="title">Catálogo de Películas</h1>
      </header>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;