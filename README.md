# Learning axios

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://github.com/axios/axios> has many more examples and API details.

Axios vs [Apollo](https://github.com/hchiam/learning-react-apollo):

- Axios = REST API
- Apollo = GraphQL API

## Pseudo-code examples

```js
axios("/some-url?id=123"); // a GET request is used by default

axios.get("/some-url?id=123").then(function (response) {});

axios.get("/some-url", { params: { id: 123 } }).then(function (response) {});

axios({
  method: "post",
  url: "/user/123",
  data: {
    firstName: "Some",
    lastName: "Body",
  },
});

axios({
  method: "get",
  url: "http://bit.ly/2mTM3nY",
  responseType: "stream",
});
```

## From scratch

Using [`yarn`](https://github.com/hchiam/learning-yarn):

```bash
yarn add axios
```

Or with `npm`:

```bash
npm install axios
```

Alternatively:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

Or:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## Starting by testing out this repo

Using [`yarn`](https://github.com/hchiam/learning-yarn): (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-axios.git && cd learning-axios && yarn;
# and then
node index.js
```

Or with `npm`: (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-axios.git && cd learning-axios && npm install;
# and then
node index.js
```

## Integration with GraphQL?

<https://stackoverflow.com/a/52868182> or <https://medium.com/@stubailo/how-to-call-a-graphql-server-with-axios-337a94ad6cf9>
