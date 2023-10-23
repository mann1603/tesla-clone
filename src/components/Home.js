import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <div>
      <Container>
        <Section
            title = "Model S"
            description = "Order Online for Touches Delivery"
            backgroundImg = "model-s.jpg"
            leftBtnText = "Custom inventory"
            rightBtnText = "Existing inventory"
        />
        <Section
           title = "Model Y"
           description = "Order Online for Touches Delivery"
           backgroundImg = "model-y.jpg"
           leftBtnText = "Custom inventory"
           rightBtnText = "Existing inventory"
        />
        <Section
           title = "Model 3"
           description = "Order Online for Touches Delivery"
           backgroundImg = "model-3.jpg"
           leftBtnText = "Custom inventory"
           rightBtnText = "Existing inventory"
        />
        <Section
           title = "Model X"
           description = "Order Online for Touches Delivery"
           backgroundImg = "model-x.jpg"
           leftBtnText = "Custom inventory"
           rightBtnText = "Existing inventory"
        />

        <Section
           title = "Lowest Cost Solar Pannels in America"
           description = "Order Online for Touches Delivery"
           backgroundImg = "solar-panel.jpg"
           leftBtnText = "Order now"
           rightBtnText = "Learn more"
        />

        <Section
           title = "Solar for New Roofs"
           description = "Solar Roof Costs LEss than a New Roof Plus Solar Panels"
           backgroundImg = "solar-roof.jpg"
           leftBtnText = "Order now"
           rightBtnText = "Learn more"
        />

        <Section
           title = "Accesorries"
           description = ""
           backgroundImg = "accessories.jpg"
           leftBtnText = "Order now"
           rightBtnText = ""
        />
      </Container>
    </div>
  )
}

export default Home

const Container = styled.div`
    height: 100vh 
`






