// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Config } from './config.interface';

export const environment: Config = {
  production: false,
  apiEndpoints: {
    product: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://eq8dcnldy0.execute-api.eu-west-1.amazonaws.com/dev',
    bff: 'https://8lqt13zye6.execute-api.eu-west-1.amazonaws.com',
    cart: 'http://zwezh-cart-api-prod.eu-west-1.elasticbeanstalk.com/api',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: true,
  },
  token: 'Wndlemg6VEVTVF9QQVNTV09SRA==',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
