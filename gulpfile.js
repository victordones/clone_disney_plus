const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')  //recupera os arquivos, coloca os arquivos no gulp
    .pipe(sass({outputStyle: 'compressed'})) // pipe encadeia as ações, "cano" que emenda uma ação na outra. aqui é definida a ação de comprimir os arquivos que foram selecionados na linha superior
    .pipe(gulp.dest('./dist/css')); // aqui é definido o lugar de saída 
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