import { text } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import './MostRead.css'


function Divs({Image, Text, Time}) {
  return (
    <div>
      <div className='listed-divs'>
          <img src={Image} alt="" className='listed-img' />
          <div className='text-divs'>
            <h3 className='listed-divs-header'>{Text}</h3>
            <p className='listed-divs-time'>{Time}</p>
          </div>
      </div>
      <div className='border-wrap'>
        <div className='border-bottom1'></div>
      </div>
    </div>
  )
}





export default function MostRead() {
  return (
    <div>
      <div className='main-div'>
        <img src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2023/1/4/4b21b789-e6ce-4308-8358-fb4e9ac28f6f.jpg" className='main-img' alt="" />
        <h2 className='text-header'>PM: Hold me to account on cutting NHS waiting lists</h2>
        <p className='text-p'>Rishi Sunak also makes pledges on the economy and small boat crossings in his first major speech of 2023.</p>
        <span> 4h | UK Politics</span>
        <ul className='unorded-list'>
          <li>
           <strong>Rishi Sunak's five promises analysed</strong>
          </li>
          <li>
            <strong>Sunak wants all pupils to study maths to 18</strong>
          </li>
        </ul>
        <div className='border-wrap'>
          <div className='border-bottom2'></div>
        </div>
      </div>
      <Divs  Image={'https://thumbs.dreamstime.com/b/ambulance-vehicles-royal-london-hospital-uk-queue-coronavirus-pandemic-united-kingdom-january-234096946.jpg'}
        Text={'Inquiry into eight deaths after NI ambulance delays'} Time={'1h | Northern Ireland'}   />
      <Divs Image={'https://pbs.twimg.com/media/Flo5V7fXkAEecdT?format=jpg&name=900x900'}  
        Text={'Writer Fay Weldon dies aged 91'} Time={'1hr | Entertainment'}   />
      <Divs  Image={'https://images.livemint.com/img/2022/11/24/1600x900/CHINA_Covid_1669305106733_1669305106923_1669305106923.jpg'} 
        Text={'China under-representing Covid deaths, WHO warns'} Time={'16m | China'}  />
      <Divs Image={'https://dmrqkbkq8el9i.cloudfront.net/Pictures/1024x536/6/0/7/229607_131378_sainsburysstaff_12649.jpg'} 
        Text={"Sainsbury's to raise pay to at least £11 per hour"} Time={'4m | Business'} />
    </div>
  )
}
