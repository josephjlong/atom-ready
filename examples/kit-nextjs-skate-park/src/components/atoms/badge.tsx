import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const BadgeAtom = createAtom(() => shadcnComponents.Badge, {
  name: "Badge",
  ...shadcnComponentDefinitions.Badge,
  props: shadcnComponentDefinitions.Badge.props.shape,
});

export { BadgeAtom };
