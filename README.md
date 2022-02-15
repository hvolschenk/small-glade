# Small Glade

_Small Glade_, a survival game.

* [Setup][]
* [Architecture][]

## Setup
[Setup]: #setup

Start the application through [docker-compose][]:

```sh
$ docker-compose up -d
```

The application will run on [http://localhost:4989][].

Dependencies will be installed at build-time into the [Docker][] container. If you need to use
dependencies locally (like using [ESLint][] or [Prettier][] in your editor) you can install them
through [npm][]:

```sh
$ npm install
```

## Architecture
[Architecture]: #architecture

`/engine`

The engine, an orchestrator, mapping events to state updates. Essentially a rule-engine. Each
event runs a list of validations, ensuring the event is allowed to run. Then a handler function
which dispatches the correct state updaters. Then a list of effects, each triggering an event.

`/models`

The list of models/entities shared between all aspects of the application.

`/renderer`

Renders state into the DOM. Rather straight-forward.

`/store`

Where the full state is stored. State using [redux][], updaters using [redux-saga][].

---

[Docker]: https://www.docker.com/
[ESLint]: https://eslint.org/
[http://localhost:4989]: http://localhost:4989
[npm]: https://www.npmjs.com/
[Prettier]: https://prettier.io/
[redux]: https://redux.js.org/
[redux-saga]: https://redux-saga.js.org/
