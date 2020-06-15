import React from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { tules } from "../../../Data/TuleGroepData";
// import Spinner from "../../../Utils/Spinner";

function Tules(props) {
  // const [data, isLoading, isError] = useFetch(
  //   "http://localhost:8080/api/kabelconfigurator/tulegroep",
  //   []
  // );

  // //check op errors en loading
  // if (isError) return <div>something went wrong</div>;
  // if (isLoading) return <Spinner />;

  return (
    <div>
      <h3>Kies de kleur van de tule:</h3>
      {tules.map((tule) =>
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
