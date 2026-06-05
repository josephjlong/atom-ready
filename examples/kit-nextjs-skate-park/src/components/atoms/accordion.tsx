import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const AccordionAtom = createAtom(() => shadcnComponents.Accordion, {
  name: "Accordion",
  ...shadcnComponentDefinitions.Accordion,
  props: shadcnComponentDefinitions.Accordion.props.shape,
});

export { AccordionAtom };
