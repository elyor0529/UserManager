require.config({
    baseurl: '/scripts/',
    paths: {
        'angular': '../assets/js/angular',
        'ngStorage': '../assets/js/ngStorage',
        'ngCookies': '../assets/js/angular-cookies',
        'ui-router': '../assets/js/angular-ui-router',
        'jquery': '../assets/js/jquery-1.10.2',
        'bootstrap': '../assets/js/bootstrap',
        'service': 'services/userService',
        'userCtrl': "controllers/userCtrl"
    },
    shim: {
        ngStorage: {
            deps: ['angular'],
            exports: 'angular'
        },
        ngCookies: {
            deps: ['angular'],
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular'],
            exports: 'angular'
        },
        angular: {
            exports: 'angular'
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    deps: ['app']
});

require([
    "app", 
    "bootstrap",
    "userCtrl"
],

    function (app) {

        //bootstrapping app
        app.init();
    }
);