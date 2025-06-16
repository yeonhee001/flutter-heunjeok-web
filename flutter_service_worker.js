'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "13094b61fa12089dcd6b8fa0a178cd42",
".git/config": "dd335b790a952b907a4731a9e4a863bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ebb32caf6446d5b5b003a3e28f432399",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "108d2111af14161a0e2eb5956901f478",
".git/logs/refs/heads/main": "ae7733ff363241c94c3fb3738fed8c19",
".git/logs/refs/remotes/origin/main": "709238faeed23def7a5b664a9999a293",
".git/objects/08/31a349f5ff1235cb05f419bf6e24c634d75163": "34c6ea8c5cc4588bbbf796c8ddc0faa8",
".git/objects/09/1a49f1f72b85962e373b2607750bfc38cc9ef5": "8c4f906d7cf02c01ccfae4dfd83d8387",
".git/objects/0b/35dd657beca708b8595736fe0af2c04fc1e933": "264578fb6111a6506b5a06aabd2303df",
".git/objects/0c/6bb3b0ceada791466348bd607afb83eb795ef8": "5aa825aeb0ed522c8741bbd39b063cc5",
".git/objects/15/1621a802857effe672abb27c423bd94853eb1d": "ae1e63420b64bcc0002f8daa9cd921be",
".git/objects/18/2cdf056664120f82aa474b4313a8e35952f183": "7236ef35ec79cba7d57e113b2c502c27",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/d2ea1133d05b9c10b7b7659cbd320ea69a27d9": "8478dd6bae9cbf46b212d0de4a09b4a5",
".git/objects/21/70ee7776c1e3c21eff3e32fa70b191029a0ba3": "d7ec8092d61287880a5b37341926dbc9",
".git/objects/21/c1a4bc5710668960a6f55dd801799ebf5407be": "d68defb66700dc4915889482939308c2",
".git/objects/22/1cc050ef843ea6ba17ff66acff05fd83cdbb4b": "15a9f47a7b52ce4f23f71dba549e8fb1",
".git/objects/24/79ec9af9ef5ea840df1246a63b7439abc3a32b": "d5972fdbeae6673aa532e209bf04064c",
".git/objects/2a/aeeb8b31be1fbf919c0a2fffbfb9405c92315e": "bf54ef7d83c98fcc6cba32906fbdcb08",
".git/objects/2b/1b8f3ee99b3fb2450ab74b2b5d9679e88339a4": "c4421059b2315f5a48e1720f778b41cb",
".git/objects/2f/adcada56a744aad9fcfc25606511ea5f922d22": "547fa1934b840773439b9005422dc663",
".git/objects/3b/a8400f6ba17819bb270ae0ef210f78091f770f": "0b39dcae2087842cad063f488d40b98e",
".git/objects/3d/991b281d223830e87695c4c5ffbfa71ab107ea": "18a6ac9c6cf9e29ecc4f865584fdf022",
".git/objects/40/c4573f3e0d363cfe89bc6625faf05767e4dafb": "f0b757546aeaaad29b914d6882b185a2",
".git/objects/42/99430219b88c81e51b96f493ac193b660cf93d": "3f5174020d1c81afe0b94c887f22ae5d",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/51/5527780f7ac997df12e8c7805f255faca5fb74": "877dfeb18c12f89ee6b91dab3b053609",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5a/82e2730bf064018add517f10ddb963741a95b1": "b25587600cf61138420317b8b5bb3a61",
".git/objects/5d/644305a01955a71e62d51d2504233265946aac": "25a5481c10ed97ad170be18bb82e1493",
".git/objects/5f/8d9faf01b1ebe4968f26c8679b089a7ceab2ca": "69913e3f361cf49df9d7a9e3ed6e08bd",
".git/objects/63/753c18e051997c108747fc6b1a1d385211e1f4": "43b46311da57edb1666beb0a4d32c541",
".git/objects/63/b3e7d6e856e186780c277cfd96d13d53ad86b3": "d8129975ae471e6722688f579aded9a2",
".git/objects/6a/283b1f0927d0fae256a561dd023b6410ebc0b6": "b17423e4a8fe38a78f7ccf6bffb7ead1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/0a61297289282a4cd50667e138e17ba7fa38ba": "d133455a2858845b64e93cece2116e57",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7b/b656e7c0dfff7ab6c4120bbc7be70006a623de": "b41df18d755ed4c9264555993f6eb473",
".git/objects/7f/16fc8367e26690aafd86cde51c1176a9801ee5": "aeb8bce1f17728389dbd8cd772e05438",
".git/objects/80/94dd18b017461090054fa7890283e89902938f": "155177cc9be1a4f8d435d9991534bf80",
".git/objects/82/2a33a46f85fe6194bfd044629c4cb0ae6efd1f": "2d02370768aa0afafedf897949e36c64",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/9b/51e39fda43b95f119895114292d1fc8fccacd9": "021cad43bb56e06975ba8c490fb339bd",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a2/0c51ee8a030ebed35514cb26557d18212a03e7": "1c009471fc28d7a47b74a43bf5fe2e01",
".git/objects/a8/cfa6e0278108582a2eb4d994a7b5f21bc2b9a1": "b64aea961fb62e860b293a02ce59a6d4",
".git/objects/aa/14177393d780aa3a34959d666e0061e5239000": "d6b73f6929c528c7604deb3de9fb8489",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f3e6defa5196ad13cf1ba78013d7d6170733f7": "63f40267501ca0d9a405701ac8d637f0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/b2fa7836ab630fe532bf41b662def205c3cf77": "b7efa300ce082137ef9e2da7988dbd77",
".git/objects/bb/dc6391327528bf62e9ec214f5972a35a02696b": "f057ede076da4aa9455e6b666909ccf3",
".git/objects/c7/d124f95a4fc8770ec9d1dfe9a5a03e124a75e4": "4e134b7f6fcb389d5b55b909b18b9607",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cd/044cd221a557afd44898b0fc7f5e7946eb638f": "6e497a03c9b4300e47c175b59e184b12",
".git/objects/ce/c9f2183417d18591456d142ea77af0f4baca5f": "e5c5078015537a66eed825a6260b78fb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/685afb317d9203dbb8de04b3d3dd601e5f9121": "ff01c9a1c19c66e3c38400a5ff9694f7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/d3e3299289d7e0c4aac3a225a31c19c6434879": "c32fa542fbfa9af15a16f70413f3ff1a",
".git/objects/d9/b52e4001313e82b506c9d6a8733f79e311ff08": "861ffd07eddc45aaec2509e508044a7b",
".git/objects/db/1f2a7788b22f7ce77974c205436c1cc55e5304": "95c523b9323fc1277aa5b051343e99ac",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/67cd58caa864326e7b2838ce6c4339958a4e4a": "9cc443eaf6ffa41683ea9964cbe749c6",
".git/objects/dd/eb64462316ae8e0710b031111981f771f173cb": "ee9b3bf555b6b5146b4e039f3ac68e49",
".git/objects/df/98e5ceb83f24643b09d2faf15c5ab9ce5a98e8": "b07f3905b37071cbcc001ae33075722e",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/3e4a24805c8eaff224c212afe77a09063a863b": "44c07bf98b15ca44fb34c11ee65c84cf",
".git/objects/e5/20fb9c6db09f9b5c957c5bb1401cab06537e40": "edd7fd4f37c2fd6e981c82b019ba9395",
".git/objects/e6/48b4d41e42606188e52d93830eaaec7efc9ce0": "bdbbda80d11f5ced7400ae40968c1163",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/3c803aa7ca5b00708aa7cdd4ecb9184e2e1d48": "54c8c0ce6b7723642eb1fd56578badaa",
".git/objects/fb/16f585097909c200beb1205162a1e611176d2b": "9ed5f267d4174f3a58c0daafc203f045",
".git/objects/fc/04f78b330481c3c6ceba50bd0eecc6602529a0": "6a040e9b9304b4ad3750beb219472966",
".git/objects/fd/b56e9611a6ec63d27461b69c2489985be2bbb5": "9642b02433b48474d9f4bf47fc87f67f",
".git/refs/heads/main": "b7e473e28f916eb799c2bfcdd1900adb",
".git/refs/remotes/origin/main": "b7e473e28f916eb799c2bfcdd1900adb",
"assets/AssetManifest.bin": "b655b050b0b7494621bf780c0658303d",
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
"flutter_bootstrap.js": "a3b51dccbea98fe2d81bcd507cea50db",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a4054f328c48140acf03f5633f65d10",
"/": "4a4054f328c48140acf03f5633f65d10",
"main.dart.js": "98346d7c65afd1022c99bbd2ff682bff",
"manifest.json": "a3c9d70de80600b742b01569dbfd5a37",
"vercel.json": "bd4052c95f94d8c7e36c9944965335e1",
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
