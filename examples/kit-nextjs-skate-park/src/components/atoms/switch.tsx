import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const SwitchAtom = createAtom(() => shadcnComponents.Switch, {
  name: "Switch",
  ...shadcnComponentDefinitions.Switch,
  props: shadcnComponentDefinitions.Switch.props.shape,
});

export { SwitchAtom };
