/**
 * Service Worker for TwinRally PWA
 *
 * Handles caching, offline functionality, and background sync.
 * Enables the app to work offline and provides a native app-like experience.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

const CACHE_NAME = 'twinrally-v1';
const STATIC_CACHE = 'twinrally-static-v1';
const DYNAMIC_CACHE = 'twinrally-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/twinrally_icon-removebg-preview (1).png',
  '/twinrally_lg_01.png',
  '/twinrally_lg_08.png',
  '/twinrally_lg_10.png',
  '/twinrally_lg_11.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests (except images)
  if (!url.origin.includes(self.location.origin) && !request.url.match(/\.(png|jpg|jpeg|svg|gif|webp)$/)) {
    return;
  }

  // Handle API requests with network-first strategy
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return cached version if available
          return caches.match(request);
        })
    );
    return;
  }

  // Handle static assets with cache-first strategy
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        // Fetch from network and cache
        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response.ok) return response;

            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });

            return response;
          })
          .catch(() => {
            // Return offline fallback for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered:', event.tag);

  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications (for future implementation)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push received:', event);

  if (event.data) {
    const data = event.data.json();

    const options = {
      body: data.body || 'You have a new notification',
      icon: '/twinrally_icon-removebg-preview (1).png',
      badge: '/twinrally_icon-removebg-preview (1).png',
      vibrate: [200, 100, 200],
      data: {
        url: data.url || '/'
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title || 'TwinRally', options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked:', event);

  event.notification.close();

  event.waitUntil(
    self.clients.openWindow(event.notification.data.url || '/')
  );
});

// Background sync function
async function doBackgroundSync() {
  try {
    // Implement background sync logic here
    // This could sync offline actions like sending messages, updating profiles, etc.
    console.log('Service Worker: Performing background sync');

    // Example: Sync pending messages
    const pendingMessages = await getPendingMessages();
    if (pendingMessages.length > 0) {
      await syncMessages(pendingMessages);
    }

  } catch (error) {
    console.error('Service Worker: Background sync failed:', error);
  }
}

// Helper functions for background sync
async function getPendingMessages() {
  // Get messages from IndexedDB or similar storage
  return [];
}

async function syncMessages(messages) {
  // Send messages to server
  for (const message of messages) {
    try {
      await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      });
      // Mark as synced
    } catch (error) {
      console.error('Failed to sync message:', error);
    }
  }
}