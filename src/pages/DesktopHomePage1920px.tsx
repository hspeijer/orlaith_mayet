import { FunctionComponent } from "react";
import Header from "../components/Header";
import GridItems from "../components/GridItems";
import DesktopFooter from "../components/DesktopFooter";
import "./DesktopHomePage1920px.css";

const DesktopHomePage1920px: FunctionComponent = () => {
  return (
    <div className="desktop-home-page-1920px">
      <Header navigationFlex="unset" navigationAlignSelf="stretch" />
      <main className="content">
        <section className="grid">
          <div className="grid-workprojects">
              <GridItems
                sourceImage="/source-image@2x.png"
                inputTitel="On its way"
                projectDescription="Loop video installation, mixed media, 2023"
                images={[
                    "public/projects/1_on_its_way/1.png",
                    "public/projects/1_on_its_way/2.jpg",
                    "public/projects/1_on_its_way/3.jpg",
                    "public/projects/1_on_its_way/4.jpg",
                ]}
              />
              <GridItems
                sourceImage="/source-image-1@2x.png"
                inputTitel="Thesis: Human_Fallback"
                projectDescription="A5 format book made from recycled paper (We Love Recycled printing company, Amsterdam), 2023"
                images={[
                    "public/projects/2_human_Fallback/1.JPG",
                    "public/projects/2_human_Fallback/2.png",
                    "public/projects/2_human_Fallback/3.png",
                ]}
              />
              <GridItems
                sourceImage="/source-image-2@2x.png"
                inputTitel="Drop Murphy’s Constant"
                projectDescription="7 min performance , toast with jam and butter, ladder, 2023"
                images={[
                    "public/projects/3_Murphys_law/1.JPG",
                    "public/projects/3_Murphys_law/2.JPG",
                    "public/projects/3_Murphys_law/3.JPG",
                    "public/projects/3_Murphys_law/4.JPG",
                ]}
              />
              <GridItems
                sourceImage="/source-image-3@2x.png"
                inputTitel="No Matter"
                projectDescription="Performative 3D sculpture built from salvaged and downgraded materials (car tires, metal poles, jumbo sized wooden pallets, foam, tarpaulin, windows, OSB and compressed wood panels, solar panels, stainless steel sink, table for 12, exit light box, 500 kgs of sheep’s wool, straw bales, corrugated roofing, nails and screws, 2023"
                images={[
                    "public/projects/4_No_Matter/1.jpg",
                    "public/projects/4_No_Matter/2.jpg",
                    "public/projects/4_No_Matter/3.jpg",
                    "public/projects/4_No_Matter/4.jpg",
                ]}
              />
              <GridItems
                sourceImage="/source-image-4@2x.png"
                inputTitel="Watching the Watcher"
                projectDescription="Video installation, 4 min 14 sec, 2022"
                images={[
                    "public/projects/5_Watching_the_watcher/1.png",
                    "public/projects/5_Watching_the_watcher/2.png",
                    "public/projects/5_Watching_the_watcher/3.JPG",
                ]}
              />
              <GridItems
                sourceImage="/source-image-5@2x.png"
                inputTitel="In search of Noord"
                projectDescription="Video, 15 mins, 2022"
                images={[
                    "public/projects/6_In_search_of_Noord/1.png",
                ]}
              />
              <GridItems
                  sourceImage="/source-image-10@2x.png"
                  inputTitel="Les Non-Dits"
                  projectDescription="A4 paper, acrylic ink stippling drawing, thread, drawing pins, 2021"
                  images={[
                      "public/projects/7_Les_Non_Dits/1.jpg",
                      "public/projects/7_Les_Non_Dits/2.png",
                  ]}
              />
              <GridItems
                sourceImage="/source-image-6@2x.png"
                inputTitel="Woodman- nification"
                projectDescription="Augmented reality on Instagram, 2022"
                images={[
                    "public/projects/8_Woodmannification/1.jpg",
                ]}
              />
              <GridItems
                sourceImage="/source-image-7@2x.png"
                inputTitel="Bäver"
                projectDescription="Installation, aluminium frame 135 x 100 x 3.35 cm, solar panel, A5 printed text, plastic folder, 2021"
                images={[
                    "public/projects/10_Bäver/1.JPG",
                    "public/projects/10_Bäver/2.JPG",
                    "public/projects/10_Bäver/3.JPG",
                ]}
              />
              <GridItems
                sourceImage="/source-image-8@2x.png"
                inputTitel="Multipass"
                projectDescription="Performative objects, 187.325 mm × 82.55 mm, 12 variations of printed paper, 2021"
                images={[
                    "public/projects/11_Multipass/1.png",
                    "public/projects/11_Multipass/2.JPG",
                    "public/projects/11_Multipass/3.jpg",
                    "public/projects/11_Multipass/4.jpg",
                ]}
              />
              <GridItems
                sourceImage="/source-image-9@2x.png"
                inputTitel="0 to 1 in an Imaginary World"
                projectDescription="Online exhibition. Details: size squares 30 x 30 cm, 2020"
                images={[
                    "public/projects/12_0_to_1_in_an_imaginary_world/1.png",
                    "public/projects/12_0_to_1_in_an_imaginary_world/2.png",
                    "public/projects/12_0_to_1_in_an_imaginary_world/3.png",
                    "public/projects/12_0_to_1_in_an_imaginary_world/4.png",
                ]}
              />
              <GridItems
                sourceImage="/source-image-11@2x.png"
                inputTitel="Brooming"
                projectDescription="Text UNDER CONSTRUCTION"
                images={[
                    "public/projects/13_Brooming/1.jpg",
                ]}
              />
              <GridItems
                sourceImage="/source-image-12@2x.png"
                inputTitel="xyzPOV"
                projectDescription="A series of 50 digital images generated via algorithm, 2020"
                images={[
                    "public/projects/14_xyzPOV/1.png",
                    "public/projects/14_xyzPOV/2.png",
                    "public/projects/14_xyzPOV/3.png",
                    "public/projects/14_xyzPOV/4.png",
                    "public/projects/14_xyzPOV/5.png",
                ]}
              />
              <GridItems
                sourceImage="/source-image-13@2x.png"
                inputTitel="Education Today and Tomorrow"
                projectDescription="Text - UNDER CONSTRUCTION"
                images={[
                    "public/projects/15_Education_Today_and_Tomorrow/1.png",
                ]}
              />
              <GridItems
                sourceImage="/projects/16_Medallion/2019_Medaillon_Website.png"
                inputTitel="Medallion"
                projectDescription="A5 paper, acrylic ink, circles 12 cm, 2019"
                images={[
                    "public/projects/16_Medallion/1.png",
                    "public/projects/16_Medallion/2.jpg",
                    "public/projects/16_Medallion/3.jpg",
                ]}
              />
              <GridItems
                sourceImage="/projects/17_Collages/Space_toucan_Home_Page.png"
                inputTitel="Collages"
                projectDescription="Paper Collages"
                images={[
                    "public/projects/17_Collages/1.png",
                    "public/projects/17_Collages/2.png",
                    "public/projects/17_Collages/3.png",
                    "public/projects/17_Collages/4.png",
                    "public/projects/17_Collages/5.png",
                ]}
              />
          </div>
        </section>
        <DesktopFooter />
      </main>
    </div>
  );
};

export default DesktopHomePage1920px;
