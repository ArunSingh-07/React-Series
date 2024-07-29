import React from 'react'

function Cards (props){

    console.log(props)
  return (
    <div>
       <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-65654,resizemode-75,msid-110126612/jobs/hr-policies-trends/digital-india-sparks-rush-for-new-age-software-engineers.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, in!
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Cards