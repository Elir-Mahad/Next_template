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
        <h1>Next.js Template</h1>
        <ol>
          <li>Styled components</li>
          <li>Dark mode and light mode themes</li>
          <li>
            Footer is positioned at the bottom regardless of the size of the
            content
          </li>
        </ol>
        <>
          <Card>
            <h2> voluptatum &rarr;</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
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
