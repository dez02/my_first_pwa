console.log('Install first serviceWorker');

self.addEventListener('install', event => console.log('install event', event));

self.addEventListener('activate', event => console.log('active event', event));

self.addEventListener('fetch', event => console.log('fetch event sur url', event.request.url));

