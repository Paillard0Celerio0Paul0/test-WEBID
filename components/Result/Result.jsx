import useSWR from "swr";

const getAge = (year) => {
  return 2022 - Math.floor(year);
};
export const Result = (props) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `https://infallible-tereshkova-717266.netlify.app/.netlify/functions/server/average?ids=${props.users}`,
    fetcher
  );
  if (props.users.length === 0) return "Aucun utilisateur séléctionné";
  if (error) return "une erreur s'est produite";
  if (!data) return "En chargement...";
  return <span>{data.error ? data.error : `${getAge(data.average)} ans`}</span>;
};
