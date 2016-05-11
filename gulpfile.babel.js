import gulp from 'gulp';
import sass from 'gulp-sass';
import watch from 'gulp-watch';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';
import projectPath from './projectpath.babel'

/**
 * webpack - react es6 compilation
 */
gulp.task('webpack', () => {
  return gulp.src(projectPath.js()+'index.js')
    .pipe(webpack( webpackConfig ))
    .pipe(gulp.dest(projectPath.BuildJs()));
});

/**
 * SASS compilation
 */
gulp.task('sass', () => {
    return gulp.src(projectPath.sass() + '*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            loadPath: __dirname + projectPath.src
        }))
        .pipe(gulp.dest(projectPath.buildCss()));
});

/**
 * Spying on changes
 */
gulp.task('spy', () =>  {
    gulp.watch( projectPath.sass() + '**/*.scss', ['sass']);
    gulp.watch( projectPath.js() + '**/*.js', ['webpack']);
});


// Default Task
gulp.task('default', ['spy']);
