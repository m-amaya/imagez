import { FC } from "react";

import { Content } from "~/components/content";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { globalStyles } from "~/styles";

const Home: FC = () => {
  globalStyles();

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
