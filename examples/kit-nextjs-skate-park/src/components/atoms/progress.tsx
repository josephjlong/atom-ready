import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const ProgressAtom = createAtom(() => shadcnComponents.Progress, {
  name: "Progress",
  ...shadcnComponentDefinitions.Progress,
  props: shadcnComponentDefinitions.Progress.props.shape,
});

export { ProgressAtom };
