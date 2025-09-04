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
                    <strong>Data di Nascita: {actress.birth_year}</strong>
                  </p>
                  <p>
                    <strong>Nazionalità: {actress.nationality}</strong>
                  </p>
                  <p>Biografia: {actress.biography} </p>
                  <p>Awards: {actress.awards}</p>
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
