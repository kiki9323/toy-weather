"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.log("----", error.message);
  }, []);

  return (
    <>
      <h1>에러 페이지</h1>
      <button onClick={() => reset()}>새로 고침</button>
    </>
  );
}
