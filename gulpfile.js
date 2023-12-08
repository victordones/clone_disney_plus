const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')  //recupera os arquivos, coloca os arquivos no gulp
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')  //recupera os arquivos, coloca os arquivos no gulp
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}


exports.default = gulp.parallel(styles, images)
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //usar npm run build watch
}