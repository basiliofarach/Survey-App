self.addEventListener('push', event => {
  const data: event.data.json();
  self.registration.showNotification(data.title, {
    body: 'Notify by testing app',
    icon: 'https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png'
  });
});
