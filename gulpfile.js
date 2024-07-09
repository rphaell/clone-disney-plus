const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemmin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function scripts () {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles() { 
    return gulp.src('./src/styles/*.scss') // essa função retorna qualquer arquivo com a extensão scss
        .pipe(sass({outputStyle: 'compressed'})) // comprimir o estilo de saida dos nossos arquivos css
        .pipe(gulp.dest('./dist/css')); // enviar os arquivos css já comprimidos para uma pasta

}

function images() { 
    return gulp.src('./src/images/**/*') // // essa função retorna qualquer imagem
        .pipe(imagemmin()) // comprimir as imagens dos nossos arquivos css
        .pipe(gulp.dest('./dist/images')); // enviar as imagens comprimidas para uma pasta

}

// aqui é para executar a funçao styles e função images
exports.default = gulp.parallel(styles, images, scripts);



// função watcher para observar e compilar o css toda vez que houver alteração
// para acessar exports.watch usar npm run build watch
exports.watch = function() {
    gulp.watch('./src/styles/*.scss' , gulp.parallel(styles)) // aqui é passado os arquivos que serão observados, colocar dentro da array o nome das funcoes que serão executadas
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
} 
