import { FC } from "react";

import { Content } from "~/components/content";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import UserBanner from "~/components/UserBanner";

const Home: FC = () => {
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
