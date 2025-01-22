import { FeatureStepsDemo } from "./components/components/descriptionSection";
import { BentoGridGalleryDemo } from "./components/components/galleryDemo";
import { ImagesSliderDemo } from "./components/components/ImageSlider";
// import { HeroSectionDemo } from "./components/header"
import { Footerdemo } from "./components/ui/footer-section"
 
export default function App() {
  return (
    <>
    <ImagesSliderDemo/>
    <BentoGridGalleryDemo/>
    <FeatureStepsDemo/>
    <Footerdemo/>
    </>
  )
}