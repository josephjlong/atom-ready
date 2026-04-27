import { createAtom, withPropMeta } from "@sitecore-content-sdk/nextjs";
import z from "zod";

const Button = () => {
  return <div>Button</div>;
};

const ButtonAtom = createAtom(Button, {
  name: "Button",
  description: "A button component",
  props: {
    variant: z
      .enum(["default", "secondary", "outline", "ghost", "destructive", "link"])
      .optional()
      .default("default"),
    size: z
      .enum(["default", "sm", "lg", "icon"])
      .optional()
      .default("default")
      .describe("The size of the button"),
    className: withPropMeta(z.string().optional(), { control: "text" }),
  },
  allowedChildren: ["text"],
});

export { ButtonAtom };
