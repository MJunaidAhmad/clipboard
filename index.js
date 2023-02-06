import { deterministicPartitionKey } from "./dpk";

// for testing purposes

//first base case
console.log(deterministicPartitionKey());

// second case
console.log(deterministicPartitionKey({ partitionKey: 123123 }));

// third case
console.log(deterministicPartitionKey({ partitionKey: "" }));

// fourth case
console.log(
  deterministicPartitionKey({
    partitionKey:
      "b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6123b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6123",
  })
);
