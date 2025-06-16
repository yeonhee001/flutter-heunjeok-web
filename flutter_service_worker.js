'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b655b050b0b7494621bf780c0658303d",
"assets/AssetManifest.bin.json": "a5f68fea11a08b493169c8dacb124dec",
"assets/AssetManifest.json": "a8e1aa693b6014f92475486f74609e98",
"assets/assets/back.svg": "b9d4fbf41f6455ed0e3a37045c4a6a8c",
"assets/assets/book_grey.svg": "6ba02327d1a8da9b3f09e738aadb285c",
"assets/assets/figma.svg": "34b93f5a433bcaff74595664831a0e56",
"assets/assets/fonts/%25EC%2598%25A8%25EA%25B8%2580%25EC%259E%258E%2520%25EB%25A5%2598%25EB%25A5%2598%25EC%25B2%25B4.ttf": "096483a75f73b51cdca24680f8d925e1",
"assets/assets/fonts/SUITE-Light.ttf": "c5597f8dc52afb039a9aee9448615769",
"assets/assets/fonts/SUITE-Regular.ttf": "9dbbcecb7c8d446855c29e610b537f38",
"assets/assets/fonts/SUITE-SemiBold.ttf": "91ee14c1884d0439e089ef2d64b715b0",
"assets/assets/git.svg": "c3b58cd9e8c8864f1f85eb239d336085",
"assets/assets/home_grey.svg": "f436dfb080dbd299d30ada703525c4a3",
"assets/assets/image.jpg": "0ee65ac37713031130416e074c825a62",
"assets/assets/loading_green.gif": "ebd9d1d9ef14c88b47d8da07ee837006",
"assets/assets/logo.svg": "6d16feab13e59f29e00eb4d29367ba03",
"assets/assets/nobook.svg": "53bc0881117969605089a0daaba91efb",
"assets/assets/noimage.png": "317e86afa9b6b643035eecf2b256be68",
"assets/assets/nolist.png": "405a2b521c9fd998335d64fd2586dd63",
"assets/assets/nowrite.svg": "429f042d74c3d7a54a7a6f73629e3e2d",
"assets/assets/quotes_01.svg": "9c347de1e3b944dbffe52add001f1f64",
"assets/assets/quotes_02.svg": "ad3f22fdebdc0dffcb617c5ebbf70568",
"assets/assets/recycle.svg": "b0970ab98fb805500e5d46df843b6c40",
"assets/assets/search_grey.svg": "ff402ef93b691cfe3b9cbab0171d442b",
"assets/assets/search_white.svg": "d4ddff421a97cad2b40906050af7829c",
"assets/assets/splash.png": "4a63eb589863acf3a119462739396390",
"assets/assets/vercel.svg": "f6afa01d29260011d32b230a50938c86",
"assets/FontManifest.json": "0ae4be28fcb0e959a2e32a4849a8079b",
"assets/fonts/MaterialIcons-Regular.otf": "53e4aad19049d1f0f14b94018bfcae9f",
"assets/NOTICES": "468624f33f68f5cb7d5d6ba79a3cccfc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "cf9eeaaa01c122b88f068aeaa1cf4836",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ea77de1ac9f1a141fffbc1206890f020",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a4054f328c48140acf03f5633f65d10",
"/": "4a4054f328c48140acf03f5633f65d10",
"main.dart.js": "98346d7c65afd1022c99bbd2ff682bff",
"manifest.json": "a3c9d70de80600b742b01569dbfd5a37",
"version.json": "46df9ec39829d1ab316af4cc54b10881"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
