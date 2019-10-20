```javascript
import ButtonError from '../components/ButtonError';
import ButtonInfo from '../components/ButtonInfo';
import ButtonPrimary from '../components/ButtonPrimary';

const dark = require('../themes/dark').default;
<ThemeProvider theme={dark}>
<div>
    <ButtonPrimary mr={8}>Dark Theme Primary</ButtonPrimary>
    <ButtonError mr={8}>Dark Theme Error</ButtonError>
    <ButtonInfo mr={8}>Dark Theme Info</ButtonInfo>
</div>
</ThemeProvider>
```