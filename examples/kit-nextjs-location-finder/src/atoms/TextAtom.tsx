import { Text } from '@sitecore-content-sdk/nextjs';
import type { TextField } from '@sitecore-content-sdk/nextjs';

export const TextAtom = ({ props }: { props: { text: TextField } }) => {
  const { text } = props;

  return (
    <>
      <Text field={text} editable={true} />
    </>
  );
};
