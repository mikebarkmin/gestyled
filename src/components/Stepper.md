This is the base component for a stepper. It should be used in conjunction with one of the other stepper components or you could implement your own.

```javascript
<Stepper steps={5} />
```
Stepper with disable next.
```javascript
<Stepper active={4} steps={5} disableNext />
```
Stepper with disable back.
```javascript
<Stepper active={3} steps={5} disableBack />
```
Stepper with custom labels.
```javascript
<Stepper active={3} steps={5} backLabel="⛄" nextLabel="🔥" />
```
Stepper with callbacks.
```javascript
class StepperExample extends React.Component {
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
                disableNext={this.state.active === 4}
                disableBack={this.state.active === 0}
                onNext={() => console.log('this is hot')}
                onBack={() => console.log('cold like frosty the snowman')}
                onChange={this.onChange.bind(this)} />
        )
    }
}

<StepperExample />
```