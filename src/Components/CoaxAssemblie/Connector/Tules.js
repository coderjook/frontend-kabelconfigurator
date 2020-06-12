import React from "react";
import { useFetch } from "../../../Hooks/useFetch";

function Tules(props) {
  const tuleInfo = useFetch(
    "http://localhost:8080/api/kabelconfigurator/tulegroep",
    []
  );

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
