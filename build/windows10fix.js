// hack for Ubuntu on Windows
try {
  require('os').networkInterfaces();
}
catch (e) {
  require('os').networkInterfaces = () => ({});
}

module.exports = {}