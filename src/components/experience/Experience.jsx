import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      {/* <h5>What Skills I Have</h5> */}
      <h2>My Knowledge</h2>

      <div className="container experience__container">
        <div className="experience__frontned">
          {/* <h3>Frontend Development</h3> */}
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>S-ORCA</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          {/* <h3>Frontend Development</h3> */}
          <div className="experience__content">
            
            
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Ziyookline</h4>
                <a className='text-light' href="https://ziyookline.uz/ru/" target='_blank'>https://ziyookline.uz/ru/</a>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          {/* <h3>Frontend Development</h3> */}
          <div className="experience__content">
            
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Eurosoft</h4>
                <a className='text-light' href="https://eurosoft.uz/#/" target='_blank'>https://eurosoft.uz/#/</a>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          {/* <h3>Frontend Development</h3> */}
          <div className="experience__content">
            
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Adliya Vazirligi</h4>
                <a className='text-light' href="https://adliya.uz/" target='_blank'>https://adliya.uz/</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience