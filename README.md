<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">DahvidClient</h3>

  <p align="center">
    A riot games typescript api wrapper
    <br />
    <a href="https://github.com/supesu/DahvidClient"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/supesu/DahvidClient/issues">Report Bug</a>
    ·
    <a href="https://github.com/supesu/DahvidClient/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
DahvidClient is a typescript Riot API wrapper aimed at providing a simplistic way to access the riot API, with typings.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [axios](https://github.com/axios/axios)
* [Typescript](https://www.typescriptlang.org/)
* [Rollup](https://rollupjs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisites

Obtain a riot API token, this can be obtained from (https://developer.riotgames.com/). Place this token in your environmental variabes for your serveror into a `.env` file.


### Installation

```
npm install --save dahvidclient
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Base:
```js
const { DahvidClient } = require("dahvidclient");
```
Example Application (with env):
```
npm install --save-dev dotenv
```
```
// .env
RIOT_API_KEY=YOUR_API_KEY_HERE
```
```js
// index.js
const { DahvidClient, RegionToContinentMap } = require("dahvidclient");

const api = new DahvidClient({ apiKey: process.env.RIOT_API_KEY });

(async () => {
  const summoner = await api.summoner.byName("possum2002", "oce") // get account information
  const cairoPuuid = summoner.puuid; 
  const matchList = await api.match.byPuuid(cairoPuuid, RegionToContinentMap["oce"], { count: 1 }); // get the most recent game id
  const match = await api.match.matchById(matchList[0], RegionToContinentMap["oce"]); // get match information with game id
  const cairo = match.info.participants.find((p) => p.puuid === cairoPuuid); 
  
  console.log(`KDA: ${cairo.kills} / ${cairo.deaths} / ${cairo.assists}`)
})();
```
```sh
node -r dotenv/config index.js
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Finish mapping API to /src/resources
- [ ] Queue & rate limiting 
- [ ] Better Documentation & examples

See the [open issues](https://github.com/supesu/DahvidClient/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the ISC License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Kian Merchant - [@supesuOCE](https://twitter.com/supesuOCE) - supesu.dev@gmail.com

Project Link: [https://github.com/supesu/DahvidClient](https://github.com/supesu/DahvidClient)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Squire Pug](https://twitter.com/EmJaeCaer) Helped in starting this journey (introduction to axios).
* [Akahu SDK](https://github.com/akahu-io/akahu-sdk-js) this project is built ontop of the amazing work they did.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/supesu/DahvidClient.svg?style=for-the-badge
[contributors-url]: https://github.com/supesu/DahvidClient/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/supesu/DahvidClient.svg?style=for-the-badge
[forks-url]: https://github.com/supesu/DahvidClient/network/members
[stars-shield]: https://img.shields.io/github/stars/supesu/DahvidClient.svg?style=for-the-badge
[stars-url]: https://github.com/supesu/DahvidClient/stargazers
[issues-shield]: https://img.shields.io/github/issues/supesu/DahvidClient.svg?style=for-the-badge
[issues-url]: https://github.com/supesu/DahvidClient/issues
[license-shield]: https://img.shields.io/github/license/supesu/DahvidClient.svg?style=for-the-badge
[license-url]: https://github.com/Supesu/dahvidclient/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png