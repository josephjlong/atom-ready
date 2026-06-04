import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const CollapsibleAtom = createAtom(() => shadcnComponents.Collapsible, {
  name: "Collapsible",
  ...shadcnComponentDefinitions.Collapsible,
  props: shadcnComponentDefinitions.Collapsible.props.shape,
});

export { CollapsibleAtom };
