import Banner from '@/src/components/Ui/Home/Banner';
import PlatformComparision from '@/src/components/Ui/Home/PlatformComparision';
import PricingPlains from '@/src/components/Ui/Home/PricingPlains';
import SocialMediaAnalytics from '@/src/components/Ui/Home/SocialMediaAnalytics';
// import SocialMediaInbox from '@/src/components/Ui/Home/SocialMediaInbox';
import SocialMediaScheduling from '@/src/components/Ui/Home/SocialMediaScheduling';
import SocialPlatform from '@/src/components/Ui/Home/SocialPlatform';
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
           {/* <SocialMediaInbox/> */}
           </div>
        </div>
    );
};

export default page;