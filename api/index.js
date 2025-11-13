const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, max-age=0, s-maxage=0"
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");

  const html = fs.readFileSync(
    path.join(__dirname, "..", "index.html"),
    "utf8"
  );

  res.status(200).send(html);
};
