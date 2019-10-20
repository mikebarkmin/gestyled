```javascript
import Button from '../components/Button';
import CardActions from '../components/CardActions';
import CardHeader from '../components/CardHeader';
import CardMedia from '../components/CardMedia';
import CardText from '../components/CardText';
import CardTitle from '../components/CardTitle';

<Card>
    <CardHeader 
        title="User"
        subtitle="Subtitle"
        avatar="https://www.gravatar.com/avatar/0" />
    <CardMedia title="Caption" subtitle="Subcaption">
        <img width="100%" src="https://unsplash.it/400/200/?random"/>
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </CardText>
    <CardActions>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
    </CardActions>
</Card>
```

Card uses the Paper component, so you can set other shadow levels

```javascript
import Button from '../components/Button';
import CardActions from '../components/CardActions';
import CardHeader from '../components/CardHeader';
import CardMedia from '../components/CardMedia';
import CardText from '../components/CardText';
import CardTitle from '../components/CardTitle';

<Card level={4}>
    <CardHeader
        title="User"
        subtitle="Subtitle"
        avatar="https://www.gravatar.com/avatar/0" />
    <CardMedia title="Caption" subtitle="Subcaption">
        <img width="100%" src="https://unsplash.it/400/200/?random"/>
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </CardText>
    <CardActions>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
    </CardActions>
</Card>
```