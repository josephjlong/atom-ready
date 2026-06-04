import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const SeparatorAtom = createAtom(() => shadcnComponents.Separator, {
  name: "Separator",
  ...shadcnComponentDefinitions.Separator,
  props: shadcnComponentDefinitions.Separator.props.shape,
});

export { SeparatorAtom };
