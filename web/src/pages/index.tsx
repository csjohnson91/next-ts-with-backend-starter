import useApi from '@/services/api';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const { data, error } = useApi('hello');

  return (
    <div className={styles.container}>
      <Head>
        <title>TS/Next.js Starter</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>web/src/pages/index.tsx</code>
          and<code className={styles.code}>api/server.ts</code>
        </p>

        <p className={styles.description}>API Test: {data ? data : error}</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/csjohnson91/next-ts-with-backend-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          This template is available at
          <span className={styles.logo}>
            <Image
              src="/GitHub-Mark-120px-plus.png"
              alt="GitHub Logo"
              width={16}
              height={16}
            />
          </span>{' '}
          github.com/csjohnson91/next-ts-with-backend-starter
        </a>
      </footer>
    </div>
  );
}
