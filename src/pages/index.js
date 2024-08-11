import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import DesktopFooter from "../components/DesktopFooter";
import {GridItems} from "../components/GridItems";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
            <Header navigationFlex="unset" navigationAlignSelf="stretch" />
        <section className="grid">
          <div className="grid-workprojects">
              <GridItems
                sourceImage="/source-image@2x.png"
                inputTitel="On its way"
                projectDescription="Loop video installation, mixed media, 2023"
                images={[
                    "/projects/1_on_its_way/1.png",
                    "/projects/1_on_its_way/2.jpg",
                    "/projects/1_on_its_way/3.jpg",
                    "/projects/1_on_its_way/4.jpg",
                ]}
              />
            </div>
            </section>
            <DesktopFooter />
    </main>
  );
}
