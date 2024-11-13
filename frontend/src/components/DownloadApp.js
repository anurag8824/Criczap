import React from 'react'

const DownloadApp = () => {
  return (
    <div>  <div class="grid text-2xl font-medium w-full  top-0 rounded-xl px-3 py-3 border bg-white  overflow-hidden ">
    Download The App

    <div class="flex  pb-2 pt-4 border-b w-full object-cover    items-center gap-x-6">
        <img
            src="android.png"
            alt="Tania Andrew"
            class="relative inline-block h-fit w-fit  object-center"
        />
        <div>
            <h6 class="block font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                Android App
            </h6>

        </div>
    </div>

    <div class="flex  py-2 w-full object-cover    items-center gap-x-6">
        <img
            src="ios.png"
            alt="Tania Andrew"
            class="relative inline-block h-fit w-fit  object-center"
        />
        <div>
            <h6 class="block font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                iOS
            </h6>

        </div>
    </div>

</div></div>
  )
}

export default DownloadApp