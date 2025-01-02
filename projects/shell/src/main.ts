import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'dashboard': 'http://localhost:4201/remoteEntry.json',
  'social-details': 'http://localhost:4202/remoteEntry.json',
  'settings': 'http://localhost:4203/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
