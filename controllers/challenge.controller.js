const axios = require("axios");
const csvToJson = require("../utils/csvtojson");

const headers = {
  headers: {
    authorization: "Bearer aSuperSecretKey",
  },
};

//
exports.getFiles = (req, res, next) => {
  axios
    .get("https://echo-serv.tbxnet.com/v1/secret/files", headers)
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((err) => console.log(err));
};

exports.getData = (req, res, next) => {
  const { id } = req.params;
  console.log(`https://echo-serv.tbxnet.com/v1/secret/file/${id}.csv`);
  axios
    .get(`https://echo-serv.tbxnet.com/v1/secret/file/${id}.csv`, headers)
    .then((response) => {
      csvData = response.data;
      let jsonArray = csvToJson(csvData);
      let apiResponse = {};

      apiResponse["file"] = `${id}.csv`;
      apiResponse["lines"] = jsonArray;
      console.log(apiResponse);

      res.status(200).json(apiResponse);
    })
    .catch((err) => {
      res.status(err.response.status).json(err.response.statusText);
    });
};
