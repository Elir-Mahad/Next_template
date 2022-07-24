import Head from "next/head";
import Image from "next/image";
import { Card, MainBox, FooterBox, FooterText, Logo } from "../styles/Styles";
//

export default function Home() {
  //
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainBox>
        <h1>Welcome to Next.js!</h1>

        <>
          <Card>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>
        </>
      </MainBox>

      <FooterBox>
        <FooterText>
          Powered by{" "}
          <Logo>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Logo>
        </FooterText>
      </FooterBox>
    </div>
  );
}