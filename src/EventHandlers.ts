import { SwayFarm } from "generated";

/**
Registers a handler that processes NewPlayer event
on the SwayFarm contract and stores the players in the DB
*/
SwayFarm.NewPlayer.handler(async ({ event, context }) => {
  // Set the Player entity in the DB with the intial values
  context.Player.set({
    // The address in Sway is a union type of user Address and ContractID. Envio supports most of the Sway types, and the address value was decoded as a discriminated union 100% typesafe
    id: event.data.address.payload.bits,
    // Initial values taken from the contract logic
    farmingSkill: 1n,
    totalValueSold: 0n,
  });
});

SwayFarm.LevelUp.handler(async ({ event, context }) => {
  const playerInfo = event.data.player_info;
  context.Player.set({
    id: event.data.address.payload.bits,
    farmingSkill: playerInfo.farming_skill,
    totalValueSold: playerInfo.total_value_sold,
  });
});

SwayFarm.SellItem.handler(async ({ event, context }) => {
  const playerInfo = event.data.player_info;
  context.Player.set({
    id: event.data.address.payload.bits,
    farmingSkill: playerInfo.farming_skill,
    totalValueSold: playerInfo.total_value_sold,
  });
});
