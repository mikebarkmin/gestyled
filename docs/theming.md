Theming is really easy thanks to styled-components built in [theming](https://www.styled-components.com/docs/advanced#theming) support.

```javascript
import ButtonPrimary from '../src/components/ButtonPrimary';
import ThemeProvider from '../src/components/ThemeProvider';

<ThemeProvider theme={{
    colors: {
        primary: 'pink'
    }
}}>
    <ButtonPrimary>Change my color with a custom theme</ButtonPrimary>
</ThemeProvider>
```