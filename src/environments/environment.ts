// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import 'zone.js/dist/zone-error';

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB-8Ox6K4-RGwJnU7SSgTDA_tHou32DE-E",
    authDomain: "rhemasoft-59a66.firebaseapp.com",
    databaseURL: "https://rhemasoft-59a66.firebaseio.com",
    projectId: "rhemasoft-59a66",
    storageBucket: "",
    messagingSenderId: "167123520494"
  }
  
};
