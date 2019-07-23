import React from 'react'
import { Grid } from 'semantic-ui-react'

import TextParser from './TextParser'

const NamePicIntro = (props) => {
   if (!props.user.intro){
      return(
         <span className='font-heading font-size-huge'>Loading...</span>
      )
   } else {
      return(
         <Grid stackable>
            <Grid.Column width={2} />
            <Grid.Column width={6} verticalAlign='middle'>
               <span className='text'>Hello, my name is</span>
               
               <br />
               <span className='font-heading font-size-huge'>
                  {props.user.first_name} {props.user.last_name} 
               </span>

               <br />
               <span className='font-heading font-size-medium'>{props.user.title}</span>

               <br /><br />
               <span className='text'>
                  {TextParser(props.user.intro)}
               </span>
            </Grid.Column>
            <Grid.Column width={6}>
               <img className='image-circle-portrait'
                  src={props.user.img_url} alt='portrait'></img>
            </Grid.Column>
         </Grid>
      )
   }
}

export default NamePicIntro