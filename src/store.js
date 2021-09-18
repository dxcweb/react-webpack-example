import * as core from "dva-core";

const opts = {};

const app = core.create(opts);

// models
app.model(require("./models/test").default);

// start
app.start();

const store = app._store;

export default store;
