import React from 'react'
import PreviewMainSection from './Sections/PreviewMainSection'
import ServiceMainSectionContainer from './Sections/ServiceMainSectionContainer'
import AdvantagesMainSectionContainer from './Sections/AdvantagesMainSectionContainer'


const HomeContainer = () => {
    return (
      <React.Fragment>
        <PreviewMainSection />
        <ServiceMainSectionContainer />
        <AdvantagesMainSectionContainer />
      </React.Fragment>
  )
}

export default HomeContainer