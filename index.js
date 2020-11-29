const axios = require("axios");

axios("https://github.com/axios/axios").then((res) => {
  console.log(res);
});
