import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, atque quis sapiente saepe optio minus ab dolorum pariatur obcaecati eos sunt delectus id, enim debitis dolorem autem tempora! Molestias consequatur sint animi, laboriosam doloremque quia beatae, atque quibusdam nobis reprehenderit architecto repellendus cupiditate sit. Fugiat maxime nobis dolorem provident error.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, atque quis sapiente saepe optio minus ab dolorum pariatur obcaecati eos sunt delectus id, enim debitis dolorem autem tempora! Molestias consequatur sint animi, laboriosam doloremque quia beatae, atque quibusdam nobis reprehenderit architecto repellendus cupiditate sit. Fugiat maxime nobis dolorem provident error.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, atque quis sapiente saepe optio minus ab dolorum pariatur obcaecati eos sunt delectus id, enim debitis dolorem autem tempora! Molestias consequatur sint animi, laboriosam doloremque quia beatae, atque quibusdam nobis reprehenderit architecto repellendus cupiditate sit. Fugiat maxime nobis dolorem provident error.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
