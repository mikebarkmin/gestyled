```javascript
import Button from '../components/Button';

const open = false;
class DrawerContainer extends React.Component {
    constructor(props) {
        this.state = {
            open: false
        }
    }
    toggleOpen() {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return <div>
    <Drawer onRequestClosed={this.toggleOpen.bind(this)} open={this.state.open}>This is a drawer</Drawer>
    <Button onClick={this.toggleOpen.bind(this)}>Open Drawer</Button>
        </div>
    }
}

<DrawerContainer />
```
Right Drawer
```javascript
import Button from '../components/Button';

const open = false;
class DrawerContainer extends React.Component {
    constructor(props) {
        this.state = {
            open: false
        }
    }
    toggleOpen() {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return <div>
    <Drawer right onRequestClosed={this.toggleOpen.bind(this)} open={this.state.open}>This is a drawer</Drawer>
    <Button onClick={this.toggleOpen.bind(this)}>Open Right Drawer</Button>
        </div>
    }
}

<DrawerContainer />
```