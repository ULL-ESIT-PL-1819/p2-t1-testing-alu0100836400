let gulp = require("gulp");
let shell = require("gulp-shell");
const mocha = require("gulp-mocha");

gulp.task('test', shell.task("npm run test:debug"));
