import { Text } from '@sitecore-content-sdk/nextjs';
import { useBoundProp } from '@sitecore-content-sdk/nextjs/atoms';
import type { TextField } from '@sitecore-content-sdk/nextjs';

type TextAtomProps = {
  props: { text: TextField | string | number | null | undefined };
  bindings?: Record<string, string>;
};

export const TextAtom = ({ props, bindings }: TextAtomProps) => {
  const [boundText] = useBoundProp<TextAtomProps['props']['text']>(
    props.text,
    bindings?.text,
  );
  const field: TextField =
    typeof boundText === 'object' && boundText !== null
      ? (boundText as TextField)
      : { value: boundText ?? '' };

  return (
    <>
      <Text field={field} editable={true} />
    </>
  );
};
