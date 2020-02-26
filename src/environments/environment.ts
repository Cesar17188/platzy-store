// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyAOFYI8oWQhF2K8jI_LlLUndxmLV_uRmlI',
    authDomain: 'platzy-s.firebaseapp.com',
    databaseURL: 'https://platzy-s.firebaseio.com',
    projectId: 'platzy-s',
    storageBucket: 'platzy-s.appspot.com',
    messagingSenderId: '920752352214',
    appId: '1:920752352214:web:8d29f5d4b3beb8ff8bd277'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
