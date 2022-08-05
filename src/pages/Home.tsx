import { FC, useEffect } from "react";

import { Content } from "~/components/content";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import UserBanner from "~/components/UserBanner";
import { useImagesContext } from "~/store";

const Home: FC = () => {
  const { list } = useImagesContext();

  useEffect(() => {
    list.get();
  }, []);

  return (
    <div>
      <UserBanner />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
