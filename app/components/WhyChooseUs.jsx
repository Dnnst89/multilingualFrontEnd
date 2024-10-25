import Image from 'next/image';
import DefaultButton from './DefaultButton';

const WhyChooseUs = async () => {
    let data = await fetch(
        'http://ec2-54-234-183-21.compute-1.amazonaws.com:1337/api/what-we-dos',
        { next: { revalidate: 15 } }
    );
    let dataList = await data.json();
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h4 className="text-gray-400 text-lg font-semibold">
                    WHY CHOOSE US
                </h4>
                <h2 className="text-3xl font-bold mt-2">
                    We Are Different From Others
                </h2>
                <p className="text-gray-600 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa cupiditate accusantium recusandae soluta explicabo hic!
                    Facere unde nam accusantium natus?
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
                <div className="relative w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                    <div className="absolute right-[50px] sm:right-[200px] z-10 bg-[#BE113C] text-white p-6 opacity-70 rounded-full w-80 h-80 flex flex-col justify-center items-center">
                        <h3 className="text-lg font-bold">Industry experts</h3>
                        <p className="text-sm mt-2 text-center">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit. Ea, recusandae nesciunt. Mollitia quidem.
                        </p>
                    </div>

                    <div className="w-80 h-80 relative left-[30px] sm:left-[200px] ">
                        <Image
                            className="rounded-full"
                            src="/woman.jpg"
                            alt="Person with laptop"
                            fill
                            objectFit="cover"
                            style={{
                                borderRadius: '50%',
                            }}
                            priority
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col space-y-4 items-center lg:items-start">
                        {dataList?.data?.map((expert) => (
                            <DefaultButton
                                key={expert.id}
                                expertsIn={expert.FocusIn}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
