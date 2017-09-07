```javascript
<Stepper steps={5} stepper={StepperDots} />
```
StepperDots with disable next.
```javascript
<Stepper active={4} steps={5} stepper={StepperDots} disableNext />
```
StepperDots with disable back.
```javascript
<Stepper active={3} steps={5} stepper={StepperDots} disableBack />
```
StepperDots with custom labels.
```javascript
<Stepper active={3} steps={5} stepper={StepperDots} backLabel="⛄" nextLabel="🔥" />
```
StepperDots with callbacks.
```javascript
class StepperDotsExample extends React.Component {
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
                stepper={StepperDots}
                disableNext={this.state.active === 4}
                disableBack={this.state.active === 0}
                onNext={() => console.log('this is hot')}
                onBack={() => console.log('cold like frosty the snowman')}
                onChange={this.onChange.bind(this)} />
        )
    }
}

<StepperDotsExample />
```