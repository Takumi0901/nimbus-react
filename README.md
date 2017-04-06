## The feature of Nimbus

component which can be used in a project of React + Redux in general-purpose way mainly was made.

## install

```
$ npm install nimbus-react
```

### import sample

#### index.js

```
import 'nimbus-react/public/css/app.css'
```

#### component/Content.js

```
import {Button} from 'nimbus-react'

export default class App extends React.Component {
    render() {
        return (
            // ボタンを追加する
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={false} size={false}>Button</Button>
        );
    }
}

```

## PostCSS

CSS is being changed using PostCSS in Nimbus.CSS holds a used plug-in at a minimum to avoid the one of being too to will be in the original specification.

- postcss-cssnext
- postcss-import
- cssnano

## Responsive & Mobile first

The grid system is flexbox based. So it's simple and excellent than the float layout! Same height box, Reverse grid, Equal spacing layout and more.

## Component which is often used was collected.

component which is often used by a corporate site was collected. It's possible to button up the favorite color and size by changing the color and the size which become a basis.

## CSS Architecture

The architecture of CSS in Nimbus is based on FLOCSS. There is variables.css which manages a variable of CSS by a core directory. It's made compilation now using Gulp.

```
├ core/
├ foundation/
├ layout/
└ object/
  ├ component/
  ├ project/
  └ utility/
```

## License

Nimbus licensed under MIT. Nimbus is absolutely free for personal or commercial use.
