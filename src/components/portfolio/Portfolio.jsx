import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/emguImage.jpg'
import IMG2 from '../../assets/HuoneImage.jpg'
import IMG3 from '../../assets/nefrologiyaImage.jpg'
import IMG4 from '../../assets/RamazonImage.jpg'
import IMG5 from '../../assets/ziyookulineImage.jpg'
import IMG6 from '../../assets/eurosoftImage.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'EMGU',
    languages: '(HTML, SASS, JavaScript)',
    github: 'https://github.com/SurajSulten',
    demo: 'https://emgu.uz'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Huone',
    languages: '(React.js, TypeScript)',
    github: 'https://github.com/SurajSulten',
    demo: 'https://huone.uz'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Nefrologiya',
    languages: '(React.js, Bootstrap)',
    github: 'https://github.com/SurajSulten',
    demo: 'https://nefro.ssv.uz'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Ramazon Taqvimi',
    github: 'https://github.com',
    demo: 'https://play.google.com/store/apps/details?id=uz.ramadan.uz_ramadan_app&hl=ru&gl=US'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Ziyookline',
    github: 'https://github.com',
    demo: 'https://ziyookline.uz/ru/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Eurosoft',
    github: 'https://github.com',
    demo: 'https://eurosoft.uz/#/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, languages, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3 style={{marginBottom: '15px'}}>{title}</h3>
                {/* <h4>{languages}</h4> */}
                <div className="portfolio__item-cta">
                  {/* <a href={github} className="btn" target='_blank' rel='noreferrer'>Github</a> */}
                  <a href={demo} className="btn btn-primary" target='_blank' rel='noreferrer'>Website</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio