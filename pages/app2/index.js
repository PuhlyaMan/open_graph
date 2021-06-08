import { React, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";

// import vk from "/static/assets/images/vk/800x400.jpg";
// import telegram from "/static/assets/images/telegram/750x530.jpg";

const App2 = () => {
  const [initData, setInitData] = useState();
  const prevRef = useRef(false);

  useEffect(() => {
    console.log("init");
    setInitData({ name: "Sergey", active: "false" });
  }, []);

  useEffect(() => {
    if (prevRef.current) {
      console.log("modify");
      console.log("INIT DATA: ", initData);
    }
  }, [initData]);

  const handleChange = (e) => {
    setInitData((prev) => {
      prevRef.current = true;
      return { ...prev, active: e.target.value };
    });
  };

  return (
    <>
      <Head>
        <title>App2</title>
        <meta property="og:title" content="Test App2" />
        <meta property="og:description" content="Тест description для App2" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://f0549953.xsph.ru/app2" />
        <meta
          property="vk:image"
          content="/static/assets/images/vk/800x400.jpg"
        />
        <meta
          property="telegram:image"
          content="/static/assets/images/telegram/750x530.jpg"
        />
      </Head>
      <div>
        <select value={initData?.active} onChange={handleChange}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
      <Image
        width="800"
        height="400"
        src="/static/assets/images/vk/800x400.jpg"
        alt="vk"
      />
    </>
  );
};

export default App2;
