import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const LinkAtom = createAtom(() => shadcnComponents.Link, {
  name: "Link",
  ...shadcnComponentDefinitions.Link,
});

export { LinkAtom };
