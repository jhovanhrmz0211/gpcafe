import { menuDesayuno } from "./menu";

function MainMenu() {
  return (
    <div className="main-menu">
      <h2>Menú</h2>
      <div className="menu-container">
        <div className="nav">
          <a href="#">Desayunos</a>
          <a href="#">Comida</a>
          <a href="#">Bebidas</a>
        </div>
        <div className="menu">
          {menuDesayuno.map((item, index) => (
            <div key={index} className="menu-descripcion">
              <h3>{item.nombre}</h3>
              <div className="datos">
                <p className="">{item.descripcion}</p>
                <p>${item.costo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
