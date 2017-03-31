import 'renimbus/public/css/app.css'
import React from 'react'
import {render} from 'react-dom'

import {
  Alert,
  AlertStrongText,
  Avatar,
  Bar,
  Button,
  ButtonLink,
  Card,
  CardHeader,
  CardContent,
  CardBottom
} from 'renimbus'

render(
  <div className="l-wrapper">
    <div className="c-container">
      <h1>Alert</h1>
      <Alert>
        <AlertStrongText>Sed ut perspiciatis</AlertStrongText> unde omnis iste natus error sit voluptatem
      </Alert>
<pre className="brush: html;">
{`<Alert>
  <AlertStrongText>Sed ut perspiciatis</AlertStrongText> unde omnis iste natus error sit voluptatem
</Alert>`}
</pre>
    </div>


    
    <div className="c-container">
      <h1>Avatar</h1>
      <Avatar size={'medium'}>
        <img src="image/thumb.jpg" alt=""/>
      </Avatar>
<pre className="brush: html;">
{`
<Avatar size={'medium'}>
  <img src="image/thumb.jpg" alt=""/>
</Avatar>
`}
</pre>
    </div>



    <div className="c-container">
      <h1>Bar</h1>
      <Bar shadow={'bottom'} size={'large'} color={false} fixed={false}>
        Sed ut perspiciatis
      </Bar>
<pre className="brush: html;">
{`<Bar shadow={'bottom'} size={'large'} color={false} fixed={false}>
  Sed ut perspiciatis
</Bar>`}
</pre>
    </div>


    <div className="c-container">
      <h1>Button, ButtonLink</h1>
      <p><Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={'jumbo'}>Button</Button></p>
      <p><ButtonLink href={'/'} color={'secondary'} size={'jumbo'}>Button</ButtonLink></p>
<pre className="brush: html;">
{`<Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={'jumbo'}>Button</Button>
<ButtonLink href={'/'} onClickAction={() => {console.log('hgoehgoe')}} color={'secondary'} size={'jumbo'}>Button</ButtonLink>`}
</pre>
    </div>


    <div className="c-container">
      <h1>Card</h1>
       <Card>
         <CardHeader>
           <h3 className="u-mb-0">Title</h3>
         </CardHeader>
         <CardContent>
           <p className="u-mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
         </CardContent>
         <CardBottom>
           <p className="u-mb-0">Bottom</p>
         </CardBottom>
       </Card>
<pre className="brush: html;">
{`<Card>
   <CardHeader>
     <h3 className="u-mb-0">Title</h3>
   </CardHeader>
   <CardContent>
     <p className="u-mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
   </CardContent>
   <CardBottom>
     <p className="u-mb-0">Bottom</p>
   </CardBottom>
</Card>`}
</pre>
    </div>

  </div>,
  document.querySelector('#root')
)