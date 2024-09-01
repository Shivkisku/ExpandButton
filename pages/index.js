import Head from 'next/head';
import Button from '../components/Button';
import styles from '../components/CenteredContainer.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Button />
      </div>
    </div>
  );
}
