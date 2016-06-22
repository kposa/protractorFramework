'use strict';

var gulp = require('gulp');
var gulpProtractorAngular = require('gulp-angular-protractor');

// Setting up the test task 
gulp.task('jasmine', function (callback) {
    gulp
        .src(['specs/*.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'config/config_jasmine.js',
            'debug': false,
            'autoStartStopServer': false
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', callback);
});

gulp.task('cucumber', function (callback) {
    gulp
        .src(['features/*.feature'])
        .pipe(gulpProtractorAngular({
            'configFile': 'config/config_cucumber.js',
            'debug': false,
            'autoStartStopServer': false
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', callback);
});