
function RouterConfig($routeProvider){
  $routeProvider
    .when('/', {
      template: '<home></home>'
    })
    .when('/signup', {
      template: '<signup></signup>'
    })
    .when('/login', {
      template: '<login></login>'
    })
    .when('/profile', {
      template: '<profile></profile>'
    })
    .when('/create', {
      template: '<post-creator></post-creator>'
    })
    .when('/edit/:postId', {
      template: '<post-editor></post-editor>'
    })
    .when('/read/:postId', {
      template: '<post-reader></post-reader>'
    })
    .otherwise({
      redirectTo: '/'
    });
}

RouterConfig.$inject = ['$routeProvider'];

module.exports = RouterConfig;
