/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    Poseidon: {
      address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256[1]",
              name: "",
              type: "uint256[1]",
            },
          ],
          name: "hash",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    YourContract: {
      address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "beauty",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "biome",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "intelligence",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "jump",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "speed",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "rarity",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "owner",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "temprament",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "frogId",
                  type: "uint256",
                },
              ],
              indexed: false,
              internalType: "struct YourContract.FrogAttributes",
              name: "attributes",
              type: "tuple",
            },
          ],
          name: "FrogMinted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "frogOwners",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getFrogOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[1]",
              name: "",
              type: "uint256[1]",
            },
          ],
          name: "hash",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256[2]",
                  name: "_pA",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "_pB",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "_pC",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[60]",
                  name: "_pubSignals",
                  type: "uint256[60]",
                },
              ],
              internalType: "struct YourContract.ProofArgs",
              name: "proof",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "beauty",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "biome",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "intelligence",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "jump",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "speed",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "rarity",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "owner",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "temprament",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "frogId",
                  type: "uint256",
                },
              ],
              internalType: "struct YourContract.FrogAttributes",
              name: "attributes",
              type: "tuple",
            },
          ],
          name: "mintFrog",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "minted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256[2]",
                  name: "_pA",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "_pB",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "_pC",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[60]",
                  name: "_pubSignals",
                  type: "uint256[60]",
                },
              ],
              internalType: "struct YourContract.ProofArgs",
              name: "proof",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "beauty",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "biome",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "intelligence",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "jump",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "speed",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "rarity",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "owner",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "temprament",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "frogId",
                  type: "uint256",
                },
              ],
              internalType: "struct YourContract.FrogAttributes",
              name: "attrs",
              type: "tuple",
            },
          ],
          name: "verifyFrogAttributes",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[2]",
              name: "_pA",
              type: "uint256[2]",
            },
            {
              internalType: "uint256[2][2]",
              name: "_pB",
              type: "uint256[2][2]",
            },
            {
              internalType: "uint256[2]",
              name: "_pC",
              type: "uint256[2]",
            },
            {
              internalType: "uint256[60]",
              name: "_pubSignals",
              type: "uint256[60]",
            },
          ],
          name: "verifyProof",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        approve: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        balanceOf: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        getApproved: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        isApprovedForAll: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        name: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        ownerOf: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        safeTransferFrom: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        setApprovalForAll: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        supportsInterface: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        symbol: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        tokenURI: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        transferFrom: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        verifyProof: "contracts/Groth16Verifier.sol",
        hash: "contracts/Poseidon.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;