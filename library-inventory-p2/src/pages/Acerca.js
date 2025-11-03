// src/pages/Acerca.js
export default function Acerca() {
  return (
    <div className="container mt-4">
      <h1 className="titulo-fondo mb-4">Acerca de este Proyecto</h1>

      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Descripción del Proyecto</h5>
          <p className="card-text">
            Este proyecto es la versión en React.js del Trabajo Práctico 1.
            Permite gestionar un inventario de libros con funcionalidades de agregar, editar y eliminar libros,
            almacenando los datos en el Local Storage del navegador.
          </p>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Integrantes del Grupo</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Thiago Cabral</li>
          </ul>
          <p className="mt-3">
            La aplicación fue desarrollada para cumplir con la consigna del Parcial II
            utilizando React.js y Node.js.
          </p>
        </div>
      </div>
    </div>
  );
}