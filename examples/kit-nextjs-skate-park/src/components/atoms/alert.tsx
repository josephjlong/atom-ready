import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const AlertAtom = createAtom(() => shadcnComponents.Alert, {
  name: "Alert",
  ...shadcnComponentDefinitions.Alert,
  props: shadcnComponentDefinitions.Alert.props.shape,
});

export { AlertAtom };
