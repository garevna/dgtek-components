# dgtek-popup

This component is designed to be utilized in dgtek.net projects only.

It should not be used outside the dgtek.net and landing pages of **dgtek.net**

## Install the component

```js
yarn add dgtek-popup
```

#### Add with _script_ tag

###### (Not recommended)
```html
<script src="https://registry.npmjs.org/dgtek-popup"></script>
```

## Import the component and it's styles

###### It'll be the global component Popup

```js
import 'dgtek-popup'
import 'dgtek-popup/dist/dgtek-popup.css'
```

### Node.js

```js
const Popup = require('dgtek-popup')
const PopupStyles = require('dgtek-popup/dist/dgtek-popup.css')
```

## Usage

###### Success (form has been submitted)
```html
<Popup type="success" :opened="popupOpened" />
```
###### Error (contact form error)
```html
<Popup type="error" :opened="popupOpened" />
```
###### Disabled (contact form submission is disabled)
```html
<Popup type="disabled" :opened="popupOpened" />
```
###### Any other message

You can send any info to component Popup through the prop `data`
```html
<Popup :data="popupContent" :opened="popupOpened" />
```
where
```js
popupContent: {
  header: '...',
  color: '#000',
  text: '...'
}
```
