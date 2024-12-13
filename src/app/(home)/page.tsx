import Banner from '@/src/components/Ui/Home/Banner';
import CompareAlternatives from '@/src/components/Ui/Home/CompareAlternatives';
import PlatformComparision from '@/src/components/Ui/Home/PlatformComparision';
import PricingPlains from '@/src/components/Ui/Home/PricingPlains';
import SocialMediaAnalytics from '@/src/components/Ui/Home/SocialMediaAnalytics';
import SocialMediaInbox from '@/src/components/Ui/Home/SocialMediaInbox';
import SocialMediaScheduling from '@/src/components/Ui/Home/SocialMediaScheduling';
import SocialPlatform from '@/src/components/Ui/Home/SocialPlatform';
import Summery from '@/src/components/Ui/Home/Summery';
import TeamsApprovals from '@/src/components/Ui/Home/Teams&Approvals';
import '@/src/style/Home.css'

const page = () => {
    return (
        <div className='mx-auto '>
           {/* banner section */}
           <Banner/>
           <div className='max-w-[1440px] mx-auto px-[60px]'>
           <SocialPlatform/>
           <PlatformComparision/>
           <PricingPlains/>
           <SocialMediaScheduling/>
           <SocialMediaAnalytics/>
           <TeamsApprovals/>
           <SocialMediaInbox/>
           <Summery/>
           <CompareAlternatives/>
           </div>
        </div>
    );
};

export default page;