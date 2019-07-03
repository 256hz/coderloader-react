import React from 'react'
import { Grid } from 'semantic-ui-react'


const NamePicIntro = (props) => {
   if (!props.user.intro){
      return(
         <span className="heading-font font-size-huge">Loading...</span>
      )
   } else {
      let words = props.user.intro.split(" ")
      return(
         <Grid stretched stackable>
            <Grid.Column width={2} />
            <Grid.Column width={6}>
                  <div>Hello, my name is <br /> <br /></div>

                  <div className="heading-font font-size-huge">
                     {props.user.first_name} {props.user.last_name} <br />
                  </div>

               <div className="emphasis">{props.user.title}</div>

               <div>
                  {words.map( word => {
                      return word.includes('http://')
                        ? <a href={word} target="_blank" rel="noopener noreferrer">{word.slice(7) + " "}</a>
                        : word + " "
                  })}
               </div>
            </Grid.Column>
            <Grid.Column width={6}>
               <img className="image-circle-portrait"
                  src={props.user.img_url} alt="portrait"></img>
            </Grid.Column>
         </Grid>
      )
   }
}

export default NamePicIntro