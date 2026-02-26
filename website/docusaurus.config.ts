import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Awesome Nothing',
  tagline: 'A curated list of everything related to Nothing & CMF by Nothing ecosystem',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://spike0en.github.io',
  baseUrl: '/awesome_nothing/',

  organizationName: 'spike0en',
  projectName: 'awesome_nothing',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/spike0en/awesome_nothing/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/banner.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Awesome Nothing',
      logo: {
        alt: 'Awesome Nothing Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/spike0en/awesome_nothing',
          position: 'right',
          className: 'header-github-stars',
          'aria-label': 'GitHub Stars',
          html: '<img src="https://img.shields.io/github/stars/spike0en/awesome_nothing?style=flat&logo=github&label=Stars&color=181818&labelColor=0a0a0a" alt="GitHub Stars" />',
        },
        {
          href: 'https://github.com/spike0en/awesome_nothing',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://nothing.community',
          label: 'Community',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'Devices', to: '/docs/devices'},
            {label: 'Apps', to: '/docs/apps'},
            {label: 'Projects', to: '/docs/projects'},
            {label: 'Official', to: '/docs/official'},
            {label: 'Photography', to: '/docs/photography'},
            {label: 'Guides', to: '/docs/guides'},
          ],
        },
        {
          title: 'Official',
          items: [
            {label: 'Nothing Community', href: 'https://nothing.community'},
            {label: 'Nothing GitHub', href: 'https://github.com/NothingOSS'},
            {label: 'Discord', href: 'https://discord.com/invite/nothingtech'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Nothing Archive', href: 'https://github.com/spike0en/nothing_archive'},
            {label: 'XDA Forums', href: 'https://xdaforums.com/c/nothing.12583/'},
            {label: 'Reddit', href: 'https://www.reddit.com/r/NothingTech'},
            {label: 'Telegram', href: 'https://t.me/s/nothing_archive'},
          ],
        },
      ],
      copyright: `CC0 1.0 Universal · Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
