import assert from "assert";
import { 
  TestHelpers,
  SwayFarm_SellItemEntity
} from "generated";
const { MockDb, SwayFarm } = TestHelpers;

describe("SwayFarm contract SellItem event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for SwayFarm contract SellItem event
  const event = SwayFarm.SellItem.mock({data: {} /* It mocks event fields with default values, so you only need to provide data */});

  // Processing the event
  const mockDbUpdated = SwayFarm.SellItem.processEvent({
    event,
    mockDb,
  });

  it("SwayFarm_SellItemEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualSwayFarmSellItemEntity = mockDbUpdated.entities.SwayFarm_SellItem.get(
      `${event.transactionId}_${event.receiptIndex}`
    );

    // Creating the expected entity
    const expectedSwayFarmSellItemEntity: SwayFarm_SellItemEntity = {
      id: `${event.transactionId}_${event.receiptIndex}`,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualSwayFarmSellItemEntity, expectedSwayFarmSellItemEntity, "Actual SwayFarmSellItemEntity should be the same as the expectedSwayFarmSellItemEntity");
  });
});
