import Image from 'next/image';
import React from 'react';

const teamMembers = [
    {
        name: 'Qamar Ashfaq',
        role: 'CO/Full Stack Developer',
        imgUrl: '/team/qamar.jpg'
    },
    {
        name: 'Umair Younus',
        role: 'Frontend Lead',
        imgUrl: '/team/umair.jpg'
    },
    {
        name: 'Abdul Jawad',
        role: 'Frontend Developer',
        imgUrl: '/team/abdul-jawad.png'
    },
    // {
    //     name: 'Zubair Shafique',
    //     role: 'Project Manager',        
    // },
    // {
    //     name: 'Numan Iqbal',
    //     role: 'Technical Sales Engineer',        
    // },
    // {
    //     name: 'Zain-UL-Abidin',
    //     role: 'Sales Executive',        
    // }
];

const OurTeam = () => {
    return (

        <section>


            <div className="flex items-center justify-center text-center">

                <div className="flex flex-col p-2 m-2 ">

                    <div className="dark-heading mb-2">Meet Our Talent</div>

                    <div className="text-xl text-para w-full sm:w-2/3 mx-auto mb-6">FalCoQ Technologies brings together an awesome community of like-minded professionals who love challenges. We&apos;re lucky, we get to curate the best team</div>


                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center p-2">
                                <div className="h-40 w-40 rounded-full overflow-hidden bg-gray-200">
                                    <Image src={member.imgUrl} alt={member.name} width={150} height={150} className="h-full w-full object-cover hover:scale-110 duration-300" />
                                </div>
                                <div className="text-lg font-medium text-dark cursor-pointer mt-2">{member.name}</div>
                                <div className="italic text-para">{member.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default OurTeam;
