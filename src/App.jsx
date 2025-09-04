import { useEffect } from "react";
import axios from "axios";

const actressUrl = "https://lanciweb.github.io/demo/api/actresses/";

useEffect(() => {
  axios.get(actressUrl).then((resp) => {
    console.log(resp.data);
  });
}, []);

function App() {
  return <></>;
}

export default App;
