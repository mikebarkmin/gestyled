All components are wrapped in a higher order component that handles design-system-based responsive style props using [styled-system](https://github.com/jxnblk/styled-system).

This idea is based on jxnblk's awesome functional React UI component library [rebass](https://github.com/jxnblk/rebass), which is also based on [styled-components](http://styled-components.com).

## Width
Numbers from 0-1 are converted to percentage widths
```javascript
<Paper width={1/2} bg='coral'>Half Width</Paper>
```
Arrays can be used for mobile-first responsive styles
```javascript
<Paper width={[1, 1/2, 1/4]} bg='coral'>Responsive</Paper>
```

## Font Size
Numbers are used to reference steps on the typographic scale. This can be set in theme.fontSizes.
```javascript
<Paper fontSize={5}>Font Sizes</Paper>
```
Numbers greater than the length of the typographics scale are converted to pixels
```javascript
<Paper fontSize={18}>Font Sizes</Paper>
```
Arrays can be used for mobile-first responsive styles
```javascript
<Paper fontSize={[3, 4, 5]}>Responsive</Paper>
```

## Margin and Padding
* `m`: margin
* `mt`: margin-top
* `mr`: margin-right
* `mb`: margin-bottom
* `ml`: margin-left
* `mx`: margin-left and margin-right
* `my`: margin-top and margin-bottom
* `p`: padding
* `pt`: padding-top
* `pr`: padding-right
* `pb`: padding-bottom
* `pl`: padding-left
* `px`: padding-left and padding-right
* `py`: padding-top and padding-bottom

Arrays can be used for mobile-first responsive styles
```javascript
<div>
<Paper mb={20} mr={[0, 10]} width={[1, 1/3]} bg='coral'>Paper 1</Paper>
<Paper p={20} width={[1, 1/3]} bg='lime'>Paper 2</Paper>
</div>
```
## Colors
Background color can be set with the `bg` prop
```javascript
<Paper bg="crimson" width={1}>Crimson</Paper>
```
Text color can be set with the `color` prop
```javascript
<Paper bg="crimson" color="white" width={1}>Crimson</Paper>
```
Arrays can be used to change colors responsively
```javascript
<Paper bg={["crimson","lightskyblue"]} color={["white", "dimgrey"]} width={1}>Responsive</Paper> 
```