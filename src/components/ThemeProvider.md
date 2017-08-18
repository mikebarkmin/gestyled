```javascript
const dark = require('../theme/dark').default;
console.log(dark);
<ThemeProvider theme={dark}>
<div>
    <ButtonPrimary mr={8}>Dark Theme Primary</ButtonPrimary>
    <ButtonError mr={8}>Dark Theme Error</ButtonError>
    <ButtonInfo mr={8}>Dark Theme Info</ButtonInfo>
</div>
</ThemeProvider>
```