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
               <div className='text'>Hello, my name is</div>
               <br />
               <div className='font-heading font-size-huge'>
                  {props.user.first_name} {props.user.last_name} 
               </div>
               <div className='font-heading font-size-medium'>{props.user.title}</div>
               <br />

               <div className='text'>
                  {TextParser(props.user.intro)}
               </div>
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