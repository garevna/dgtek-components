# dgtek-popup

<sup>This component is designed to be utilized in dgtek.net projects only.<br>
It should not be used outside the dgtek.net and landing pages of **dgtek.net**</sup>

## Install the component

```
yarn add dgtek-popup
```

#### Add with <script> tag
###### (Not recommended)
```
<script src="https://registry.npmjs.org/dgtek-popup"></script>
```

## Import the component and it's styles

###### It'll be the global component Popup

```
import 'dgtek-popup'
import 'dgtek-popup/dist/dgtek-popup.css'
```

### Node.js

```
const Popup = require('dgtek-popup')
const PopupStyles = require('dgtek-popup/dist/dgtek-popup.css')
```

## Usage

###### Success (form has been submitted)
```
<Popup type="success" :opened="popupOpened" />
```
###### Error (contact form error)
```
<Popup type="error" :opened="popupOpened" />
```
###### Disabled (contact form submission is disabled)
```
<Popup type="disabled" :opened="popupOpened" />
```
###### Any other message

You can send any info to component Popup through the prop `data`
```
<Popup :data="popupContent" :opened="popupOpened" />
```
where
```
popupContent: {
  header: '...',
  color: '#000',
  text: '...'
}
```

________________________

#### You can add the global styles and fonts to the project from this package

You can install the fonts and variables of pineapple.net.au projects so:

###### main.js
```
import 'pineapple-popup/css/fonts.scss'
import 'pineapple-popup/css/variables.scss'
```

You can install global styles of pineapple.net.au projects so:

###### App.vue
```
import 'pineapple-popup/css/main.css'
```
