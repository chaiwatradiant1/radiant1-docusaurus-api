import {Config} from '@docusaurus/types';
import {themes} from 'prism-react-renderer';

const config: Config = {
  title: 'Radiant1 PMS API',
  tagline: 'Complete API integration guide for Property Management Systems',
  favicon: 'img/favicon.ico',

  url: 'https://chaiwatradiant1.github.io',
  baseUrl: '/radiant1-docusaurus-api/',

  organizationName: 'chaiwatradiant1',
  projectName: 'radiant1-pms-api-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/chaiwatradiant1/radiant1-pms-api-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Radiant1 PMS API',
      logo: {
        alt: 'Radiant1 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/api/overview',
          label: 'API Reference',
          position: 'left'
        },
        {
          href: 'https://github.com/chaiwatradiant1/radiant1-pms-api-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/api/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/chaiwatradiant1/radiant1-pms-api-docs',
            },
            {
              label: 'API Support',
              href: 'mailto:api-support@radiant1.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Status Page',
              href: 'https://status.radiant1.com',
            },
            {
              label: 'Download Documentation',
              href: '/files/radiant1-pms-api-documentation.zip',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Radiant1. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.vsDark,
      darkTheme: themes.vsDark,
      additionalLanguages: ['json', 'bash', 'powershell'],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: './api-sidebars.ts',
      },
    ],
  ],
};

export default config;