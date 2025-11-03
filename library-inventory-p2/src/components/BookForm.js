import { useState, useEffect } from "react";

export default function BookForm({ addBook, editBook, editingBook }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Cuando editingBook cambia → actualizar los campos
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setDescription(editingBook.description);
      setImage(editingBook.image);
    } else {
      setTitle("");
      setDescription("");
      setImage(null);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !image) return;

    const book = editingBook
      ? { ...editingBook, title, description, image }
      : { title, description, image, id: Date.now() };

    if (editingBook) {
      editBook(book);
    } else {
      addBook(book);
    }

    setTitle("");
    setDescription("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => setImage(event.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Título del Libro</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción del Libro</label>
        <textarea
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Imagen del Libro</label>
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        {editingBook ? "Guardar Cambios" : "Agregar Libro"}
      </button>
    </form>
  );
}
