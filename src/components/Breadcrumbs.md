```javascript
<Breadcrumbs breadcrumbs={[
{
    label: 'home',
    href: '#!'
},
{
    label: 'page 1',
    href: '#!'
},
{
    label: 'page 2',
    href: '#!'
}
]} />
```
Fan
```javascript
import Paper from '../components/Paper';

<Paper p={10} width="100%" style={{ textAlign: 'center' }} bg="coral">
<Breadcrumbs fontSize={3} color="white" breadcrumbs={[
{
    label: 'home',
    href: '#!',
    onClick: value => console.log(value)
},
{
    label: 'page 1',
    href: '#!',
    active: true,
    onClick: value => console.log(value)
},
{
    label: 'page 2',
    href: '#!',
    onClick: value => console.log(value)
}
]} />
</Paper>
```