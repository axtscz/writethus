/**
 * Created by Alex Cruz on 4/6/2017.
 */
var CACHE_NAME = 'dependencies-cache';

// Files required to make this app work offline
var REQUIRED_FILES = [
    "/assets/skeleton.min.css",
    "/assets/manifest.json"
];

self.addEventListener('install', function (event) {
    // Perform install step:  loading each required file into cache
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                // Add all offline dependencies to the cache
                return cache.addAll(REQUIRED_FILES);
            })
            .then(function () {
                // At this point everything has been cached
                return self.skipWaiting();
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
                // Cache hit - return the response from the cached version
                if (response) {
                    return response;
                }
                // Not in cache - return the result from the live server
                // `fetch` is essentially a "fallback"
                return fetch(event.request);
            }
        )
    );
});