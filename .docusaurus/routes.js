import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/radiant1-docusaurus-api/api',
    component: ComponentCreator('/radiant1-docusaurus-api/api', '44d'),
    routes: [
      {
        path: '/radiant1-docusaurus-api/api',
        component: ComponentCreator('/radiant1-docusaurus-api/api', 'af6'),
        routes: [
          {
            path: '/radiant1-docusaurus-api/api',
            component: ComponentCreator('/radiant1-docusaurus-api/api', '55a'),
            routes: [
              {
                path: '/radiant1-docusaurus-api/api/overview',
                component: ComponentCreator('/radiant1-docusaurus-api/api/overview', '925'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/radiant1-docusaurus-api/api/rest/bookings',
                component: ComponentCreator('/radiant1-docusaurus-api/api/rest/bookings', 'c44'),
                exact: true,
                sidebar: "apiSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/radiant1-docusaurus-api/docs',
    component: ComponentCreator('/radiant1-docusaurus-api/docs', 'bcd'),
    routes: [
      {
        path: '/radiant1-docusaurus-api/docs',
        component: ComponentCreator('/radiant1-docusaurus-api/docs', '7f4'),
        routes: [
          {
            path: '/radiant1-docusaurus-api/docs',
            component: ComponentCreator('/radiant1-docusaurus-api/docs', '2b0'),
            routes: [
              {
                path: '/radiant1-docusaurus-api/docs/',
                component: ComponentCreator('/radiant1-docusaurus-api/docs/', 'd3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/radiant1-docusaurus-api/docs/getting-started/quick-start',
                component: ComponentCreator('/radiant1-docusaurus-api/docs/getting-started/quick-start', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
