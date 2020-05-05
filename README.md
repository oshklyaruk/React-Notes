# React-Notes app

## Intalling
### `npm intall`
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Authorization

Good way to  authenticate user is to use OAuth2.0 specification.
There are 2 grant types that can be used in client application. The first one – password:

```
POST /oauth/token HTTP/1.1
Content-type: application/x-www-form-urlencoded
grant_type=password
&username=exampleuser
&password=1234luggage
&client_id=xxxxxxxxxx
```

Server replies with an access token.
We store this token in localStorage and send it in authorization header in the next requests.
The second way is to use grant type authorization code for sign in with the help of external accounts (Facebook, Google)
