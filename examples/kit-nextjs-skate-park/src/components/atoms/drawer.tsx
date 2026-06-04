import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const DrawerAtom = createAtom(() => shadcnComponents.Drawer, {
  name: "Drawer",
  ...shadcnComponentDefinitions.Drawer,
});

export { DrawerAtom };
