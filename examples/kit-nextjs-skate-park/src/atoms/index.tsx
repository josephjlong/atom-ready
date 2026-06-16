import { z } from "zod";
import {
  defineAtomsCatalog,
  defineAtomsRegistry,
  useBoundProp,
} from "@sitecore-content-sdk/nextjs";

export const catalog = defineAtomsCatalog({
  version: "1.0.1",
  components: {
    Container: {
      version: "1.0.0",
      props: z.object({}),
      description: "A generic layout container",
      slots: ["default"],
    },
    InputField: {
      version: "1.0.0",
      props: z.object({
        label: z.string().optional(),
        value: z.string().optional(),
        placeholder: z.string().optional(),
      }),
      description: "A text input with two-way state binding via $bindState",
    },
    Button: {
      version: "1.0.0",
      props: z.object({
        label: z.string(),
      }),
      description: "A button that emits a press event on click",
    },
    ResultField: {
      version: "1.0.0",
      props: z.object({
        label: z.string().optional(),
        value: z.string().optional(),
      }),
      description: "A read-only field that displays a value from state",
    },
  },
  actions: {
    toUppercase: {
      params: z.object({ text: z.string().optional() }),
      description:
        "Converts text to uppercase and stores it in the result state",
    },
  },
});

export const registry = defineAtomsRegistry(catalog, {
  components: {
    Container: ({ children }) => <div>{children}</div>,
    InputField: ({ props, bindings }) => {
      const [value, setValue] = useBoundProp<string>(
        props.value,
        bindings?.value,
      );
      return (
        <div>
          {props.label && <label>{props.label}</label>}
          <input
            type="text"
            value={value ?? ""}
            placeholder={props.placeholder ?? ""}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      );
    },
    Button: ({ props, emit }) => (
      <button onClick={() => emit("press")}>{props.label}</button>
    ),
    ResultField: ({ props }) => (
      <div>
        {props.label && <label>{props.label}</label>}
        <input type="text" readOnly value={props.value ?? ""} />
      </div>
    ),
  },
  actions: {
    toUppercase: async (params, setState) => {
      setState((prev) => ({
        ...prev,
        result: (params?.text ?? "").toUpperCase(),
      }));
    },
  },
});
