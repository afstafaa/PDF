const CACHE_NAME = 'pdf-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/styles.css',
    '/assets/app.js',
    '/manifest.json',
    '/pdfs/file1.pdf',
    '/pdfs/file2.pdf',
    '/pdfs/file3.pdf,
    '/pdfs/file4.pdf
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
