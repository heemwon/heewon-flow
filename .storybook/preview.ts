import type { Preview } from "@storybook/nextjs-vite";

import "../packages/design-system/src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
