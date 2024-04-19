import ImageComp from '@/components/ImageComp'
import { client } from '@/sanity/lib/client'
import { SocialIcon } from 'react-social-icons'
async function getId(slug: string) {
    const query =  `*[_type == "ankara" && slug.current == "${slug}"][0] {
        _id,
          name,
          price,
          images,
          desc,
          "slug": slug.current,
          "category": category->name,
          
      }`
      
    const data = await client.fetch(query)
    return data
}

async function page({params}: {params: {slug: string}}) {
    const datas: any = await getId(params.slug)
  return (
    <div className=' flex flex-col md:flex row gap-3 mx-auto mt-24 max-w-3xl shadow-lg border bg-[#e6e6e6] min-h-screen] dark:bg-slate-500'>
        <div className='flex p-3 flex-col max-w-2xl mx-auto md:max-w-5xl h-full overflow-hidden   transition ease-in delay-150  hover:-translate-y-1  duration-300   '>
        <div className='flex flex-col shadow-sm  text-center items-center justify-center'>
            
            <h1 className='text-2xl  font-extrabold font-serif bg-green-400 px-2 py-2 rounded-lg w-full text-gray-800'>{datas?.category}</h1>

        </div>
       
        <div>
            <ImageComp images={datas?.images} />
        </div>
        <div className='space-y-2 bg-transparent animate-pulse p-2'>
            <p className='text-center text-lg sm:text-xl justify-center font-extrabold text-gray-600 p-1'>{datas?.name}</p>
            <h2 className=' italic font-normal'>{datas?.desc}</h2>
        </div>
        <div className='flex flex-col gap-2  items-center justify-around sm:justify-between text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  '>
           
           <p className='font-bold text-sm sm:text-xl text-purple-900'>Make a purchase via</p>
           <div className='flex flex-col  gap-2 items-center'>
               <div className='flex items-center justify-between p-2'>
                   <h3>Whatsapp</h3>
                   <SocialIcon className="  w-8 h-8 animate-pusle " network='whatsapp' url="https://wa.me/+12265599844"
                   {...datas}
                   
                />
               </div>
               <div className='flex items-center justify-between p-2'>
                   <h3>Facebook Messenger</h3>
                   <SocialIcon network="facebook" url = "https://www.messenger.com/t/61554344316298/" />

               </div>
               <div className='flex items-center justify-between p-2'>
                   <h3>Instagram</h3>
                   <SocialIcon network="instagram" url = "https://www.instagram.com/lolaflocouture?igsh=MTl6Z2YxeHI4Nm9qYg==" />

               </div>
               
           </div>
           
       </div>
       
    </div>
    </div>
  )
}

export default page