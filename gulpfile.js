let gulp = require("gulp");
let shell = require("gulp-shell");
const mocha = require("gulp-mocha");

gulp.task("default", ["test"]);
gulp.task("test", () =>
	shell.task("cd basesDeDatos && npm run test:debug && cd ..")
);
