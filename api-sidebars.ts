import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const apiSidebars: SidebarsConfig = {
  apiSidebar: [
    'overview',
    {
      type: 'category',
      label: 'REST Endpoints',
      items: [
        'rest/bookings',
      ],
    },
  ],
};

export default apiSidebars;