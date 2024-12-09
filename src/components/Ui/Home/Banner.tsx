import line2 from '@/src/assets/Line 2.png'
import Image from 'next/image';
import tornado1 from '@/src/assets/tornado1.svg'
import tornado2 from '@/src/assets/tornado2.png'


const Banner = () => {
    return (
        <div className='relative'>
        <div className="text-center pt-[99px] pb-[120px] max-w-[1440px] mx-auto ">
            <div className='relative mb-10'>
            <h1 className="text-[70px] font-bold font-plus-jakarta">Postiz and Buffer <span className="block -mt-5"> comparison</span></h1>
            <div className='absolute right-[32%] -bottom-[9%]'>
            <Image src={line2} alt='line2' height={21} width={336} />
            </div>
            </div>
            <p className='text-[22px] font-dm-sans font-normal leading-[28px]'>Postiz&#39;s superior scheduling flow, competitor tracking, and client <br /> management make it the best Buffer alternative.</p>
            <button className='bg-white px-4 py-2 rounded-full text-black mt-5'>Get Started </button>
        </div>
        <div className='absolute bottom-0'>
        <Image src={tornado1} alt='tornado1' height={164} width={257} />
        </div>
        <div className='absolute end-0 top-[20%]'>
        <Image src={tornado2} alt='tornado2' height={100} width={130} />
        </div>
        </div>
    );
};

export default Banner;