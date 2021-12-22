import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { UserList, Result } from "../components";
import { useState } from "react";

export default function Home(props) {
  const [selectedUsers, setSelectedUsers] = useState([]);
  return (
    <div className={styles.container}>
      <Head>
        <title>My technical test</title>
        <meta name="description" content="Technical test for Web-ID agency" />
        <link rel="icon" href="/birthday-cake-cake-svgrepo-com.svg" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>AVERAGE AGE CALCULATOR</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <UserList setSelectedUsers={setSelectedUsers} users={props.data} />
          </div>
          <div className={styles.card}>
            <Image
              src="/birthday-cake-cake-svgrepo-com.svg"
              width={72}
              height={72}
            />
            <span>Âge moyen des personnes séléctionnées</span>
            <Result users={selectedUsers} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    "https://infallible-tereshkova-717266.netlify.app/.netlify/functions/server/users",
    {
      method: "GET",
    }
  );
  const result = await res.json();

  return {
    props: {
      data: result,
    },
  };
}
