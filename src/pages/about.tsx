import Head from "next/head";

type PropsType = {
  info: string;
};

export default function About(props: PropsType) {
  return (
    <>
      <Head>
        <title>Next.js About</title>
        <meta name="description" content="about page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About Page</h1>
        <p>{props.info}</p>
      </main>
    </>
  );
}

// export async function getStaticProps() {
//   //await异步请求
//   return {
//     props: {
//       info: "请求来的数据",
//     },
//   };
// }

export async function getServerSideProps() {
  console.log("每次请求都会执行");

  return {
    props: {
      info: "请求来的数据 100",
    },
  };
}
