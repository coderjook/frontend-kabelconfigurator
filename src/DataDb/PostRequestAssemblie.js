import axios from "axios";

export async function makePostRequestAssemblie(params) {
  //   const params = {
  //     id_assemblie: uuidv4(),
  //     artnr_kabel: 1234,
  //   };

  let res = await axios.post(
    "http://localhost:8080/api/kabelconfigurator/assemblie",
    params
  );

  console.log(res.data);
}

export async function makeDeleteRequestAssemblie(params) {
  let res = await axios.delete(
    "http://localhost:8080/api/kabelconfigurator/assemblie",
    params
  );

  console.log(res.data);
}
