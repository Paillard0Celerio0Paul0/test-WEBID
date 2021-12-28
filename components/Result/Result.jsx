import useSWR from "swr";

import styles from "../../styles/Home.module.css";
const getAge = (year) => {
  return new Date().getFullYear() - Math.floor(year);
};

const areSelectedUsers = (users) => {
  return users.length !== 0;
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export const Result = (props) => {
  const result = useSWR(
    areSelectedUsers(props.users)
      ? `https://infallible-tereshkova-717266.netlify.app/.netlify/functions/server/average?ids=${props.users}`
      : null,
    fetcher
  );

  if (props.users.length === 0) return "Aucun utilisateur séléctionné";
  if (result.error) return "une erreur s'est produite";
  if (!result.data) return "En chargement...";
  return (
    <span className={styles.resultLine}>
      {result.data.error
        ? result.data.error
        : `${getAge(result.data.average)} ans`}
    </span>
  );
};
