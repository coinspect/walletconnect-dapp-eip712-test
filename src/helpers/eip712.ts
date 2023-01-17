const example = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "verifyingContract", type: "address" },
    ],
    RelayRequest: [
      { name: "target", type: "address" },
      { name: "message", type: "string" },
    ],
  },
  domain: {
    name: "EIP-712 Test - Relayed Transaction",
    version: "1",
    chainId: 111111,
    verifyingContract: "0x6453D37248Ab2C16eBd1A8f782a2CBC65860E60B",
  },
  primaryType: "RelayRequest",
  message: {
    target: "0xdeadbeef00000000000000000000000000000000",
    message:
      "Hi from Coinspect!",
  },
};

export const eip712 = {
  example,
};