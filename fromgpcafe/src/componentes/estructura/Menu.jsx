function MainMenu() {
    return ( 
        <div className="container-menu">
            <h2>Menú</h2>

            {/* <section>
          <h2>Menu</h2>
          <div className="desayunos">
            <h3>Desayunos</h3>
            <div className="tarjeta">
              <h4>Huevos a la Méxicana</h4>
              <p>
                {" "}
                2 piezas de huevo revuelto con jitomate, cebolla y chile
                serrano, acompañado de frijoles refritos espolvoreados de queso
                acompañados totopos o 5 tortillas
              </p>
              <span>$90.00 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Huevos Petroleros</h4>
              <p>
                2 piezas de huevo Dobladitas (tres) de tortillas de maíz,
                rellenas de 2 piezas de huevo revuelto con jitomate, cebolla,
                bañados con salsa de frijol negro, espolvoreados de crema, queso
                y chorizo coronados con chile toreado.
              </p>
              <span>$130.00 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Huevos Norteños</h4>
              <p>
                2 piezas de huevo revuelto con carne machaca, jitomate, cebolla
                y salsa norteña
              </p>
              <span>$100.00 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Huevos al Gusto</h4>
              <p>
                2 Huevos Estrellados, Revueltos, Rancheros, Divorciados, con
                frijoles refritos espolvoreados de queso, acompañados con
                totopos más cafe
              </p>
              <span>$70 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Molletes</h4>
              <p>
                Dorados, gratinados, con salsa pico de gallo, Acompáñalos con tu
                ingrediente favorito 50 gramos de: Tocino, o Jamón, o Pollo, o
                Chorizo
              </p>
              <span>$95.00 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Pancakes</h4>
              <p>
                Con anzana, Fresa o Plátano, acompáñalos con tu ingrediente
                favorito, 70 gramos de: tocino, o jamón, o salchicha,
              </p>
              <span>$135.00 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Ingrediente extra</h4>
              <p>
                50 gramos de: Tocino, o Jamón, o Nopales, o Hongos, o Queso
                Panela, o Queso Gouda
              </p>
              <span>$25.00 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Jugos Combinados</h4>
              <p>
                Verde: Naranja, Nopal, Apio, piña y perejil 350 ml{" "}
                <span>$58.00 pesos</span>
                <br />
                Vigorizante: Zanahoria con Naranja o Toronja 350 ml{" "}
                <span>$58.00 pesos</span>
                <br />
                Svelty: Piña, Toronja y Nopal 350 ml <span>$58.00 pesos</span>
                <br />
                Revitalizante: Naranja, Hierbabuena y Jengibre 350 ml{" "}
                <span>$58.00 pesos</span>{" "}
              </p>
            </div>
          </div>
          <div className="comida">
            <h3>Comida</h3>
            <h3>Entradas</h3>
            <div className="tarjeta">
              <h4>Sopas</h4>
              <p>
                Trozos de tortilla dorada, bañados en caldo con aguacate, queso
                crema y chile chipotle.
              </p>
              <span>$79.00 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Crema del Día</h4>
              <p>Crema de chile poblano, elote, champiñones o zanahoria.</p>
              <span>$60.00 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Caldo Tlalpeño</h4>
              <p>
                Consomé con pollo, verduras, garbanzo, aguacate, chile chipotle,
                queso fresco y crema.
              </p>
              <span>$90.00 pesos</span>
            </div>
            <h3>Ensaladas y Pastas</h3>
            <div className="tarjeta">
              <h4>Ensalada de Camarón</h4>
              <p>Mezcla de camarón cocido con ensalada de legumbres.</p>
              <span>$140.00 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Ensalada de Pollo</h4>
              <p>Suprema de pollo con ensalada de legumbres.</p>
              <span>$120.00 pesos</span>
            </div>
            <div className="tarjeta">
              <h4>Fetuccini Alfredo Natural </h4>
              <p>Pasta con base de crema y queso.</p>
              <span>$99.00 pesos</span>
            </div>
          </div>
          <div className="postres">
            <h3>Postres</h3>
            <div className="tarjeta">
              <p>Pay de manzana con nieve</p>
              <span>$75.00 pesos</span>
            </div>
            <div className="tarjeta">
              <p>Flan casero</p>
              <span>$55.00 pesos</span>
            </div>
            <div className="tarjeta">
              <p>Helado</p>
              <span>$35.00</span>
            </div>
          </div>
          <div className="bebida">
            <h3>Bebidas</h3>
            <div className="tarjeta">
              <p>Café Americano (1 refill)</p>
              <span>$40.00 pesos</span>
            </div>
            <div className="tarjeta">
              <p>Café Americano con leche</p>
              <span>$40.00 pesos</span>
            </div>
            <div className="tarjeta">
              <p>Malteada (vainilla o chocolate)</p>
              <span>$49.00 pesos</span>
            </div>
            <div className="tarjeta">
              <p>Té (manzanilla o negro)</p>
              <span>$30.00 pesos</span>
            </div>
            <div className="tarjeta">
              <p>Té helado</p>
              <span>$32.00</span>
            </div>
            <div className="tarjeta">
              <p>Agua fresca (jamaica, jazmín, uva, naranja)</p>
              <span>$35.00 pesos</span>
            </div>
            <div className="tarjeta">
              <p>Refresco</p>
              <span>$35.00 pesos</span>
            </div>
          </div>
            </section> */}
        </div>
     );
}

export default MainMenu;