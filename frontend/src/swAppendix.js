self.addEventListener('activate', e => {
  console.log('Injection successful');
});

self.addEventListener('push', e => {
  var options = {
    body: 'This notification was generated from a push!',
    icon: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2',
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore this new world',
        icon: 'images/checkmark.png',
      },
      {
        action: 'close',
        title: 'Close',
        icon: 'images/xmark.png',
      },
    ],
  };
  e.waitUntil(self.registration.showNotification('Hello world!', options));
});
