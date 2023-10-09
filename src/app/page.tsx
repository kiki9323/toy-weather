import Link from "next/link";
import RevalidateButton from "./components/RevalidateButton";
import { getCurrentWeather } from "./utils/getCurrentWeather";
import style from "./style.module.css";

type Props = {
  params: {
    location: string;
  };
};

export default async function Home({ params }: Props) {
  const weatherResult = await getCurrentWeather("seoul");

  return (
    <>
      <h1>날씨 앱</h1>
      <ul className={style.list}>
        <li>
          <Link href="/seoul?name=서울">서울</Link>
          <span>{weatherResult.current.condition.text}</span>
        </li>
        <li>
          <Link href="/NYC?name=뉴욕">뉴욕</Link>
        </li>
        <li>
          <Link href="/london?name=런던">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={"weather"} />
    </>
  );
}
