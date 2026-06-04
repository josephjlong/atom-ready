import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const HeadingAtom = createAtom(() => shadcnComponents.Heading, {
  name: "Heading",
  ...shadcnComponentDefinitions.Heading,
});

export { HeadingAtom };
