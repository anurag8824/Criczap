import React from 'react'

const FbConnect = () => {
    return (


        <div class="md:w-72 lg:block hidden w-fit  mx-auto md:mx-0   ">
            <div class="grid items-center justify-between space-y-6 pb-3  ">

                <div class="grid text-2xl h-96 font-medium w-full top-0 rounded-xl px-3 py-3 border bg-white  overflow-hidden ">
                    Connect With Us

                    <iframe
                        className='w-full h-72 pt-2'
                        src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/I787766766ketTeam/&amp;tabs=timeline&amp;container_width=350&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=2626316474094765"
                        title="fb:page Facebook Social Plugin"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media">

                    </iframe>

                </div>



                <div class="grid text-2xl font-medium w-full top-0 rounded-xl px-3 py-3 border bg-white  overflow-hidden ">
                    Follow Us


                    <div class="flex  py-2 pt-4 border-b w-full   items-center gap-x-3">
                        <img
                            src="/youtube.png"
                            alt="Tania Andrew"
                            class="relative inline-block h-fit w-fit  object-center"
                        />
                        <a href='#' class="block font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                            YouTube
                        </a>

                    </div>


                    <div class="flex  py-2 border-b w-full object-cover    items-center gap-x-6">
                        <img
                            src="/facebook.png"
                            alt="Tania Andrew"
                            class="relative inline-block h-fit w-fit  object-center"
                        />
                        <div>
                            <h6 class="block font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                Facebook
                            </h6>

                        </div>
                    </div>

                    <div class="flex  py-2  w-full object-cover    items-center gap-x-6">
                        <img
                            src="/instagram.png"
                            alt="Tania Andrew"
                            class="relative inline-block h-fit w-fit  object-center"
                        />
                        <div>
                            <h6 class="block font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                Instagram
                            </h6>

                        </div>
                    </div>





                </div>



            </div>

        </div>





    )
}

export default FbConnect