const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Quick Code BOK',
  tagline: 'Snippets and references for tools that I use',
  url: 'https://quickcodebok.artenes.github.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'artenes',
  projectName: 'quickcodebok',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Artenes/quickcodebok/edit/main/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/Artenes/quickcodebok/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Quick Code BOK',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Code',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tools',
            items: [
              {
                label: 'Android',
                to: '/docs/android-model/general',
              },
              {
                label: 'Node',
                to: '/docs/node-model/general',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/artenes',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Artenes',
              },
              {
                label: 'CV',
                href: 'https://docs.google.com/document/d/1ka3EjYHqU4po85-HCVzaymd44E5e1PH1hI8j46_GmtY/edit?usp=sharing',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quick Code BOK. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
