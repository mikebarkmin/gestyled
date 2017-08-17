```javascript
<Card>
    <CardHeader title="User" subtitle="Subtitle" avatar="https://www.gravatar.com/avatar/00000000000000000000000000000000"/>
    <CardMedia overlay={<CardTitle title="Caption" subtitle="Subcaption" />}>
    <img width="100%" src="https://unsplash.it/400/200/?random"/>
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" ></CardTitle>
    <CardText>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </CardText>
    <CardActions>
        <Button>Erster</Button>
    </CardActions>
</Card>
```

Card uses the Paper component, so you can set other shadow levels

```javascript
<Card level={4}>
    <CardHeader title="User" subtitle="Subtitle" avatar="https://www.gravatar.com/avatar/00000000000000000000000000000000"/>
    <CardMedia overlay={<CardTitle title="Caption" subtitle="Subcaption" />}>
    <img width="100%" src="https://unsplash.it/400/200/?random"/>
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" ></CardTitle>
    <CardText>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </CardText>
    <CardActions>
        <Button>Erster</Button>
    </CardActions>
</Card>
```