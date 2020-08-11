'use strict';

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps"),
  concat = require('gulp-concat'),
  // uglify = require('gulp-uglify'),
  uglify = require('gulp-uglify-es').default,
  // TerserPlugin = require('terser-webpack-plugin'),
  // minify = require("gulp-babel-minify")
  browserSync = require("browser-sync").create();

sass.compiler = require('node-sass');

const files = {
  scss: 'app/scss/**',
  css: 'app/css/',
  js: 'app/js/**',
}

function style() {
  return gulp
    .src(files.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: '/app/scss'
    }))
    .pipe(gulp.dest(files.css))
    .pipe(browserSync.stream({ match: '**/*.css' }));
}

function scripts() {
  return gulp
    .src(files.js)
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js')
    );
}

function reload() {
  browserSync.reload();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "app"
    },

    open: false
  });

  gulp.watch(files.scss).on('change', style);
  gulp.watch("app/*.html").on('change', reload);
}

exports.watch = watch
exports.style = style;
exports.scripts = scripts;

var build = gulp.parallel(style, scripts, watch);

gulp.task('build', build);
gulp.task('default', build);

