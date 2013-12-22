Package.describe({
  summary: 'Flash Notifications for Meteor'
});

Package.on_use(function (api) {
  api.use('templating', 'client');
  api.use('handlebars', 'client');
  api.use('minimongo', 'clients');
  api.use('mongo-livedata', 'clients');
  api.use('jquery', 'client');

  api.add_files('lib/flash.js', 'client');
  api.add_files('templates/flashes.js', 'client');
  api.add_files('templates/flashes.html', 'client');


  // for backward compat before Meteor linker changes
  if (typeof api.export !== 'undefined') {
    api.export('flash', 'client');
  }
});