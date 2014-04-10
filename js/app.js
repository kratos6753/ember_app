App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route('index');
  this.route('about');
  this.route('api');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
App.AboutRoute = Ember.Route.extend({
  model: function() {
  	return App.DEVELOPERS;
  }
});

App.DEVELOPERS=[{
	name:'chiru',
	post:'front-end developer',
	description:'worked hard to manage both design and code',
	phone:'9677165110',
	image:'img/chiru.png'
},{
	name:'Mr.x',
	post:'back-end developer',
	description:'word hard to manage database and code',
	phone:'8997789977',
	image:'img/Mr.x.png'
}];