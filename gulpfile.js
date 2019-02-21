let gulp = require("gulp");
let shell = require("gulp-shell");
const mocha = require("gulp-mocha");

gulp.task('hello', shell.task("cd basesDeDatos && npm run test:debug"));
