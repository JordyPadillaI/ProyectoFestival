//Se importan las funciones
const {series, src, dest} = require('gulp');
const sass = require('gulp-dart-sass');

// Funciones
function css( ) {
   return src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('./build/css') )
}

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe( sass( {outputStyle: 'compressed'} ) )
        .pipe( dest('./build/css') )
}

//Se definine con que nombre se hará llamar a la función usando "gulp nombreFuncion"
exports.css = css;
exports.minificarcss = minificarcss;








//Ayuda a compilar tareas en serie, separando por coma la función
//Con parallel se ejecutan las funciones al mismo tiempo