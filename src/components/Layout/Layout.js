import React from 'react'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import Navbar from '../Navigation/Navbar/Navbar'

const Layout= (props)=>{
    return (<Wrapper><Navbar/><main>{props.children}</main></Wrapper>)
}

export default Layout