```javascript
import Stepper from '../components/Stepper';

<Stepper steps={5} stepper={StepperText} />
```
StepperText with disable next.
```javascript
import Stepper from '../components/Stepper';

<Stepper active={4} steps={5} stepper={StepperText} disableNext />
```
StepperText with disable back.
```javascript
import Stepper from '../components/Stepper';

<Stepper active={3} steps={5} stepper={StepperText} disableBack />
```
StepperText with custom labels.
```javascript
import Stepper from '../components/Stepper';

<Stepper active={3} steps={5} stepper={StepperText} backLabel="⛄" nextLabel="🔥" />
```
StepperText with callbacks.
```javascript
import Stepper from '../components/Stepper';

class StepperTextExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }
    onChange(active) {
        this.setState({
            active
        })
    }
    render() {
        return (
            <Stepper
                active={this.state.active}
                steps={5}
                backLabel="⛄"
                nextLabel="🔥"
                stepper={StepperText}
                disableNext={this.state.active === 4}
                disableBack={this.state.active === 0}
                onNext={() => console.log('this is hot')}
                onBack={() => console.log('cold like frosty the snowman')}
                onChange={this.onChange.bind(this)} />
        )
    }
}

<StepperTextExample />
```