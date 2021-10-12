import { forwardRef, MutableRefObject, useEffect } from 'react';

const Input = forwardRef<HTMLInputElement>((_, ref) => {
  useEffect(() => {
    if (ref) {
      const {current} = ref as MutableRefObject<HTMLInputElement>
      console.log(current);
    }
  }, [ref]);
  return (
    <>
      Input: <input ref={ref} />
    </>
  );
});
export default Input;
