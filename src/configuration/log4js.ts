import {configure, getLogger} from 'log4js';

configure({
  appenders: {
      out: {
          type: 'stdout',
          layout: { 
              type: 'colored' 
          }
      }
  },
  categories: {default: {appenders: ['out'], level: 'all'}},
});

export const logger = getLogger("ifridman-servicio-template");
