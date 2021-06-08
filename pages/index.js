import Head from "next/head";
import Image from "next/image";

import style from "./style.module.css";

// import logo from '../public/static/assets/images/logo.png'

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>App</title>

        <meta property="og:title" content="Test Home page" />
        <meta
          property="og:description"
          content="Тест description для Home page"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://f0549953.xsph.ru" />
        <meta property="og:image" content="/static/tg2.jpg" />
        {/* <meta property="vk:image" content="/static/logo.jpg" /> */}
        <meta property="vk:image" content="/static/vk.jpg" />
        {/* <meta property="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/static/tw.jpg" />
        {/*  <meta property="twitter:image" content="static/tg2.jpg" />  */}
      </Head>
      <div className={style.images}>
        <div className={style.image}>
          <div className={style.title}>Вконтакте</div>
          <Image
            width="515"
            height="515"
            src="/static/assets/images/vk.jpg"
            alt="vk"
          />
        </div>
        <div className={style.image}>
          <div className={style.title}>Вконтакте 2</div>
          <Image
            width="800"
            height="400"
            src="/static/assets/images/vk2.jpg"
            alt="vk"
          />
        </div>
        <div className={style.image}>
          <div className={style.title}>Твиттер</div>
          <Image
            width="400"
            height="400"
            src="/static/assets/images/tw.jpg"
            alt="tw"
          />
        </div>
        <div className={style.image}>
          <div className={style.title}>Фейсбук</div>
          <Image
            width="325"
            height="325"
            src="/static/assets/images/fb.png"
            alt="fb"
          />
        </div>
        <div className={style.image}>
          <div className={style.title}>Телеграм</div>
          <Image
            width="512"
            height="512"
            src="/static/assets/images/tg.png"
            alt="tg"
          />
        </div>
        <div className={style.image}>
          <div className={style.title}>Телеграм 2</div>
          <Image
            width="750"
            height="530"
            src="/static/assets/images/tg2.jpg"
            alt="tg"
          />
        </div>
        <div className={style.image}>
          <div className={style.title}>Одноклассники</div>
          <Image
            width="512"
            height="512"
            src="/static/assets/images/ok.png"
            alt="ok"
          />
        </div>
        <div className={style.image}>
          <div className={style.title}>Общее</div>
          <Image
            width="300"
            height="300"
            src="/static/assets/images/logo.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
