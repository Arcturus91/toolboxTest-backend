const axios = require("axios");
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
        console.log(response.data)
      res.status(200).json(response.data); //{"files":["test1.csv","test2.csv","test3.csv","test4.csv","test5.csv","test6.csv","test9.csv"]}
    })
    .catch((err) => console.log(err));
};

exports.getData = (req, res, next) => {
  axios
    .get("https://echo-serv.tbxnet.com/v1/secret/file/test3.csv", headers)
    .then((response) => {
      console.log(response.data);

/* "file,text,number,hex\ntest3.csv,LdyKb\ntest3.csv,
VJmMvgPEam,9,78d1c07000420eddd833cdb811b1c3c5\ntest3.csv,
QWrRjTkoXQUu,632,a060c14205b2bf495cc0ad3e7ff07d74\ntest3.csv,
CSXAbfvOthWVJRec,1786,aec16c45f100a57eb942af94756d3e95" */

      res.status(200).json(response.data); 
    })
    .catch((err) => console.log(err));
};
