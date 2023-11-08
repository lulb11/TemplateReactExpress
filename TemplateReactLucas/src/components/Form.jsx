import { useState } from "react";

function Form() {
  const [array, setArray] = useState([
    {
      id: 1,
      name: "John",
    },
  ]);

  const [newObject, setNewObject] = useState({ name: "" });

  const [anotherId, setAnotherId] = useState(2); // Commencez avec la prochaine valeur d'ID disponible

  const newId = () => {
    setAnotherId(anotherId + 1);
    return anotherId;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newObject.name.trim() !== "") {
      setArray((prevArray) => [
        ...prevArray,
        { id: newId(), name: newObject.name },
      ]);
      setNewObject({ name: "" }); // Réinitialisez le champ de saisie après l'ajout
    }
  };

  const handleChange = (event) => {
    setNewObject({ name: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newArray">Votre nom</label>
        <input
          id="name"
          name="newArray"
          type="text"
          value={newObject.name}
          onChange={handleChange}
        />
        <button type="submit">Ajouter</button>
      </form>
      {array.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Form;
