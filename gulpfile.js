var gulp = require("gulp")
var ts = require('gulp-typescript')

gulp.task("ts", [], function() {
  gulp.src("server/**/*.ts")
    .pipe(ts({
      moduleResolution: "node",
      noImplicitAny: false
        }))
    .pipe(gulp.dest("dist"))
})

gulp.task("ts-watch", [], function() {
  gulp.watch("server/**/*.ts", ["ts"])
})