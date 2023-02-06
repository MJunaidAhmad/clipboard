//this crypto library is depreceated we should us crypto-js
import crypto from "crypto";

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  //if there is not object passed then simply return the trivial partition key - base case
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  //if the event is passed then get the partition key from it
  let candidate = event.partitionKey;

  //if the partition key is empty - second base case
  if (!candidate) {
    //if the event is present but the partition key value is not then get the hash of the event and return
    return getHash(event);
  }

  //then check the the partition key length and if its more than the allowed then get its hash and return - third base case
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = getHash(candidate);
  }

  // and if its already less than the max partition length then simply return it - fourth base case
  return candidate;
};

function getHash(data) {
  // check if type is not string then stringify
  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }
  //calculate the hash using crypto library
  return crypto.createHash("sha3-512").update(data).digest("hex");
}
