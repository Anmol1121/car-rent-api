module.exports = function(app) {
  if (app.get("env") === "production") {
    app.use(require("cors")());
    app.use(require("compression")());
  }
};
