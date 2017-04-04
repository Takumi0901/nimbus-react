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
  CardBottom,
  Clamp,
  Container,
  Form,
  FormInputBox,
  FormTitle,
  Grid,
  GridCol,
  Hero,
  Label,
  Media,
  MediaContent,
  Menu,
  MenuItem,
  Nav,
  NavItem,
  Table,
  Text
} from 'renimbus'

render(
  <div className="l-wrapper">
    <Container size={false}>
      <h1>Alert</h1>
      <Alert>
        <AlertStrongText>Sed ut perspiciatis</AlertStrongText> unde omnis iste natus error sit voluptatem
      </Alert>
      <pre className="brush: html;">
{`<Alert>
  <AlertStrongText>Sed ut perspiciatis</AlertStrongText> unde omnis iste natus error sit voluptatem
</Alert>`}
</pre>
    </Container>



    <Container size={false}>
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
    </Container>



    <Container size={false}>
      <h1>Bar</h1>
      <Bar shadow={'bottom'} size={'large'} color={false} fixed={false}>
        Sed ut perspiciatis
      </Bar>
      <pre className="brush: html;">
{`<Bar shadow={'bottom'} size={'large'} color={false} fixed={false}>
  Sed ut perspiciatis
</Bar>`}
</pre>
    </Container>


    <Container size={false}>
      <h1>Button, ButtonLink</h1>
      <p><Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={'jumbo'}>Button</Button></p>
      <p><ButtonLink href={'/'} color={'secondary'} size={'jumbo'}>Button</ButtonLink></p>
      <pre className="brush: html;">
{`<Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={'jumbo'}>Button</Button>
<ButtonLink href={'/'} onClickAction={() => {console.log('hgoehgoe')}} color={'secondary'} size={'jumbo'}>Button</ButtonLink>`}
</pre>
    </Container>


    <Container size={false}>
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
    </Container>

    <Container size={false}>
      <h1>Clamp</h1>
      <Clamp size={2}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
      </Clamp>
      <pre className="brush: html;">
{`<Clamp size={2}>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
</Clamp>`}
</pre>
    </Container>

    <Container size={false}>
      <h1>Container</h1>
      <Container size={false}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
      </Container>
      <pre className="brush: html;">
{`<Container size={false}>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
</Container>`}
</pre>
    </Container>

    <Container size={false}>
      <h1>Form</h1>
      <Form>
        <FormTitle required={'必須'}>Input Title</FormTitle>
        <FormInputBox error={'必須項目'}>
          <input type="text"/>
        </FormInputBox>
      </Form>
    </Container>

    <Container size={false}>
      <h1>Grid</h1>
      <Grid gutters={true}>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <Grid gutters={true}>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <Grid gutters={true}>
        <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <Grid gutters={true}>
        <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <Grid gutters={true}>
        <GridCol size={5}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={5}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <Grid gutters={true}>
        <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <pre className="brush: html;">
{`<Grid gutters={true}>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
</Grid>

<Grid gutters={true}>
  <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
</Grid>

<Grid gutters={true}>
  <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
</Grid>

<Grid gutters={true}>
  <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
</Grid>

<Grid gutters={true}>
  <GridCol size={5}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={5}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
</Grid>

<Grid gutters={true}>
  <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
  <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
</Grid>`}
</pre>
    </Container>


    <Container size={false}>
      <h1>Hero</h1>
      <Hero type={'basic'} anim={true}>
        <h2 className="c-text--white">Hero Title</h2>
        <p className="u-mb-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        </p>
      </Hero>
      <pre className="brush: html;">
{`<Hero type={'basic'} anim={true}>
  <h2 className="c-text--white">Hero Title</h2>
  <p className="u-mb-0">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
  </p>
</Hero>`}
</pre>

      <Hero type={'image'} anim={false} image={'image/hero.jpg'}>
        <h2 className="c-text--white">Hero Title</h2>
        <p className="u-mb-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        </p>
      </Hero>

      <pre className="brush: html;">
{`<Hero type={'image'} anim={false} image={'image/hero.jpg'}>
  <h2 className="c-text--white">Hero Title</h2>
  <p className="u-mb-0">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
  </p>
</Hero>`}
</pre>
    </Container>


    <Container size={false}>
      <h1>Label</h1>
      <Label color={false}>Default</Label>
      <Label color={'primary'}>Primary</Label>
      <Label color={'secondary'}>Secondary</Label>
      <Label color={'info'}>Info</Label>
      <Label color={'highlight'}>Highlight</Label>

      <pre className="brush: html;">
{`<Label color={false}>Default</Label>
<Label color={'primary'}>Primary</Label>
<Label color={'secondary'}>Secondary</Label>
<Label color={'info'}>Info</Label>
<Label color={'highlight'}>Highlight</Label>`}
</pre>
    </Container>

    <Container size={false}>
      <h1>Media</h1>
      <Media>
        <MediaContent>
          <img src="image/thumb.jpg" alt="" width="150" height="150"/>
        </MediaContent>
        <MediaContent>
          <p className="u-mb-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          </p>
        </MediaContent>
      </Media>
      <pre className="brush: html;">
{`<Media>
  <MediaContent>
    <img src="image/thumb.jpg" alt="" width="150" height="150"/>
  </MediaContent>
  <MediaContent>
    <p class="u-mb-0">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    </p>
  </MediaContent>
</Media>`}
</pre>
    </Container>

    <Container size={false}>
      <h1>Menu</h1>
      <Menu>
        <MenuItem><a href="#">Menu1</a></MenuItem>
        <MenuItem><a href="#">Menu2</a></MenuItem>
        <MenuItem><a href="#">Menu3</a></MenuItem>
        <MenuItem><a href="#">Menu4</a></MenuItem>
      </Menu>

      <pre className="brush: html;">
{`<Menu>
  <MenuItem><a href="#">Menu1</a></MenuItem>
  <MenuItem><a href="#">Menu2</a></MenuItem>
  <MenuItem><a href="#">Menu3</a></MenuItem>
  <MenuItem><a href="#">Menu4</a></MenuItem>
</Menu>`}
</pre>
    </Container>


    <Container size={false}>
      <h1>Nav</h1>
      <Nav size={'medium'}>
        <NavItem><a href="#">Nav1</a></NavItem>
        <NavItem><a href="#">Nav2</a></NavItem>
        <NavItem><a href="#">Nav3</a></NavItem>
        <NavItem><a href="#">Nav4</a></NavItem>
      </Nav>

      <pre className="brush: html;">
{`<Nav size={'medium'}>
  <NavItem><a href="#">Nav1</a></NavItem>
  <NavItem><a href="#">Nav2</a></NavItem>
  <NavItem><a href="#">Nav3</a></NavItem>
  <NavItem><a href="#">Nav4</a></NavItem>
</Nav>`}
</pre>


      <Nav size={'medium'} itemLength={4}>
        <NavItem><a href="#">Nav1</a></NavItem>
        <NavItem><a href="#">Nav2</a></NavItem>
        <NavItem><a href="#">Nav3</a></NavItem>
        <NavItem><a href="#">Nav4</a></NavItem>
      </Nav>

      <pre className="brush: html;">
{`<Nav size={'medium'} itemLength={4}>
  <NavItem><a href="#">Nav1</a></NavItem>
  <NavItem><a href="#">Nav2</a></NavItem>
  <NavItem><a href="#">Nav3</a></NavItem>
  <NavItem><a href="#">Nav4</a></NavItem>
</Nav>`}
</pre>

    </Container>


    <Container size={false}>
      <h1>Table</h1>
      <Table type={'basic'}>
        <tbody>
        <tr>
          <th>title</th>
          <td>description</td>
        </tr>
        <tr>
          <th>title</th>
          <td>description</td>
        </tr>
        <tr>
          <th>title</th>
          <td>description</td>
        </tr>
        <tr>
          <th>title</th>
          <td>description</td>
        </tr>
        </tbody>
      </Table>

      <pre className="brush: html;">
{`<Table type={'basic'}>
 <tbody>
   <tr>
     <th>title</th>
     <td>description</td>
   </tr>
   <tr>
     <th>title</th>
     <td>description</td>
   </tr>
   <tr>
     <th>title</th>
     <td>description</td>
   </tr>
   <tr>
     <th>title</th>
     <td>description</td>
   </tr>
 </tbody>
</Table>`}
</pre>
      <Table type={'separate'}>
        <thead>
        <tr>
          <th>Title1</th>
          <th>Title2</th>
          <th>Title3</th>
          <th>Title4</th>
          <th>Title5</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td data-label="Title1">description1</td>
          <td data-label="Title2">description2</td>
          <td data-label="Title3">description3</td>
          <td data-label="Title4">description4</td>
          <td data-label="Title5">description5</td>
        </tr>
        <tr>
          <td data-label="Title1">description1</td>
          <td data-label="Title2">description2</td>
          <td data-label="Title3">description3</td>
          <td data-label="Title4">description4</td>
          <td data-label="Title5">description5</td>
        </tr>
        </tbody>
      </Table>

      <pre className="brush: html;">
{`<Table type={'separate'}>
  <thead>
  <tr>
    <th>Title1</th>
    <th>Title2</th>
    <th>Title3</th>
    <th>Title4</th>
    <th>Title5</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td data-label="Title1">description1</td>
    <td data-label="Title2">description2</td>
    <td data-label="Title3">description3</td>
    <td data-label="Title4">description4</td>
    <td data-label="Title5">description5</td>
  </tr>
  <tr>
    <td data-label="Title1">description1</td>
    <td data-label="Title2">description2</td>
    <td data-label="Title3">description3</td>
    <td data-label="Title4">description4</td>
    <td data-label="Title5">description5</td>
  </tr>
  </tbody>
  </Table>`}
</pre>

      <Table type={'overflow'}>
        <thead>
        <tr>
          <th>Type</th>
          <th>Color</th>
          <th>Price</th>
          <th>Area</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Apple</td>
          <td>Red</td>
          <td>200</td>
          <td>Aomori</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>Orange</td>
          <td>350</td>
          <td>Ehime</td>
        </tr>
        <tr>
          <td>Grape</td>
          <td>Purple</td>
          <td>400</td>
          <td>Yamanasi</td>
        </tr>
        <tr>
          <td>Melon</td>
          <td>Yellow green</td>
          <td>800</td>
          <td>hokkaido</td>
        </tr>
        </tbody>
      </Table>

      <pre className="brush: html;">
{`<Table type={'overflow'}>
  <thead>
  <tr>
    <th>Type</th>
    <th>Color</th>
    <th>Price</th>
    <th>Area</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Apple</td>
    <td>Red</td>
    <td>200</td>
    <td>Aomori</td>
  </tr>
  <tr>
    <td>Orange</td>
    <td>Orange</td>
    <td>350</td>
    <td>Ehime</td>
  </tr>
  <tr>
    <td>Grape</td>
    <td>Purple</td>
    <td>400</td>
    <td>Yamanasi</td>
  </tr>
  <tr>
    <td>Melon</td>
    <td>Yellow green</td>
    <td>800</td>
    <td>hokkaido</td>
  </tr>
  </tbody>
</Table>`}
</pre>

    </Container>



    <Container size={false}>
      <h1>Label</h1>
      <p><Text color={false}>Default</Text></p>
      <p><Text color={'primary'}>Primary</Text></p>
      <p><Text color={'secondary'}>Secondary</Text></p>
      <p><Text color={'info'}>Info</Text></p>
      <p><Text color={'highlight'}>Highlight</Text></p>

      <pre className="brush: html;">
{`<Text color={false}>Default</Text>
<Text color={'primary'}>Primary</Text>
<Text color={'secondary'}>Secondary</Text>
<Text color={'info'}>Info</Text>
<Text color={'highlight'}>Highlight</Text>`}
</pre>

    </Container>

  </div>,
  document.querySelector('#root')
)