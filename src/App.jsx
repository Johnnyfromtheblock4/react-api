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
      <div className="row">
        <div className="col-12">
          <h1>Attrici Lista</h1>
        </div>
        {actresses.map((actress) => {
          return (
            <div className="col-12 col-md-4">
              <div className="card">
                {actress.name} {actress.birth_year} {actress.nationality}
                {actress.biography} {actress.image} {actress.awards}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
