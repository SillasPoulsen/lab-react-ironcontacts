import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";

function App() {
  const [contact, setContact] = useState(contactsJSON.slice(0, 5));

  function randomCeleb() {
    const randomNumber = Math.floor(Math.random(5) * contactsJSON.length);
    const randomCe = contactsJSON[randomNumber];
    setContact([...contact, randomCe]);
  }

  function sortByName() {
    setContact([...contact].sort((a, b) => a.name.localeCompare(b.name)));
  }

  function sortByPopularity() {
    setContact([...contact].sort((a, b) => b.popularity - a.popularity));
  }

  function deleteCeleb(id) {
    setContact(
      [...contact].filter((celeb) => {
        return celeb.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <h1>Celebs</h1>
      <button onClick={randomCeleb}>Add a Random Celeb</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {contact.map((celeb) => {
          return (
            <tbody key={celeb.id}>
              <tr>
                <td>
                  <img src={celeb.pictureUrl} alt="imag" height="100"></img>
                </td>
                <td>{celeb.name}</td>
                <td>{celeb.popularity.toFixed()}</td>
                {celeb.wonOscar && <td>🏆</td>}
                {celeb.wonEmmy && <td>🏆</td>}
              </tr>
              <button onClick={() => deleteCeleb(celeb.id)}>Delete</button>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
