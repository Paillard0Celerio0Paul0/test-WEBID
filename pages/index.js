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
        <h1 className={styles.title}>AVERAGE AGE CALCULATOR</h1>
        <div className={styles.grid}>
          <div className={styles.userList}>
            <UserList
              setSelectedUsers={setSelectedUsers}
              users={props.data}
              selectedUsers={selectedUsers}
            />
          </div>
          <div className={styles.result}>
            <Image
              src="/birthday-cake-cake-svgrepo-com.svg"
              width={72}
              height={72}
              alt="birthday cake logo"
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
