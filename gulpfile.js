'use strict';
var protractorReport = require('gulp-protractor-cucumber-html-report');
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
        .src('features/cucumberFeatures.feature')
        .pipe(gulpProtractorAngular({
            'configFile': './config/config_cucumber.js',
            'debug': false,
            'autoStartStopServer': false
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', callback);
});

gulp.task('report', function (callback) {
    gulp
        .src('./results/result.json')
        .pipe(protractorReport({
            dest: './results/'
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', callback);
});