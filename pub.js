const shell = require("shelljs");
const fs = require("fs");

const pkg = require("./package.json");

const start = async () => {
  try {
    fs.writeFileSync(
      "./themes/kong/package.json",
      JSON.stringify({
        name: pkg.name,
        version: pkg.version,
        repository: pkg.repository,
        author: pkg.author,
        license: pkg.license,
        files: pkg.files
      }),
      "utf8"
    );
  } catch (error) {
    shell.exit(1);
  }

  try {
    shell.exec("cd themes/kong && npm publish --access public");
  } catch (error) {
    shell.exit(1);
  }
};

start();
