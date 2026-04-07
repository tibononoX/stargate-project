# Stargate REACT

Personal project aimed at recreating an interactive dialing simulator based on the principles of the Stargate device as seen in the Stargate SG-1 franchise.
Initially started as a small personal project, I made it grow over the years and added features like online client-synching and social features.

## Features

- Ability to activate and operate the stargate and go through it to reach another planet.
- Dynamic client hosting for network synchronisation
- Create an account and name your own planet/destination
- In-game chat, global & per planet
- Mobile compatibility (browser app)

## Technologies used

- **Frontend :** React, Vite, SCSS, Axios, Socket.io
- **Backend :** Node.js, Express, MySQL, MVC architecture
- **Déploiement :** VPS, Docker & Caprover

## Installation

1. Clone the repository :

   ```bash
   git clone https://github.com/tibononoX/stargate-project
   cd stargate-project
   ```

2. Install dependancies :

   ```bash
   pnpm install
   ```

3. Run the development server locally :

   ```bash
   pnpm run dev
   ```

## Usage

- You'll initially appear on Earth by default, you can open the address book, the DHD keyboard and the chatbox. You can also see who it connected (wether it's a guest or not).
- Dial the gate by selecting an address in the address book or by inputing manually a sequence on the DHD. Earth-type gates will wait for you to initiate the dialing by pressing the red button on the DHD, while normal ones will input the sequence directly.
- Have fun!

## Links

- **Deployed web-app :** [https://stargate.tibuntu.fr/](https://stargate.tibuntu.fr/)

## Author

- **tibononox** - [GitHub](https://github.com/tibononox)

## Licence

This project is purely made for fun and is not destined to be distributed or used in any commercial manner.
