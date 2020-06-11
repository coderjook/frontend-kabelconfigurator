import React, { useState, useEffect } from "react";
// import { tules } from "../../../Data/TuleGroepData";
import axios from "axios";

function Tules(props) {
  const [tuleInfo, setTuleInfo] = useState([]);
  const fetchTuleInfo = () => {
    axios
      .get("http://localhost:8080/api/kabelconfigurator/tulegroep")
      .then((res) => {
        console.log(res);
        const data = res.data;
        setTuleInfo(data);
      });
  };

  useEffect(() => {
    fetchTuleInfo();
  }, []);

  return (
    <div>
      <h3>Kies de kleur van de tule:</h3>
      {tuleInfo.map((tule) =>
        tule.tulegroep === `${props.tulegroep}` ? (
          <>
            <div>
              <input
                type="radio"
                id={tule.artikelnummer}
                name={tule.artikelnummer}
                value={tule.artikelnummer}
                checked={props.tuleOrder === tule.artikelnummer}
                onChange={(e) => props.onChange(e.target.value)}
              />
              <label for={tule.artikelnummer}>{tule.typenummer}</label>
            </div>
          </>
        ) : null
      )}
    </div>
  );
}

export default Tules;
