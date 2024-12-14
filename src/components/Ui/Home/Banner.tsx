import line2 from '@/src/assets/Line 2.png'
import Image from 'next/image';
import tornado1 from '@/src/assets/tornado1.svg'
import tornado2 from '@/src/assets/tornado2.png'
import StartButton from '../Shared/StartButton';


const Banner = () => {
    return (
        <div className='relative overflow-hidden pb-20 mt-5'>
        <div className="text-center pt-[40px] lg:pt-[80px] pb:[60px] lg:pb-[120px] max-w-[1440px] mx-auto px-5 flex flex-col justify-center items-center">
            <div className='relative mb-7 md:mb-7'>
            <h1 className="text-[40px] md:text-[70px] font-bold font-plus-jakarta">Postiz and Buffer <span className="block -mt-5"> comparison</span></h1>
            <div className='absolute end-6 md:end-5 md:right-[8%] -bottom-[11%] md:-bottom-[7%] '>
            <Image src={line2} alt='line2' className='w-[230px] md:w-[336px] h-auto' />
            </div>
            </div>
            <p className=' text-[18px] md:text-[22px] font-dm-sans font-normal leading-[23px] md:leading-[28px] text-[#c5c5c5] mb-6'>Postiz&#39;s superior scheduling flow, competitor tracking, and client <br /> management make it the best Buffer alternative.</p>
            <StartButton/>
        </div>
        <div className='absolute bottom-[6%] md:bottom-[15%] -left-[0%] md:left-[0%]'>
        <Image src={tornado1} alt='tornado1' className='w-[90px] md:w-[270px] h-auto' />
        </div>
        <div className='absolute end-0 top-[1%]  md:top-[17%] -right-[9%] md:right-[0%]'>
        <Image src={tornado2} alt='tornado2' className='h-auto w-[70px]  md:w-[110px]'/>
        </div>
        </div>
    );
};

export default Banner;