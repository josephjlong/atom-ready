import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const DialogAtom = createAtom(() => shadcnComponents.Dialog, {
  name: "Dialog",
  ...shadcnComponentDefinitions.Dialog,
  props: shadcnComponentDefinitions.Dialog.props.shape,
});

export { DialogAtom };
