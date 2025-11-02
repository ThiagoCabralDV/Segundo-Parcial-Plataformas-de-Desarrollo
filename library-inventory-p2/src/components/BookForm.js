import { useState } from "react";

export default function BookForm({ addBook, editBook, editingBook }) {
  const [title, setTitle] = useState(editingBook?.title || "");
  const [description, setDescription] = useState(editingBook?.description || "");
  const [image, setImage] = useState(editingBook?.image || null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !image) return;

    const book = { title, description, image };
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
    const reader = new FileReader();
    reader.onload = (event) => setImage(event.target.result);
    if (file) reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label>Título del Libro</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Descripción del Libro</label>
        <textarea
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label>Imagen del Libro</label>
        <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
      </div>

      <button type="submit" className="btn btn-primary">
        {editingBook ? "Guardar Cambios" : "Agregar Libro"}
      </button>
    </form>
  );
}
