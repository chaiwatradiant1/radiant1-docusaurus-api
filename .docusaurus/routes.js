import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/radiant1-pms-api-docs/api',
    component: ComponentCreator('/radiant1-pms-api-docs/api', '373'),
    routes: [
      {
        path: '/radiant1-pms-api-docs/api',
        component: ComponentCreator('/radiant1-pms-api-docs/api', 'a20'),
        routes: [
          {
            path: '/radiant1-pms-api-docs/api',
            component: ComponentCreator('/radiant1-pms-api-docs/api', '320'),
            routes: [
              {
                path: '/radiant1-pms-api-docs/api/overview',
                component: ComponentCreator('/radiant1-pms-api-docs/api/overview', 'c51'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/radiant1-pms-api-docs/api/rest/bookings',
                component: ComponentCreator('/radiant1-pms-api-docs/api/rest/bookings', '3a0'),
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
    path: '/radiant1-pms-api-docs/docs',
    component: ComponentCreator('/radiant1-pms-api-docs/docs', 'c07'),
    routes: [
      {
        path: '/radiant1-pms-api-docs/docs',
        component: ComponentCreator('/radiant1-pms-api-docs/docs', 'b33'),
        routes: [
          {
            path: '/radiant1-pms-api-docs/docs',
            component: ComponentCreator('/radiant1-pms-api-docs/docs', '691'),
            routes: [
              {
                path: '/radiant1-pms-api-docs/docs/',
                component: ComponentCreator('/radiant1-pms-api-docs/docs/', '236'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/radiant1-pms-api-docs/docs/getting-started/quick-start',
                component: ComponentCreator('/radiant1-pms-api-docs/docs/getting-started/quick-start', '0a4'),
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
