import { useState, useEffect } from "react";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  // Cargar libros guardados al iniciar
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(savedBooks);
  }, []);

  // Guardar libros cada vez que cambien
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]); // asignamos un id único
  };

  const removeBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const startEdit = (book) => {
    setEditingBook(book);
  };

  const editBook = (updatedBook) => {
    setBooks(
      books.map((b) => (b.id === updatedBook.id ? updatedBook : b))
    );
    setEditingBook(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="titulo-fondo">Inventario de Libros</h1>

      <BookForm
        addBook={addBook}
        editBook={editBook}
        editingBook={editingBook}
      />

      <BookTable
        books={books}
        removeBook={removeBook}
        startEdit={startEdit}
      />
    </div>
  );
}
