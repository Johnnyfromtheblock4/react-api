import { useState, useEffect } from "react";
import axios from "axios";
import CastMemberCard from "./components/CastMemberCard";

const actressesUrl = "https://lanciweb.github.io/demo/api/actresses/";
const actorsUrl = "https://lanciweb.github.io/demo/api/actors/";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  // chiamata AJAX
  useEffect(() => {
    axios.get(actressesUrl).then((resp) => {
      setActresses(resp.data);
    });

    axios.get(actorsUrl).then((resp) => {
      setActors(resp.data);
    });
  }, []);

  return (
    <div className="container my-5">
      <div className="row gy-3">
        <div className="col-12">
          <h1 className="text-center">Lista Attori</h1>
        </div>
        <div className="col-12">
          <div className="row gy-3">
            <div className="col-12">
              <h2>Attrici</h2>
            </div>
            {actresses.map((actress) => (
              <div className="col-12 col-md-4" key={actress.id}>
                <CastMemberCard castMember={actress} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <div className="row gy-3">
            <div className="col-12">
              <h2>Attori</h2>
            </div>
            {actors.map((actor) => (
              <div className="col-12 col-md-4" key={actor.id}>
                <CastMemberCard castMember={actor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;