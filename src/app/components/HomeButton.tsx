"use client";

import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  const handleGoHome = () => {
    router.push("/");
  };
  return <button onClick={handleGoHome}>홈으로</button>;
}
