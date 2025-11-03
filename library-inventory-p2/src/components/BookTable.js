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
        {books.map((book) => (
          <tr key={book.id}>
            <td>
              <img
                src={book.image}
                alt={book.title}
                className="img-thumbnail"
                style={{ width: "100px" }}
              />
            </td>
            <td>{book.title}</td>
            <td>{book.description}</td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => startEdit(book)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeBook(book.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
