import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Translate } from 'heroicons-react';

function Header() {
    const [burgerstatus,setburgerstatus] = useState(false)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg"/>
            </a>
        <Menu>
        <a href=''>Model S</a>
        <a href=''>Model 3</a>
        <a href=''>Model X</a>
        <a href=''>Model Y</a>
        </Menu>
        <RightMenu>
            <a href=''>Shop</a>
            <a href=''>Tesla Account</a>
            <CustomMenu onClick={()=>setburgerstatus(true)} />
        </RightMenu>
        <BurgerMenu show={burgerstatus}>
            <CloseWraper>
                <CustomClose onClick={()=>setburgerstatus(false)}/>
            </CloseWraper>
                <h3>Clone by Shreyash</h3>
                <li><a href=''><b>Inventory</b></a></li>
                <li><a href=''><b>About</b></a></li>
                <li><a href=''><b>More</b></a></li>
            
        </BurgerMenu>
        </Container>

    )
}

export default Header

const Container = styled.div`
        min-height:60px;
        position:fixed;
        display:flex;
        align-items:center;
        padding:0 20px;
        width:100%;
        justify-content:space-between;
        z-index:1;
        // top:0;
        // left:0;
        // right:0;
`
const Menu = styled.div`
        display:flex;
        align-items:center;
        flex:1;
        justify-content:center;
        a{
            font-weight:600;
            text-transform:uppercase;
            padding:0 10px;
            flex-wrap:nowrap;
        }
        @media (max-width:768px){
            display:none;
        }

`
const RightMenu = styled.div`
        display:flex;
        align-items:center;
        a{
            font-weight:600;
            text-transform:uppercase;
            margin:10px;
            flex-wrap:nowrap;
        }
`
const CustomMenu = styled(MenuIcon)`
        cursor:pointer;
`

const BurgerMenu = styled.div`
        position:fixed;
        top:0;
        bottom:0;
        right:0;
        background:white;
        width:300px;
        z-index:15;
        list-style:none;
        padding:20px;
        display:flex;
        flex-direction:column;
        text-align:start;
        justify-content:flex-start;
        transition: transform 0.2s;
        transform:${props=>props.show?'translateX(0%)':'translateX(100%)'};
        li {
            padding:15px 0px;
            border-bottom:solid rgba(0,0,0,.2)
            
        }



`
const CustomClose = styled(CloseIcon)`
        cursor:pointer;
`

const CloseWraper = styled.div`
        display:flex;
        justify-content:flex-end;
`