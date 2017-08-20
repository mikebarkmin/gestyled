```javascript
<Tabs>
    <LabeledContainer label="Tab 1">Test</LabeledContainer>
    <LabeledContainer label="Tab 2">Test 2</LabeledContainer>
</Tabs>
```
Tabs can also have a shadow level
```javascript
<Tabs level={2}>
    <LabeledContainer label="Tab 1">
        <Container pt={3}>
            Test
        </Container>
    </LabeledContainer>
    <LabeledContainer label="Tab 2">
        <Container pt={3}>
            Test 2
        </Container>
    </LabeledContainer>
</Tabs>
```