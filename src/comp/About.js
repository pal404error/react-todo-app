import React from 'react'

export const About = () => {
  return (
<section class="py-16 bg-white md:py-24">
    <div class="flex flex-col max-w-6xl px-10 mx-auto lg:flex-row">

        <div class="flex flex-col items-start justify-center w-full pr-10 mb-12 lg:w-1/2 lg:mb-0">
            <div class="relative">
                <p class="mb-2 text-base font-bold text-black uppercase">Learning</p>
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                    <span class="block xl:inline">Designing &amp;</span>
                    <span class="block text-pink-500 xl:inline">Building Faster</span>
                </h1>
            </div>
            <p class="my-8 text-lg text-gray-600 md:text-xl">If you liked my projects I will appreciate a visit to my blog site and leave star &#127775; </p>
            <div class="relative flex items-center pt-4 space-x-3">

                <a href="https://pal404blog.github.io/" class="relative text-2xl group">
                    <span class="relative z-10 px-5 py-2 font-bold leading-tight text-green-900 bg-green-200 border-4 border-black rounded-lg group-hover:bg-green-400 group-hover:text-white">Blog</span>
                    <span class="absolute top-0 right-0 w-full h-14 -mt-2.5 -mr-0.5 bg-black rounded-lg"></span>
                </a>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center w-full lg:w-1/2">
            <img src="https://cdn.devdojo.com/images/december2020/greenred-animals.png"/>
        </div>
    </div>
</section>
  )
}
