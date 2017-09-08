```javascript
<Chip>This is a chip</Chip>
```
With delete event
```javascript
<Chip onDelete={() => console.log('delete')}>This is a chip</Chip>
```
Colored chip
```javascript
<Box>
    <Chip bg="coral" onDelete={() => console.log('delete')}>This is a chip</Chip>
    <Chip color="white" bg="blue" onDelete={() => console.log('delete')}>This is a chip</Chip>
</Box>
```
With onClick event
```javascript
<Chip onClick={() => console.log('click')}>This is a chip</Chip>
```