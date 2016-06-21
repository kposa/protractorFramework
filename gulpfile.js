'use strict';

var gulp = require('gulp');
var gulpProtractorAngular = require('gulp-angular-protractor');

// Setting up the test task 
gulp.task('default', function (callback) {
    gulp
        .src(['specs/*.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'config/config.js',
            'debug': false,
            'autoStartStopServer': false
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', callback);
});