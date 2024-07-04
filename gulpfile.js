const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// essa função retorna qualquer arquivo com a extensão scss
function styles() { 
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'})) // comprimir o estilo de saida dos nossos arquivos css
        .pipe(gulp.dest('./dist/css')); // enviar os arquivos css já comprimidos para uma pasta

    }
exports.default = styles;

// função watcher para observar e compilar o css toda vez que houver alteração
// para acessar exports.watch usar npm run build watch
exports.watch = function() {
    gulp.watch('./src/styles/*.scss' , gulp.parallel(styles)) // aqui é passado os arquivos que serão observados, colocar dentro da array o nome das funcoes que serão executadas
} 
