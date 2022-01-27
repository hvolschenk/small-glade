# Small Glade

_Small Glade_, a survival game.

* [Setup][]
  * [Setup environment][]
  * [Start application][]
* [Architecture][]

## Setup
[Setup]: #setup

### Setup environment
[Setup environment]: #setup-environment

First, set up the necessary environment variables by copying the `.env.example` file to `.env`:

```sh
$ cp .env.example .env
```

After copying the file, fill in the necessary values.

### Start application
[Start application]: #start-application

Start the application through [docker-compose][]:

```sh
$ docker-compose up -d
```

The application will run on [http://localhost:4989][]

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

[http://localhost:4989]: http://localhost:4989
[redux]: https://redux.js.org/
[redux-saga]: https://redux-saga.js.org/
