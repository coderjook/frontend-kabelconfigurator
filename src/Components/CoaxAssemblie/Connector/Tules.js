import React, { useState, useEffect } from "react";
import { tules } from "../../../Data/TuleGroepData";
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
      <h3>kies de kleur van de tule:</h3>
      {tuleInfo.map((tule) =>
        tule.tulegroep === `${props.tulegroep}` ? (
          <>
            <div>
              <input
                type="radio"
                id={tule.artikelnummer}
                name={tule.typenummer}
                value={tule.typenummer}
                checked={props.tuleOrder === tule.typenummer}
                onChange={(e) => props.onChange(e.target.value)}
              />
              <label for={tule.typenummer}>{tule.typenummer}</label>
            </div>
          </>
        ) : null
      )}
    </div>
  );
}

export default Tules;
