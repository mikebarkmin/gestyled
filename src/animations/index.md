## Combine Animations

```javascript
const styled = require('styled-components').default;
const pulse = require('./hover/pulse.js').default;
const ripple = require('./active/ripple.js').default;

const AnimatedButton = styled(ButtonPrimary)([], pulse, ripple);

<AnimatedButton full>Combined animations</AnimatedButton>
```