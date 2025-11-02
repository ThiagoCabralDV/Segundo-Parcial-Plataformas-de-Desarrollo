export default function BookTable({ books, removeBook, startEdit }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td><img src={book.image} alt={book.title} className="img-thumbnail" style={{ width: "100px" }} /></td>
            <td>{book.title}</td>
            <td>{book.description}</td>
            <td>
              <button className="btn btn-warning btn-sm" onClick={() => startEdit(book)}>Editar</button>
              <button className="btn btn-danger btn-sm" onClick={() => removeBook(book.title)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
