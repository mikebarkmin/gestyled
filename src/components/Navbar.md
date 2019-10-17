```javascript
<Navbar right="Menu" left="🐰" title="Test" />
```
Works even with other components.
```javascript
import Button from '../components/Button';

<Navbar right={<Button>Menu 1</Button>} left="🐰" title="Test" />
```
You can also you level, because this component is based on the Paper component.
```javascript
import Button from '../components/Button';

<Navbar level={4} right={<Button>Menu 1</Button>} left="🐰" title="Test" />
```
You can also change the colors.
```javascript
import Button from '../components/Button';

<Navbar level={4} bg="lightskyblue" color="dimgrey" right={<Button>Menu 1</Button>} left="🐰" title="Test" />
```