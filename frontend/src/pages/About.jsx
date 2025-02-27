import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>

      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'} /> 

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas ipsam alias? Quos delectus nesciunt enim optio praesentium libero ipsam iusto id modi porro, hic quas. Aspernatur consequatur aliquid quia?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque, dolorem, quibusdam consectetur alias ad nobis molestias aspernatur quo officiis assumenda aut magni ab eos! Quo animi id tenetur asperiores illo, perferendis corporis maxime dicta!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius ducimus quaerat, laborum nisi voluptatum exercitationem. Corrupti adipisci hic tempora explicabo! Debitis, voluptate voluptates eos deleniti quod fugiat consectetur numquam?</p>

        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600'>Quality Assurance:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias nobis nemo consectetur eos ullam?</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600'>
            convenience:
          </b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias nobis nemo consectetur eos ullam?</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600'>
            Exceptional Customer Service:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias nobis nemo consectetur eos ullam?</p>

        </div>


      </div>

      <NewsLetterBox />
      
    </div>
  )
}

export default About
