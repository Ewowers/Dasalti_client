import { Map } from "./component/map";
import "antd/dist/antd.css";
import { useState } from "react";
export const App = () => {
  const [map, setMap] = useState(null);
  return <Map state={map} setState={setMap} />;
};
