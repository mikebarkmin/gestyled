```javascript
const styled = require('styled-components').default;
const animations = require('../src/animations');

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