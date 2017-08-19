Theming is really easy thanks to styled-components built in [theming](https://www.styled-components.com/docs/advanced#theming) support.

```javascript
<ThemeProvider theme={{
    colors: {
        primary: 'pink'
    }
}}>
    <ButtonPrimary>Change my color with a custom theme</ButtonPrimary>
</ThemeProvider>
```