import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const TabsAtom = createAtom(() => shadcnComponents.Tabs, {
  name: "Tabs",
  ...shadcnComponentDefinitions.Tabs,
  props: shadcnComponentDefinitions.Tabs.props.shape,
});

export { TabsAtom };
