import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/thesis-web/__docusaurus/debug',
    component: ComponentCreator('/thesis-web/__docusaurus/debug', 'fe8'),
    exact: true
  },
  {
    path: '/thesis-web/__docusaurus/debug/config',
    component: ComponentCreator('/thesis-web/__docusaurus/debug/config', 'cc4'),
    exact: true
  },
  {
    path: '/thesis-web/__docusaurus/debug/content',
    component: ComponentCreator('/thesis-web/__docusaurus/debug/content', 'a12'),
    exact: true
  },
  {
    path: '/thesis-web/__docusaurus/debug/globalData',
    component: ComponentCreator('/thesis-web/__docusaurus/debug/globalData', '18d'),
    exact: true
  },
  {
    path: '/thesis-web/__docusaurus/debug/metadata',
    component: ComponentCreator('/thesis-web/__docusaurus/debug/metadata', '55b'),
    exact: true
  },
  {
    path: '/thesis-web/__docusaurus/debug/registry',
    component: ComponentCreator('/thesis-web/__docusaurus/debug/registry', '182'),
    exact: true
  },
  {
    path: '/thesis-web/__docusaurus/debug/routes',
    component: ComponentCreator('/thesis-web/__docusaurus/debug/routes', 'db1'),
    exact: true
  },
  {
    path: '/thesis-web/blog',
    component: ComponentCreator('/thesis-web/blog', 'e2c'),
    exact: true
  },
  {
    path: '/thesis-web/blog/archive',
    component: ComponentCreator('/thesis-web/blog/archive', '8a8'),
    exact: true
  },
  {
    path: '/thesis-web/blog/first-blog-post',
    component: ComponentCreator('/thesis-web/blog/first-blog-post', '876'),
    exact: true
  },
  {
    path: '/thesis-web/blog/long-blog-post',
    component: ComponentCreator('/thesis-web/blog/long-blog-post', '695'),
    exact: true
  },
  {
    path: '/thesis-web/blog/mdx-blog-post',
    component: ComponentCreator('/thesis-web/blog/mdx-blog-post', 'cfd'),
    exact: true
  },
  {
    path: '/thesis-web/blog/tags',
    component: ComponentCreator('/thesis-web/blog/tags', '0c5'),
    exact: true
  },
  {
    path: '/thesis-web/blog/tags/docusaurus',
    component: ComponentCreator('/thesis-web/blog/tags/docusaurus', 'd3e'),
    exact: true
  },
  {
    path: '/thesis-web/blog/tags/facebook',
    component: ComponentCreator('/thesis-web/blog/tags/facebook', '492'),
    exact: true
  },
  {
    path: '/thesis-web/blog/tags/hello',
    component: ComponentCreator('/thesis-web/blog/tags/hello', '875'),
    exact: true
  },
  {
    path: '/thesis-web/blog/tags/hola',
    component: ComponentCreator('/thesis-web/blog/tags/hola', '8d2'),
    exact: true
  },
  {
    path: '/thesis-web/blog/welcome',
    component: ComponentCreator('/thesis-web/blog/welcome', 'b48'),
    exact: true
  },
  {
    path: '/thesis-web/markdown-page',
    component: ComponentCreator('/thesis-web/markdown-page', 'd0c'),
    exact: true
  },
  {
    path: '/thesis-web/docs',
    component: ComponentCreator('/thesis-web/docs', '3c7'),
    routes: [
      {
        path: '/thesis-web/docs/category/pesquisa',
        component: ComponentCreator('/thesis-web/docs/category/pesquisa', '097'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/thesis-web/docs/category/portefolio',
        component: ComponentCreator('/thesis-web/docs/category/portefolio', '8d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/thesis-web/docs/ficha_técnica',
        component: ComponentCreator('/thesis-web/docs/ficha_técnica', 'f3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/thesis-web/docs/guia_instalacao',
        component: ComponentCreator('/thesis-web/docs/guia_instalacao', 'c0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/thesis-web/docs/intro',
        component: ComponentCreator('/thesis-web/docs/intro', '036'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/thesis-web/docs/pesquisa/wireguard',
        component: ComponentCreator('/thesis-web/docs/pesquisa/wireguard', 'c1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/thesis-web/docs/portefolio/encenacao',
        component: ComponentCreator('/thesis-web/docs/portefolio/encenacao', '258'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/thesis-web/docs/portefolio/feira_emprego',
        component: ComponentCreator('/thesis-web/docs/portefolio/feira_emprego', 'd11'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/thesis-web/',
    component: ComponentCreator('/thesis-web/', 'f1e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
