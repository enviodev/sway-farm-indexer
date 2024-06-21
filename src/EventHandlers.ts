/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  SwayFarmContract,
  SwayFarm_SellItemEntity,
  SwayFarm_LevelUpEntity,
  SwayFarm_NewPlayerEntity,
} from "generated";

SwayFarmContract.SellItem.handler(({ event, context }) => {
  const entity: SwayFarm_SellItemEntity = {
    id: `${event.transactionId}_${event.receiptIndex}`,
  };

  context.SwayFarm_SellItem.set(entity);
});

SwayFarmContract.LevelUp.handler(({ event, context }) => {
  const entity: SwayFarm_LevelUpEntity = {
    id: `${event.transactionId}_${event.receiptIndex}`,
  };

  context.SwayFarm_LevelUp.set(entity);
});

SwayFarmContract.NewPlayer.handler(({ event, context }) => {
  const entity: SwayFarm_NewPlayerEntity = {
    id: `${event.transactionId}_${event.receiptIndex}`,
  };

  context.SwayFarm_NewPlayer.set(entity);
});
