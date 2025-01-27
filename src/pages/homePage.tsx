import { FeatureStepsDemo } from "@/components/components/descriptionSection";
import { BentoGridGalleryDemo } from "@/components/components/galleryDemo";
import { ImagesSliderDemo } from "@/components/components/ImageSlider";
import { Footerdemo } from "@/components/ui/footer-section";
import { Header1 } from "@/components/ui/header";

export default function HomePage() {

    return(
        <>
        <Header1/>
            <ImagesSliderDemo/>
    <BentoGridGalleryDemo/>
    <FeatureStepsDemo/>
    <Footerdemo/>
        </>
    )
}