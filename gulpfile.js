'use strict';

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps"),
  handlebars = require('gulp-compile-handlebars'),
  staticData = require('./data/static-data.json'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify-es').default,
  browserSync = require("browser-sync").create();

sass.compiler = require('node-sass');

const files = {
  scss: 'app/scss/**',
  css: 'app/css/',
  js: 'app/js/**',
}

function modularize() {
  const options = {
    batch: ['./app/partials'],
    helpers: {
      capitals: function (str) {
        return str.toUpperCase();
      }
    }
  }

  return gulp.src('app/handlebars/**.handlebars')
    .pipe(handlebars(staticData, options))
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(gulp.dest('app'));
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

function reload() {
  browserSync.reload();
}

function watch() {
  browserSync.init({
    open: false,
    server: {
      baseDir: "app",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },

    open: false
  });

  gulp.watch(files.scss).on('change', style);
  gulp.watch("data/*.json").on('change', modularize);
  gulp.watch("app/*").on('change', reload);
}

exports.watch = watch
exports.style = style;
// exports.scripts = scripts;

// var build = gulp.parallel(style, scripts, watch);
var build = gulp.parallel(modularize, style, watch);

gulp.task('build', build);
gulp.task('default', build);

