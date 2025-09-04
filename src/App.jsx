import { useState, useEffect } from "react";
import axios from "axios";
import CastMemberCard from "./components/CastMemberCard";

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
              <CastMemberCard key={actress.id} castMember={actress}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
