import { useState, useEffect } from "react";
import axios from "axios";

const actressesUrl = "https://lanciweb.github.io/demo/api/actresses/";

function App() {
  const [actresses, setActresses] = useState([]);

  // chiamata AJAX
  useEffect(() => {
    axios.get(actressesUrl).then((resp) => {
      setActresses(resp.data);
    });
  }, []);

  return (
    <div className="container my-5">
      <div className="row gy-3">
        <div className="col-12">
          <h1 className="text-center">Attrici Lista</h1>
        </div>
        {actresses.map((actress) => {
          return (
            <div className="col-12 col-md-4">
              <div className="card bg-dark text-white">
                <div className="card-header">
                  <h3 className="card-title text-center">{actress.name}</h3>
                </div>
                <div className="card-body text-center">
                  <img
                    src={actress.image}
                    alt={actress.name}
                    className="img-fluid"
                  />
                  <p>
                    <strong>Anno di nascita:</strong> {actress.birth_year}
                  </p>
                  {actress.death_year && (
                    <p>
                      <strong>Anno di morte:</strong> {actress.death_year}
                    </p>
                  )}
                  <p>
                    <strong>Nazionalità:</strong> {actress.nationality}
                  </p>
                  <p>
                    <strong>Biografia:</strong> {actress.biography}
                  </p>
                  <p>
                    <strong className="films">Film più famosi:</strong>
                  </p>
                  <ul className="list-unstyled films">
                    {actress.most_famous_movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                    ))}
                  </ul>
                  <p className="premi">
                    <strong>Premi:</strong> {actress.awards}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
