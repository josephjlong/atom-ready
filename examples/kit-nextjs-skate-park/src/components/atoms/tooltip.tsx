import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const TooltipAtom = createAtom(() => shadcnComponents.Tooltip, {
  name: "Tooltip",
  ...shadcnComponentDefinitions.Tooltip,
  props: shadcnComponentDefinitions.Tooltip.props.shape,
});

export { TooltipAtom };
