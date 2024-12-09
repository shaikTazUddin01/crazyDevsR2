import Banner from '@/src/components/Ui/Home/Banner';
import PlatformComparision from '@/src/components/Ui/Home/PlatformComparision';
import PricingPlains from '@/src/components/Ui/Home/PricingPlains';
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
           </div>
        </div>
    );
};

export default page;