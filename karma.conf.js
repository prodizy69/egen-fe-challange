/**
 * Created by Sateesh on 10/01/2016.
 */
module.exports = function(config){
    config.set({
        //  root path location that will be used to resolve all relative paths in files and exclude sections, should be the root of your project
        basePath : '.',

        // files to include, ordered by dependencies
        files : [
            // include relevant Angular files and libs
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            // include js files
            './js/app.js',

            // include unit test specs
            './test/*.spec.js'
        ],
        // files to exclude
        exclude : [],

        // karma has its own autoWatch feature but Grunt watch can also do this
        autoWatch : false,

        // testing framework, be sure to install the karma plugin
        frameworks: ['jasmine'],

        // browsers to test against, be sure to install the correct karma browser launcher plugin
        browsers : ['Chrome'],

        // progress is the default reporter
        reporters: ['progress','html'],
        htmlReporter: {
        outputDir: 'karma_html', // where to put the reports
            templatePath: null, // set if you moved jasmine_template.html
            focusOnFailures: true, // reports show failures on start
            namedFiles: false, // name files instead of creating sub-directories
            pageTitle: null, // page title for reports; browser info by default
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
            reportName: 'report-summary-filename', // report summary filename; browser info by default


            // experimental
            preserveDescribeNesting: false, // folded suites stay folded
            foldAll: false, // reports start folded (only with preserveDescribeNesting)
    },

        // map of preprocessors that is used mostly for plugins
        preprocessors: {

        },
        plugins:['karma-chrome-launcher','karma-jasmine','karma-html-reporter']


    })}