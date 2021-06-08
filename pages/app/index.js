import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

// import vk from '../../public/static/assets/images/vk/515x515.jpg'
// import telegram from '../../public/static/assets/images/telegram/512x512.png'

import style from "./style.module.css";

const types = ["in", "out", "mgmt"];

const App = () => {
  const [data, setData] = useState();
  const [ifaces, setIfaces] = useState();

  useEffect(() => {
    import("../../public/static/assets/data/in.js")
      .then((module) => setData(module.obj))
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if (data) {
      setIfaces(data.ifaces);
    }
  }, [data]);

  const handleChange = (device) => (e) => {
    switch (e.target.value) {
      case "in":
        setIfaces((prev) => {
          return prev.map((item) => {
            if (item.name === device) {
              return { ...item, type: "in", ip: null, dns_ip: null, gw: null };
            }
            return item;
          });
        });
        break;
      case "out":
        setIfaces((prev) => {
          return prev.map((item) => {
            if (item.name === device) {
              return { ...item, type: "out", ip: null, dns_ip: null, gw: null };
            }
            return item;
          });
        });
        break;

      case "mgmt":
        setIfaces((prev) => {
          let prevType = "";
          return prev.map((item) => {
            if (item.name === device) {
              prevType = item.type;
              return {
                ...item,
                type: "mgmt",
                ip: null,
                dns_ip: null,
                gw: null,
              };
            } else if (item.type === "mgmt") {
              return {
                ...item,
                type: prevType,
                ip: null,
                dns_ip: null,
                gw: null,
              };
            }
            return item;
          });
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Head>
        <title>App</title>
        <meta property="og:title" content="Test App" />
        <meta property="og:description" content="Тест description для App" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content= "http://f0549953.xsph.ru/app" />
        <meta property="vk:image" content='/static/assets/images/vk/515x515.jpg' />
        <meta property="telegram:image" content='/static/assets/images/telegram/512x512.png' />
      </Head>
      <div className={style.root}>
        {ifaces?.map((item) => {
          return (
            <div key={item.name} className={style.row}>
              <label>{item.name}</label>
              <select value={item.type} onChange={handleChange(item.name)}>
                {types.map((type) => {
                  return (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
      <Image
        width="515"
        height="515"
        src="/static/assets/images/vk/515x515.jpg"
        alt="vk"
      />
    </>
  );
};

export default App;
