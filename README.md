# Sway Farm Indexer

Created following the tutorial https://docs.envio.dev/docs/tutorial-indexing-fuel.

_Please refer to the [documentation website](https://docs.envio.dev) for a thorough guide on all Envio indexer features_

## Local usage

1. Clone the repository

   ```sh
   git clone git@github.com:enviodev/sway-farm-indexer.git
   ```

2. Open it locally

   ```sh
   cd sway-farm-indexer
   ```

3. Install dependencies (requires [pnpm](https://pnpm.io/))

   ```sh
   pnpm i
   ```

4. Run envio

   ```sh
   pnpm dev
   ```

5. Verify it's working correctly by checking the Hasura:
   1. Open http://localhost:8080
   2. Enter admin-secret `testing`
