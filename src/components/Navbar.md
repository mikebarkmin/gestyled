```javascript
<Navbar right="Menu" left="🐰" title="Test" />
```
Works even with other components.
```javascript
<Navbar right={<Button>Menu 1</Button>} left="🐰" title="Test" />
```
You can also you level, because this component is based on the Paper component.
```javascript
<Navbar level={4} right={<Button>Menu 1</Button>} left="🐰" title="Test" />
```