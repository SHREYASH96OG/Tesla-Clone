import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title,descrip,backimg,leftbtext,rightbtext}) {
  return (
    <Warp bgimg={backimg}>
      <Fade bottom>
        <Item>
          <h1>{ title }</h1>
          <p>{ descrip }</p>
          {/* <p>Clone Created By <a href='https://github.com/SHREYASH96OG' target='_blank'>Shreyash Gaikwad</a></p> */}
        </Item>
      </Fade>
      <Button>
      <Fade bottom>
      <ButtonGroup>
        <LeftButton>
          {leftbtext}
        </LeftButton>
        {rightbtext &&
         <Rightbutton>
         {rightbtext}
         </Rightbutton>
      }
      </ButtonGroup>
      </Fade>
      <DownArrow src='/images/down-arrow.svg' />
      </Button>
    </Warp>
  )
}

export default Section
const Warp = styled.div`
    width: 100vw;
    height: 100vh;  
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-image: url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props=>`url("/images/${props.bgimg}")`}
`

const Item = styled.div`
    text-align:center;
    padding-top:15vh;
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30pxpx;
    @media (max-width:765px){
      flex-direction:column;

    }

`
const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin-right:8px;
    margin-bottom:8px;

`
const Rightbutton = styled(LeftButton)`
    background-color:white;
    opacity:0.65;
    color:black;
`
const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    animation:animateDown infinite 1.5s;
`

const Button = styled.div`
`
