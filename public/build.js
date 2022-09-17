const wbox = require("workbox-build");

wbox.generateSW({
  cacheId: "aiAMA",
  globDirectory: "./",
  globPatterns: ["**/*.{scss, css, html, json, jpg, png, svg, js}"],
  globIgnores: ["node_modules/**/"],
  swDest: "sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(html|scss|css|json|jpg|png|svg|js)$/,
      handler: "CacheOnly", //from 'staleWhileRevalidate',
      options: {
        cacheName: "cache-3",
        expiration: {
          maxAgeSeconds: 604800,
        }, //7 dana
      },
    },
  ],
});
