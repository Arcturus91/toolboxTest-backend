const axios = require("axios");
const csvToJson = require("../utils/csvtojson");

const headers = {
  headers: {
    authorization: "Bearer aSuperSecretKey",
  },
};

//
exports.getFiles = async (req, res, next) => {
  try {
    const { data } = await axios.get(
      "https://echo-serv.tbxnet.com/v1/secret/files",
      headers
    );
    const titlesArray = data.files;

    const filesDetailArray = await Promise.all(
      titlesArray.map(async (titles) => {
        try {
          const { data } = await axios.get(
            `https://echo-serv.tbxnet.com/v1/secret/file/${titles}`,
            headers
          );
          csvData = data;
          let jsonArray = csvToJson(csvData);
          if (jsonArray.length > 0) {
            let apiResponse = {};
            apiResponse["file"] = `${titles}`;
            apiResponse["lines"] = jsonArray;
            return apiResponse;
          }
        } catch (err) {
          console.log("iteration axios error: ", err);
        }
      })
    );

    const filesFormatted = filesDetailArray.filter((item) => {
      return item !== undefined;
    });

    res.status(200).json(filesFormatted);
    console.log(filesFormatted);
  } catch (err) {
    console.log("files request error: ", err);
  }
};

exports.getData = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(
      `https://echo-serv.tbxnet.com/v1/secret/file/${id}.csv`,
      headers
    );
    csvData = data;
    let jsonArray = csvToJson(csvData);
    let apiResponse = {};
    apiResponse["file"] = `${id}.csv`;
    apiResponse["lines"] = jsonArray;
    res.status(200).json(apiResponse);
  } catch (err) {
    res.status(err.response.status).json(err.response.statusText);
  }
};
