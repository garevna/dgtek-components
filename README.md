# dgtek-contact-form

This component is designed to be utilized in dgtek.net projects only.

It can't be used outside the dgtek.net and landing pages of dgtek.net

#### Warning:

This component uses **dgtek-popup** component

You should install it for the normal work of Contact Form:

```
yarn add dgtek-popup
```

and then import it in your app:
```
import dgtek-popup
```

____________________________________________

## install component
```
yarn add dgtek-contact-form
```

### Load the component and it's styles

App.vue
```
import 'dgtek-contact-form'
import 'dgtek-contact-form/dist/dgtek-contact-form.css'
```

### Use the component

```
<UserContact
    :userForm="userForm"
    :emailSubject="emailSubject"
    :emailText="emailText"
    :emailEndpoint="emailEndpoint"
/>
```

#### emailEndpoint

Backend API endpoint to send data from the form

_____________________________________________

## userForm
###### Fields of Form

For normal work this component waits for the **userForm** object

This object should contain such a props:

* title (string)
* button (string)
* fieldsToShow (array of objects)

**button** prop is the text that will be shown on the submit button face

#### fieldsToShow

is array of objects

Each object describes the form field
```
{
  placeholder: '...', /* String | required */
  type: '...', /* String | required! */
  required: false, /* Boolean */
  available: [...] /* Array of available values for the field | optional, for combo and list types only */
}
```

#### Field types

* text - simple text input field
* number - simple number input field
* email - input field with validation
* postcode - input field with validation of australian post codes
* state - selection field with validation of australian states
* phone - field with validation of australian phone numbers
* date
* time (AM/PM)
* combo - input field with validation from the list of available values (_**available**_)
* list - selection field from the list of available values (_**available**_)
* message - textarea
