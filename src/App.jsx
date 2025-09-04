import { useState, useEffect } from "react";
import axios from "axios";

const actressUrl = "https://lanciweb.github.io/demo/api/actresses/";

function App() {
  const [actress, setActress] = useState([]);

  // chiamata AJAX
  useEffect(() => {
    axios.get(actressUrl).then((resp) => {
      setActress(resp.data)
    });
  }, []);

  return (
    <>
      <div className="containe">
        <div className="row">
          <div className="col-12">
            <h1>Lista Attrici</h1>
          </div>
          <div className="col-12-col-md-4">
            Nome Anno Nascita Nazionalità Biografia Immagine Riconoscimenti
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
