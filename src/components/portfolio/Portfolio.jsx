import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-img1.jpg'
import IMG2 from '../../assets/portfolio-img2.jpg'
import IMG3 from '../../assets/portfolio-img3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Cozy House',
    languages: '(HTML, SASS, JavaScript)',
    github: 'https://github.com/SurajSulten',
    demo: 'https://surajsulten.github.io/SHelter_Adaptive/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Shopping Cart',
    languages: '(React.js, TypeScript)',
    github: 'https://github.com/SurajSulten',
    demo: 'https://idyllic-churros-d5460f.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Budget App',
    languages: '(React.js, Bootstrap)',
    github: 'https://github.com/SurajSulten',
    demo: 'https://grand-treacle-bbd7ec.netlify.app/'
  },
  // {
  //   id: 4,
  //   image: IMG1,
  //   title: 'Cozy House',
  //   github: 'https://github.com',
  //   demo: 'https://surajsulten.github.io/SHelter_Adaptive/'
  // },
  // {
  //   id: 5,
  //   image: IMG1,
  //   title: 'Cozy House',
  //   github: 'https://github.com',
  //   demo: 'https://surajsulten.github.io/SHelter_Adaptive/'
  // },
  // {
  //   id: 6,
  //   image: IMG1,
  //   title: 'Cozy House',
  //   github: 'https://github.com',
  //   demo: 'https://surajsulten.github.io/SHelter_Adaptive/'
  // }
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
                <h3>{title}</h3>
                <h4>{languages}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
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