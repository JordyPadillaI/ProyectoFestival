//Se importan las funciones
const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Funciones
function css() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('./build/css'))
}

//Automatizar el refresh a los archivos para su compilación
function watchArchivos() {
    watch('src/scss/**/*.scss', css); //watch('ruta de archivo', funcionAEjecutar). "**/*.scss" Todos los archivos con esa extensión en todas las carpetas
}

//Se definine con que nombre se hará llamar a la función usando "gulp nombreFuncion"
exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;








//Ayuda a compilar tareas en serie, separando por coma la función
//Con parallel se ejecutan las funciones al mismo tiempo