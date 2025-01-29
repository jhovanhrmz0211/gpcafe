import "./App.css";
import Encabezado from "./componentes/estructura/Encabezado.jsx";
import MainMenu from "./componentes/estructura/Menu.jsx";
function App() {
  return (
    <>
      <Encabezado></Encabezado>
      <main className="main">
        <MainMenu></MainMenu>
        {/* <section>
          <h2>Reserva</h2>
          <form>
            <label>Fecha y Hora:</label>
            <input type="datetime-local" />
            <label>Personas</label>
            <select>
              <option value="1">1 Persona</option>
              <option value="2">2 Personas</option>
              <option value="3">3 Personas</option>
              <option value="4">4 Personas</option>
              <option value="5">5 Personas</option>
            </select>
            <button>Enviar solicitud</button>
          </form>
        </section>
        <section id="ea">
          <h3>aa</h3>
        </section> */}
      </main>
    </>
  );
}

export default App;
