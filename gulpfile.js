
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  minifycss = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  clean = require('gulp-clean');

//css
gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

gulp.task('minifycss',function () {
  gulp.src('src/css/*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('css',['sass'],function () {
  gulp.start('minifycss');
});

//images
gulp.task('img',function () {
  gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('dist/img'));
});

//js
gulp.task('js',function () {
  gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('dist/js'));
});

//lib
gulp.task('lib',function () {
  gulp.src('src/lib/**/*.*')
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('clean',function () {
  return gulp.src(['dist/css','dist/js'])
    .pipe(clean());
});

//done
gulp.task('default',['clean'],function () {
  gulp.start('css','img','js','lib');
});
