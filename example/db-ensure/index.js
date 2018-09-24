const fetch = require('node-fetch');

let maxRetry = 5;

const {
  DB_MAKER_ADDRESS,
  DB_MAKER_DB_HOST,
  DB_MAKER_DB_NAME,
  DB_MAKER_DB_USER,
  DB_MAKER_DB_PASSWORD,
} = process.env;

(function ensureDb() {
  if (maxRetry-- > 0) {
    setTimeout(() => {
      fetch(
        `${DB_MAKER_ADDRESS}/mysql/${DB_MAKER_DB_HOST}/password/${DB_MAKER_DB_NAME}/${DB_MAKER_DB_USER}/${DB_MAKER_DB_PASSWORD}`
      )
        .then(response => response.json())
        .then(json => {
          console.info(json);
          process.exit(0);
        })
        .catch(error => {
          console.error(error);
          ensureDb();
        });
    }, 5000);
  } else {
    process.exit(1);
  }
})();
