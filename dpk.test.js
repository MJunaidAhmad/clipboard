import { deterministicPartitionKey } from "./dpk";

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

test("function name should be defined and not changed ", () => {
  expect(deterministicPartitionKey).toBeDefined();
});

test("trivial partition key should be returned if event is not passed", () => {
  expect(deterministicPartitionKey()).toBe(TRIVIAL_PARTITION_KEY);
});

test("if partition key is present in event object then it should be returned", () => {
  expect(deterministicPartitionKey({ partitionKey: "123" })).toBe("123");
});

test("if partition key is empty in event object then it should be generated according to crypto library", () => {
  expect(deterministicPartitionKey({ partitionKey: "" })).toBe(
    "b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6"
  );
});

test("if partition key length is greater than the max parition key length allowed then regenerate key", () => {
  expect(
    deterministicPartitionKey({
      partitionKey:
        "b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6123b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6123",
    })
  ).toBe(
    "b8db8891d13b53a59e2b8e992140057b3fd2e87ac76adf6a3b51ebb46f01f9cd93c32093fb438487e5fb8db202ef6b5bb35ee68507bf0883b21da0aca58d2f82"
  );
});

test("partition key length should not be greater than the max parition key length allowed with empty partitionKey value", () => {
  expect(
    deterministicPartitionKey({ partitionKey: "" }).length
  ).toBeLessThanOrEqual(MAX_PARTITION_KEY_LENGTH);
});

test("partition key length should not be greater than the max parition key length allowed with greater than allowed partitionKey value", () => {
  expect(
    deterministicPartitionKey({
      partitionKey:
        "b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6123b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6123",
    }).length
  ).toBeLessThanOrEqual(MAX_PARTITION_KEY_LENGTH);
});
