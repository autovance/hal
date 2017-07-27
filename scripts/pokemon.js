const request = require('request');

module.exports = function (robot) {
  let pokemonNotifyId = null;
  let pokemonNotifyInterval = 5000;
  let pokemonNotifications = [];

  // Office
  const swLat = '49.73442725877052';
  const swLng = '-112.80222615609739';
  const neLat = '49.736724218985294';
  const neLng = '-112.79844424138639';
  const oSwLat = '49.73442725877052';
  const oSwLng = '-112.80222615609739';
  const oNeLat = '49.736724218985294';
  const oNeLng = '-112.79844424138639';

  const eids = [];

  robot.hear(/^(pokemon on)|(pkmn on)$/i, res => {
    res.send('Starting pokemon notifications');

    pokemonNotifyId = setInterval(() => {
      const timestamp = Date.now();
      request({
        json: true,
        url: `https://90ivplus.ca/raw_data?timestamp=${timestamp}&pokemon=true&lastpokemon=true&pokestops=false&lastpokestops=false&luredonly=false&gyms=false&lastgyms=false&scanned=false&lastslocs=false&spawnpoints=false&lastspawns=false&swLat=${swLat}&swLng=${swLng}&neLat=${neLat}&neLng=${neLng}&oSwLat=${oSwLat}&oSwLng=${oSwLng}&oNeLat=${oNeLat}&oNeLng=${oNeLng}&reids=&eids=${eids.join(',')}`
      }, (err, httpResponse, body) => {
        if (err) {
          return;
        }

        const pokemon = body.pokemons || {};
        Object.keys(pokemon).forEach(key => {
          const pkmn = pokemon[key];
          if (pokemonNotifications.indexOf(pkmn.encounter_id) > -1) return;
          pokemonNotifications.push(pkmn.encounter_id);

          res.send(`[${pkmn.pokemon_rarity}] ${pkmn.pokemon_name} found at ${pkmn.latitude}, ${pkmn.longitude}`);
        });
      });
    }, pokemonNotifyInterval);
  });

  robot.hear(/^(pokemon off)|(pkmn off)$/i, res => {
    clearInterval(pokemonNotifyId);
    pokemonNotifyId = null;
    res.send('No longer sending pokemon');
  });
};
