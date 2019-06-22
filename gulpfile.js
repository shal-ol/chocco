'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});
 
gulp.task('html,js:watch', function () {
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('./js/*.js', browserSync.reload); 
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.scss', gulp.series('sass'));
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('./js/*.js', browserSync.reload); 
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./dist",
          index: "index.html"
      }
  });
});


// gulp.task('watch', ['browserSync', 'sass'], function (){
//   gulp.watch('app/scss/**/*.scss', ['sass']); 
//   // Обновляем браузер при любых изменениях в HTML или JS
//   gulp.watch('app/*.html', browserSync.reload); 
//   gulp.watch('app/js/**/*.js', browserSync.reload); 
// });

gulp.task('default', gulp.parallel([
    'sass', 
    'sass:watch',
    'browser-sync'
]));

