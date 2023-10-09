import HomeButton from "../components/HomeButton";
import RevalidateButton from "../components/RevalidateButton";
import { getForecast } from "../utils/getForecast";

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export function generateMetadata({ params, searchParams }: Props) {
  return {
    title: `날씨 앱 - ${searchParams.name}`,
    description: `${searchParams.name} 날씨를 알려드립니다.`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const weatherResult = await getForecast(params.location);
  return (
    <>
      <h1>{searchParams.name}의 일주일 예보</h1>
      <ul>
        {weatherResult.forecast.forecastday.map(day => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <RevalidateButton tag={"forecast"} />
      <HomeButton />
    </>
  );
}
