import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Spawntech Storybook',
    brandUrl: 'https://www.spawntech.io',
    brandImage: 'brand/logo-primary.webp',
    brandTarget: '_blank',
    colorPrimary: '#5C22A6',
    colorSecondary: '#8A2FF4',
    barTextColor: '#5C22A6',
  }),
  panelPosition: 'side',

  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  // isFullscreen: false,
  // showNav: true,
  // showPanel: true,
  // enableShortcuts: true,
  // showToolbar: true,
  // selectedPanel: undefined,
  // initialActive: 'sidebar',
  // toolbar: {
  //   title: { hidden: false },
  //   zoom: { hidden: false },
  //   eject: { hidden: false },
  //   copy: { hidden: false },
  //   fullscreen: { hidden: false },
  // },
});
