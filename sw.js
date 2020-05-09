const pwaCacheVersion = 'todo-static-v1';
const assets = [
	'/',
	'/sw.js',
	'/index.html',
	'/css/styles.css',
	'/js/ui.js',
	'/img/hippop.png',
	'/img/react.jpeg',
	'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
]

// Listen the Install Event On The ServiceWorker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(pwaCacheVersion).then(cache => {
			console.log('caching shell assets');
      cache.addAll(assets)
      .then(() => self.skipWaiting());
    })
  )
});

 
// Listen The Activate Event On The serviceWorkernnnn
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== pwaCache)
        .map(key => caches.delete(key))
      );
    })
  );
})

// CheckConnection
// self.addEventListener('fetch', event => {
//     if(!navigator.online) {
//         const headers = { headers: { 'Content-Type': 'text/html'} };
//         event.respondWith(new Response(`<h1>No internet connection.Try again later</h1v>`))
//     }
// });
//
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(cacheRes => {
			return cacheRes || fetch(event.request)
		})
	);
});

