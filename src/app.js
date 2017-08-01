const angular = require('angular');
const ngRoute = require('angular-route');

//component imports
const NavigationComponent = require('./components/navigation');
const HomeComponent = require('./components/home');
const LoginComponent = require('./components/login');
const SignupComponent = require('./components/signup');
const PostReaderComponent = require('./components/post-reader');
const PostEditorComponent = require('./components/post-editor');
const PostCreatorComponent = require('./components/post-creator');
const ProfileComponent = require('./components/profile');
const LogoutComponent = require('./components/logout');

//services
const PostService = require('./services/post.service');
const AuthService = require('./services/auth.service');

// configuration
const RoutesConfig = require('./config/routes');

angular.module('bloggo', [ ngRoute ])
      .config(RoutesConfig)
      .component('home', HomeComponent)
      .component('navigation', NavigationComponent)
      .component('login', LoginComponent)
      .component('signup', SignupComponent)
      .component('postReader', PostReaderComponent)
      .component('postEditor', PostEditorComponent)
      .component('postCreator', PostCreatorComponent)
      .component('profile', ProfileComponent)
      .component('logout', LogoutComponent)
      .factory('posts', PostService)
      .factory('auth', AuthService);
