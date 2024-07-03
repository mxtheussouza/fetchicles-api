<p align="center">
  <a href="" rel="noopener">
    <img width=200px height=200px src="https://i.imgur.com/G5h7EoT.png">
 </a>
</p>

<h1 align="center">Fetchicles API</h1>

<p align="center">
  This API was created to return all brands and models of vehicles in the world.
</p>

<div align="center">
    <a>
        <img src="https://img.shields.io/badge/status-active-success.svg">
    </a>
    <a href="https://github.com/mxtheussouza/fetchicles-api/issues">
        <img src="https://img.shields.io/github/issues/mxtheussouza/fetchicles-api">
    </a>
    <a href="https://github.com/mxtheussouza/fetchicles-api/pulls">
        <img src="https://img.shields.io/github/issues-pr/mxtheussouza/fetchicles-api">
    </a>
</div>

## Installing

Clone this repository.

```
git clone https://github.com/mxtheussouza/fetchicles-api
```

Change directory.

```
cd fetchicles-api
```

You need have install nodejs and yarn as package manager.

Run yarn to install dependencies.

```
yarn
```

If you wanna run this API on development environment.

```
yarn dev
```

Case you wanna use this project just with API in your production environment, build this project and run.

```
yarn build && yarn start
```

## Usage

This API have related routes with vehicles. By default, the routes have a prefix before calling methods of the yours vehicles.

```
<BASE_URL>/api/brands/<vehicle>
```

I'll show some examples with vehicle CAR.

Case the user want return all car brands, he need calling the following route:

```
<BASE_URL>/api/brands/car
```

If the user want return a specific car model of some brand, he need calling the following route (**Brand name always be in lowercase**):

```
<BASE_URL>/api/brands/car/<brand>
```

This will be standard for all vehicles.

**Vehicles types available:**

- CAR
- MOTORCYCLE
-

## How to contribute

Read our [contribution](/CONTRIBUTING.md) guide.

## Contributors

<a href="https://github.com/mxtheussouza/fetchicles-api/graphs/contributors"><img src="https://contrib.rocks/image?repo=mxtheussouza/fetchicles-api" /></a>

## Author

| [<img src="https://avatars.githubusercontent.com/u/61164981?v=3&s=115"><br><sub>@mxtheussouza</sub>](https://github.com/mxtheussouza) |
| :-----------------------------------------------------------------------------------------------------------------------------------------: |

## LICENSE

This repository use [MIT License](/LICENSE).
