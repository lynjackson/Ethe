import React from 'react';
import {HeaderMobile, HeaderDesktop} from '../components/header';
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import '../styles/lyn/lyn.css'
// import '../styles/css/pages.css'
import {ContactLink} from '../components/lyn/contact-link'
import {Profile_Mobile, Profile, Stack, Portfolio, Experience, Education, More} from '../components/lyn/lyn-components'
import {Stack_Mobile, Stack_Desktop} from '../components/lyn/stack'
import {Portfolio_Mobile, Portfolio_Desktop} from '../components/lyn/portfolio'
// import {Experience, Experience_Desktop} from '../components/lyn/experience'
// import {Education} from '../components/lyn/education';
// import {More} from '../components/lyn/more';


export const Lyn2 = ()=>{
  return(
    <div id='page_lyn'>
      <Profile />
      <div id='right-side'>
        <Portfolio />
        <Experience />
        <Education />
        <More />
      </div>
    </div>
  )
}
