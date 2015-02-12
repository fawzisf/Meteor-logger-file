Package.describe({
  name: 'ostrio:loggerfile',
  version: '0.0.1',
  summary: 'Simply put your logs into file within ostrio:logger package',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('coffeescript', ['client', 'server']);
  api.use('meteorhacks:npm@1.2.2');
  api.use('ostrio:logger@0.0.1', ['client', 'server']);
  api.addFiles('ostrio:loggerfile.coffee', ['client', 'server']);
});

Npm.depends({
  'fs-extra': '0.16.3'
});