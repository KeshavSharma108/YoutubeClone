import axios from "axios";

export const RootApi = async ({ apiUrl, payload, method }) => {
  let response = {};
  await axios({
    method,
    url: apiUrl,
    data: payload,
    headers: { "Content-Type": "application/json" },
    json: true,
  })
    .then((res) => {
      console.log("dataSuccess", res?.data);
      response = { response: res.data };
      console.log(" Success response", JSON.stringify(response));
    })
    .catch((error) => {
      console.error("Error", error?.response?.data);
      response = { response: error?.response?.data ?? { message: "" } };
    });
  console.log("response", response);
  return response;
};
