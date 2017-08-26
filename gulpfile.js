const gulp = require("gulp")
const ts = require('gulp-typescript')
const fs = require('fs')

const outputDir = './dist'





gulp.task("ts", [], function() {
  if(!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }

  gulp.src("server/**/*.ts")
    .pipe(ts({
      moduleResolution: "node",
      noImplicitAny: false
    }))
    .pipe(gulp.dest(outputDir))
})

gulp.task("ts-watch", [], function() {
  gulp.watch("server/**/*.ts", ["ts"])
})