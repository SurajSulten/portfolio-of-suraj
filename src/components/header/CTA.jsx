import React from 'react'
import CV from '../../assets/Sultonov_Suroj.pdf'

const CTA = () => {
  return (
    <div>
        <div className="cta">
            <a className='btn' href={CV} download>Download CV</a>
            <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>
    </div>
  )
}

export default CTA