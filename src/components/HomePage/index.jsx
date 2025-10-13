import Footer from "../layout/Footer";
import { CallToAction } from "./CallToAction";
import { FeatureOne } from "./FeatureOne";
import { FeatureTwo } from "./FeatureTwo";
import { Header } from "./Header";
import { Heropage } from "./Heropage";
import { NewsLetter } from "./NewsLetter";
import { QuickHighlight } from "./QuickHighLight";
import { TwinCommunity } from "./TwinCommunity";

export default function LandingPage() {
    return(
        <div>
            <Header/>
             <Heropage />
            <FeatureOne/>
            <FeatureTwo/>
            <CallToAction/>
            <QuickHighlight/>
            <TwinCommunity/>
            <Footer/>
        </div>
    )
}