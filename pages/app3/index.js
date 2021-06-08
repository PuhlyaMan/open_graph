import Image from 'next/image'
import { useState } from "react";
import Head from "next/head";

import Button from "../../components/Button";

// import logo from "/static/assets/images/logo.png";

const App3 = () => {
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Head>
        <title>App3</title>
        <meta property="og:title" content="Test App3" />
        <meta property="og:description" content="Тест description для App3" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://f0549953.xsph.ru/app3" />
        <meta property="og:image" content='/static/assets/images/logo.png' />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <div>
        <input value={name} onChange={onChange} />
        <Button value={name} />
      </div>
      <Image width="300" height="300" src='/static/assets/images/logo.png' alt="logo" />
    </>
  );
};

export default App3;
