import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ce2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '3c6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5f1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '913'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '522'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'dae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '28d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '016'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c01'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '87d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1e0'),
            routes: [
              {
                path: '/docs/category/cli---tutorial',
                component: ComponentCreator('/docs/category/cli---tutorial', '5ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/desktop-application',
                component: ComponentCreator('/docs/category/desktop-application', '530'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/developer-options',
                component: ComponentCreator('/docs/tutorial-basics/developer-options', '5b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/general-options',
                component: ComponentCreator('/docs/tutorial-basics/general-options', 'a35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/introduction',
                component: ComponentCreator('/docs/tutorial-basics/introduction', '6a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/testing-commands',
                component: ComponentCreator('/docs/tutorial-basics/testing-commands', '477'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/functions',
                component: ComponentCreator('/docs/tutorial-extras/functions', '095'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/startup',
                component: ComponentCreator('/docs/tutorial-extras/startup', 'b99'),
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
    path: '/',
    component: ComponentCreator('/', '562'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
