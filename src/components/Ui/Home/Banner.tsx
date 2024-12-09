import line2 from '@/src/assets/Line 2.png'
import Image from 'next/image';


const Banner = () => {
    return (
        <div className="text-center min-h-[500px]  ">
            <div className='relative mb-10'>
            <h1 className="text-[70px] font-bold font-plus-jakarta">Postiz and Buffer <span className="block -mt-5"> comparison</span></h1>
            <div className='absolute right-[32%] -bottom-[9%]'>
            <Image src={line2} alt='line2' height={21} width={336} />
            </div>
            </div>
            <p className='text-[22px] font-dm-sans font-normal leading-[28px]'>Postiz&#39;s superior scheduling flow, competitor tracking, and client <br /> management make it the best Buffer alternative.</p>
        </div>
    );
};

export default Banner;