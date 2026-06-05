import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const PaginationAtom = createAtom(() => shadcnComponents.Pagination, {
  name: "Pagination",
  ...shadcnComponentDefinitions.Pagination,
  props: shadcnComponentDefinitions.Pagination.props.shape,
});

export { PaginationAtom };
