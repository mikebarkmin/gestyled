<div class="pathline-0-55">import { grow } from 'gestyled/lib/animations/hover';</div>
<div class="pathline-0-55">
const AnimatedButton = styled.button([], grow);</div><br />



```javascript
const styled = require('styled-components').default;
const animations = require('./index.js');

const animationExamples = []
for(let key in animations) {
    if(animations.hasOwnProperty(key)) {
        const animation = animations[key];
        const AnimatedButton = styled(ButtonPrimary)([], animation);
        animationExamples.push(
            <AnimatedButton key={key} m={5}>
                {key}
            </AnimatedButton>
        )
    }
}
<div>
    {animationExamples}
</div>
```