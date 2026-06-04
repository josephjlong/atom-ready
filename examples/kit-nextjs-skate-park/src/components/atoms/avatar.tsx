import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const AvatarAtom = createAtom(() => shadcnComponents.Avatar, {
  name: "Avatar",
  ...shadcnComponentDefinitions.Avatar,
  props: shadcnComponentDefinitions.Avatar.props.shape,
});

export { AvatarAtom };
