import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
            title="Model Shreyash" 
            descrip="Lease starting at $329/mo*"
            backimg="model-s.jpg"
            leftbtext="Order Now"
            
            />
            <Section 
            title="Model 3" 
            descrip="Lease starting at $329/mo*"
            backimg="model-3.jpg"
            leftbtext="Custom Order"
            rightbtext="Existing Inventory"
            />
            <Section 
            title="Model x" 
            descrip="From $68,590*After Federal Tax Credit & Est. Gas Savings"
            backimg="model-x.jpg"
            leftbtext="Custom Order"
            rightbtext="Existing Inventory"
            />
            <Section 
            title="Model y" 
            descrip="Lease starting at $399/mo*"
            backimg="model-y.jpg"
            leftbtext="Custom Order"
            rightbtext="Existing Inventory"
            />
            <Section 
            title="Solar Panel" 
            descrip="Lowest Cost Solar Panels in America"
            backimg="solar-panel.jpg"
            leftbtext="Order Now"
            rightbtext="Schedule a Consultaion"
            />
            <Section 
            title="Solar Roof" 
            descrip="Lowest Cost Solar Panels in America"
            backimg="solar-panel.jpg"
            leftbtext="Order Now"
            />
            <Section 
            title="Accessories" 
            descrip=""
            backimg="accessories.jpg"
            leftbtext="Shop Now"
            />
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`
