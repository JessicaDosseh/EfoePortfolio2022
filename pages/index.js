import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SocialMedia from "../components/SocialMedia";
import EfoeDosseh from "../public/profile/EfoeDosseh.png";

const Content =
  "flex flex-row flex-wrap justify-center items-center p-5 md:space-x-20  ";

const ProfileContent = "w-5/12 md:w-4/12 lg:w-2/12 ";
const Icon = "rounded-full ";

const DescriptionContent = "w-full md:w-5/12 ";
const TitleCard = "m-2 p-5 ";
const card =
  "m-2 p-5 text-lg text-left border border-gray-300 rounded-lg hover:text-blue-500 ";
const Title = "text-xl md:text-4xl font-bold text-center md:text-left ";
const Subheading = "font-bold ";
const body = " ";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Efoe Dosseh</title>
        <meta name="description" content="Efoe Dosseh-Anyron Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={Content}>
          <div className={ProfileContent}>
            <Image src={EfoeDosseh} alt="Profile Picture" />
          </div>
          <div className={DescriptionContent}>
            <div className={TitleCard}>
              <h1 className={Title}>Efoe Dosseh-Anyron</h1>
            </div>

            <hr />
            <br />

            <div className={card}>
              <p className={Subheading}>Business Strategist</p>
              <br />
              <p className={body}>
                After working with ceveral organizations and millions of
                customers over the past 20 years, I wholeheartedly believe that
                empathy and the true consideration of people is the foundation
                of all good organizations. We are stronger together!
              </p>

              <br />

              <p className={"italic"}>What I do — </p>
              <p>
                Build and supporting organizational systems. Organize data
                analytics and apply business context to enhance processes and
                operations through cross-functional development.
              </p>
            </div>

            <SocialMedia />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Thank you for stopping by!
        </a>
      </footer>
    </div>
  );
}
