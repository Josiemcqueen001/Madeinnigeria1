// Runs every day (see netlify.toml). Cleans up old rejected applications and expired codes, and keeps the database awake.
const api = require("./api");
exports.handler = async () => api.maintenance();
