// tile size is constant 128px come from config
// metadata only need minX, minY, maxX, maxY
// each item in the neighborhood array is a neighborhood 
// Each neighborhood theme gets rendered on the map ( 1 tile )
// if location is not represented then it is a fog of war tile

// [
//   [null, null],
//   [null, null]
// ]

// {
//   water: [{}, {}],
//   land: [{}, {}]
// }

// maxX + Math.abs(minX) = width
// maxY + Math.abs(minY) = height

// 26 + abs(-23) = 49 ( tiles ) === 128*49
// 21 + abs(-29) = 50 ( tiles ) === 128*50
// 
// Array fill 49 // columns
// Array fill 50 // rows
// const cols = new Array(40).fill(null);
// Array.fill(50), (x) => [...cols]);

// 1. data pushed to generate map
// 2. Process data to get rows and columns
// 3. Use processed data to lay out raw map ( fog, water, land )
// 4. iterate over land water and fog, draw the map
//     Draw the mask based surrounding items

export const mData:any = {
    "metadata": {
  "timelines": [
    "Past",
    "Present",
    "Future",
    "Fractured"
  ],
  "states": [
    "New",
    "Owned",
    "Reserved",
    "PrimarySaleAuction",
    "PrimarySaleBuyItNow",
    "PrimarySalePreview",
    "SecondarySaleAuction",
    "SecondarySaleBuyItNow"
  ],
  "sizes": [
    "Small",
    "Medium",
    "Large",
    "ExtraLarge"
  ],
  "tiers": [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X"
  ],
  "partnerNames": [],
  "districts": [
    {
      "id": "4db16d5a4c7d42ef82d7c71615e23083",
      "name": "Milestone Zone",
      "timeline": "Present",
      "description": "Part 2",
      "sponsorName": "Manticore Games",
      "logoUrl": "https://image-uploads.coregam.es/Dev/22d89b5d-e9e3-4e27-9c06-5c0ed669c91f.dcc79819749b4f26b2cf84f7824486be.PNG",
      "labelLocation": {
        "x": 7,
        "y": -8
      }
    },
    {
      "id": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "name": "PERF TEST DO NOT JOIN",
      "timeline": "Past",
      "description": "Performance Testing",
      "sponsorName": "Steven An ",
      "logoUrl": "https://image-uploads.coregam.es/Dev/a90a14f4-1470-4de4-8b3c-1e1058e2ba49.02f4f98712a744798e9954b2d5ac2a1c.JPEG",
      "labelLocation": {
        "x": -2,
        "y": 2
      }
    },
    {
      "id": "b981ca1b1a8e4957b8c756237b25c016",
      "name": "All Layouts",
      "timeline": "Past",
      "description": "All Layouts",
      "sponsorName": "Manticore",
      "logoUrl": "https://image-uploads.coregam.es/Dev/ae0a03e0-3c8a-4a42-bea2-872e38867c1f.8b15abd826004d76967581cfd3c8b817.JPEG",
      "labelLocation": {
        "x": -2,
        "y": -12
      }
    }
  ],
  "minX": -23,
  "maxX": 26,
  "minY": -29,
  "maxY": 21,
  "mapVersion": 154,
  "errorMessage": null,
  "errors": null
  },
    "neighborhoods":  [
    {
      "location": {
        "x": -23,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f84e1b0ec638457a93bbe301fb1fae7b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3d5a6c625df04707922cc1959c9ba678",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f157e9f7ef8f4c708e373f7159c57930",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a60c5d95e92841a68d9d1e382b1701e0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4ed5e1688c2b4d09b2beb27441d20dbb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "19f9c5a8e17949b6a332abfa99a94035",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cfac17ef54964ab08a711ae4ef23b38c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2c4c9e15b58742ada02c4d7404ae06db",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f00ae41c0f38443e9be78c286bfa3eda",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d9331697966844d8b8c40e2c26ae0383",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fcc9bd641e544d3c8bf118f36275de2e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3e02542e3050486cb1c190025a0e5533",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "085195712f964bcb86a7c985743a8235",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8e53c0ae85c44bb5b0ea3e1aa7c9d36c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "20bb68db44c84daf8c216a557d1ad9f7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "aac0885d8c9b4c0db7dd75ac5b61ef38",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5abf0c81c4064290a2d8d0d98800dad8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dfedd558680144f989ef5e73cc80b16d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "047c312f8e4d4468bf236b3bed6407ed",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "199de5c754664d24a86886b8fd40d667",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bc421dea82ed47ffa3503bb5cf2f88fe",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "65e56c1a4a8b4d2cb77ecf8ecbb4530d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6d3a9ea71be8444395506fd4536fd37e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f7cc6aba2cb94b4faba511493d1f56aa",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "57689d119daa48f2b7a9db3c5f615bfd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f14798b88f004db1b10edd65fdb3b40c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "59c4ea9b6e064407b8844cb87a4988fc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8bb49f1610404cb396407be3dff95560",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "27a0f3db881043299178d8d84a2a0e7d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "af926d6f84f94f5e8bd873d7b7bfea4c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cea03f7bc4c14ec186bbc19d5f65c1b3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "68fb99e36d39407aa88625ce8aa7fc0b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0e23d135ccd74805877753b9ffcf71d5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e101a71068004fdc988044e8e05d035f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "12e2e8062eb14f3ba7f363853882be59",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4b8b1bf1fd084320b2d56ee23d7a9456",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "813310ff24324cf3838f29c36c8bd175",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c2b9116e668643febc84ed900710f8ff",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "996a48bf3c9a49e2bf0979f46920ce20",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3cee99695f834d4a953748fabbdc8498",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fe2760860baa4cbd8994730f82f43c0a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fac527d40a6d4bc4a37ecfe4e3f00c1c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b5f00a481c4247e5aa366f06b9b87e69",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5fbedbb215be4d969c2628ed6a9236d8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "801796cee6ef4d9f90b368645bd0b402",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "541a1f6c958540209268aa5fc6fcfefc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1ae1d31056d04a31a3235905f70cfc78",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4deab15b699c449cbe0f32ffcebd3726",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "48306055e9b844cd9211e767fd045bb8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 21
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "58aa9cbb2a40417291c11954b78c7331",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "eb04a7429be84465a36b7426d7975c01",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "23a7b828cb404f10985319f2c98dc40b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ca6b5808da0448ad84adadba51a38e58",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "260f6561594e48a2abad8641c704cf25",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0e8de32d410146feb373f637a2ebd061",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c660dd604f9a497e8aaf9c150ba5d70c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2388a4d835014aa39fdae4219e482ffc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d17303320c1a4f1aae759793a2df3c21",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8a8dfec4e920454383486c222659048a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5d662a88a6384b1a908d0edcd669323d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "be3bec4d64564420892f4c0b50f0b8e2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9f911db44f0d4362992f256c838e7cdf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "04089d58256d4ef19c16b3121d29e90f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c5d15d229e714e53953f594159062b01",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a8b8e0d347174f48840a3d371bd695bc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "220178bf97ef46fe866b372669eed0f3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3a4c12c5f13b4ef0872aa076ff85a984",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "69ecdfd2904b407db8af3b65fd458a2c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "701bb692168d440498b6ef6cb5ab9a0d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "09f54ba0636b4c7ba77487828d29761d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "243ea2afc9c94a598c220eaeee092057",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2d36fecf2b674d88bba0b54367520947",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "eeb52bae2ce546f087ceff26b6a93234",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b25a5793721e445397f42516a2015e68",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c3cc0a2683254e558774de9d5e254020",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3be1a67ae6784b2c8c3a5614de3e82ac",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0cd65f970eff4714a82601440534e716",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e77652eadc064471b0562f625bf8ee6a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "305b2038687d4f49be3440958eb77a15",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fbba553de617466d9b39765122bf3160",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6b0df3e406c946aabbe6177169423f30",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7f33a4809df1431691825c35941dd153",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2f8724184fc3443e9c7afdf4647d40ca",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6e856d678fcf4958b5012d0612c6bc8d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2266c524d32d45c2a3c04cc29f43c759",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b5cd693da95749199376f71a67e3e063",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cc1c1e97cd604c189a8ebae4cd93ef4e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "615bd52f21d3419b9156edf7d0b63fce",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "afa871efd5d84f8db545eafefd4a8ff0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3c366270ba884817a4c60fd40c3299e2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ae201315c5d7438ca9fc3108415b1df1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "659910609c6d4ff0a137843c57d11fe5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "35a0277765224ca3a70e2416decedb2f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "022bc71cdd704bf3b9c265ef5fa2a076",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "841f7d3db958478a9bbfcf6e9246a3d5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a3b1d74799d941178e11d04edbd5b461",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d01a79590ff94e75bf2285a26a887a3d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "72f88a656cd74c1eb28b91c53ef16bb5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6b4cc51f723d4dc282cc197840ef1165",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 20
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "60d84ba7ad5d4a16b6f43070ccc746ce",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e83e2f7d218240349a2b278b77563fa1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "096f85e37cec4fa5b4de2a0725a4297c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "71852a4a7a014c58a7e98ca8760f9ef7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "457e8ed52d324f93bbf946fb03e126b0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5725ff90700b417587121b5886c25d8d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f4aaa7300e13480485aea69e3c6931d4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "034de89354cd43d3b37ec886ffbd7273",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "32bb3368c78a45ed8b9a851e097bc1cd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9ea74bd464af46b8ab5dbe1bf8e01c59",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b918d79e49b64e01bdd974a511395813",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "15502583bee2485cbaac88875e24d3d5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2552b25cc07045ce9105f62e42184a23",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d571ef7dfea74039b38bcd41891f4bb8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "157ce64b0562486fa9f7dc187c6d7631",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b0cf32e0914b46a5b00f2d48ee7f73b2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6ad4d336f7d74c2fae15badb6ac6ff73",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1c6da205ed274af48add5bbf48218d3b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bf1d1929dfd94888b456dde00046c600",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b5ddf047bf364e0d8c620b384a462fd9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "18229c44f26748cc807249fa1edebdde",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9ff890b78cd644648371ba399aae3a16",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e8cdcbe8f91f49e38a2d17a434c4d7d1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0d82afe5524248a48037cadcc39850e6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "819fc5d19f044fd1b08155164ed8044c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6b09fe2c33e347908e28334671c9e0eb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "74dc64c7b1694d0c8ebc42638385c8a5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0f6e8d42310b4872b993f0ffb48bbc1b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "36bf7919b008402498c5232dc10097a6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "53587cb2175d4eff950a63f01a8fbebf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5a49e245be6f4709ba61890458c4437e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c4e902701c3e434aa54cee5f067297dc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "63f2ed83416d4645819a2ff3ab3137ea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f66c7dc01aa644c589c307cbcb597437",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b29a1ee78c514e8f9649375b82c3936a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "365877134d124e1d86833eb2168f5b86",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a2e4cbb7c1064dbebe92d47886630033",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "401a23780d694998883c8b505d7eab74",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e44bc24087c64d609907cfbca7a86026",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b151b458c9dc4eabb2cfe10938873b9f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "95f044c2f8774a038c6f66bf78062d86",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c532fb061a1544b8b32fb02ef4946592",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "48e995c746034539be44e6da338484b1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d9b57400b31648d59bf6004fee910252",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "13c9c351a588429f9f5624603685cd62",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a8d7105465c34a478c53865c3d107e6c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d62da68da4b34e28b89c2633e029bb50",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "138353a509de47c7b42463bf3fda53c1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0ac7a3231f2b411bb88323bb12d26708",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "da4ec14cd89848a6899cd4f999f013d9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 19
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a2c33e6a2fad4041a5d26c9fc9c00266",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b8bedf82919b4d26a2ef6df5912694b8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9e2960865e3d4407ad7fb908d70d7f81",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "822204c647d44caa9ea0de35afbca874",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "af99c28a1f494bc99307a388681eae6b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "71aa0d3305ce4c9db3697103a5922db0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0e970d0078654b8ca71fff56e7b14343",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5b38a8cb20c64b21a7b09072fdd4f590",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d5e695bd4a784a87ae455dbc7aadd1a4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2c8ffb08e8134330a8c208d2d35568f5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fef10c811f344747b18d2b573b33e3fe",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6c00c114b3134b13a678a4fe4f649bdd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1ee0c9f7bc904e76ac32c06b682dc108",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ad540753d9264424ac8defb8c89b59e3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "730bff6f55484e68a6349fe9bb124af9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a07ef1f78c5f415dbf639e0ef7d9bff1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5a9e3640ff8f43ae80b352d114401d39",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "67960a294954490092ac7489d447b83c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cca936bc27d3421fbcc2a08de954ce12",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e6431d2a54944d16bf17e406088672b6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d8fc6b6a58cc4bb6a7893eae399fbc85",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8c67878541c24154b6cc0b835a1d8b9b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "46f18de93dd341a7ad944a7769188d56",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d99068fc570b48fe9853c300d6a4125b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "73986fb4089545faaa1d6ef311c3c935",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "87982253dc254216b65585fd3e0c07c8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4af7909d4e4b4d53b55ac921b902cf41",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a61ed080353e4b9aa05d0477044f9117",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "07c352ff0f1b4464a841d55d3f9f5022",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "519f71ee230d484aaa0a28202b37ce0a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "293805c85f1c4cfc8b8045e2dd94947c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "badc1341f76f4047afd74e21455c7f40",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "129b6aacf6704fdd88eed2d7eedc12c4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d1d3cff2e0cc448cbf8cc8342074a33e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c60d833178c8403c974e42a363d9626e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d2bf0f4839bd439b9a44140e70f277fb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0f78ac7ea6bf4480bb6af9d541697245",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ecf007a2888b4297a8278661b54845b6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d8870976eab3438fa910e7f28f0ae726",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0ab74215500b462289ecf55dfe152cdf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a64d0ca418604f51b0a4bae898caa157",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e3bdd567e1414e2c944cd900ec398ac6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "90f3a67d7eba435a8458c84de1379c2d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "23444e10b86442e9bba4cd838507502c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "195bd12e6a2d4b02951a1eb07df7639f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "48f75d0e5c444381a24475f857d15b7e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a215052a7b754c048746444fa8460962",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "56913cd8f0d34f2ea06b0b1b78942fff",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "eacc3cd598ad421abda121e2e4739d73",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8340a76ad03c46b9a028d6dd98dc4b65",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 18
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "71e5b7b881c84e2c94ffebb7de164747",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b7b7583641244a059d4155f0e73b1e83",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dc1655dc157f4f79ac4ca988c31d33ee",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "55809a8dce7f40059fab57cd58c05eaa",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "00d1a70743e14fd481bf67ac9f3d0362",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1e6b4f45d9c9419eb8855ec1da5b08e8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c42f756db509485a81199e8cfed938a6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5a5700894b0545f4bbb93cbf6b85df11",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "79b4c471ddef482f86c80ae6150e3416",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "963db4671ca741ed8fb3ba1aa46368f6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b400791c458849e3b6c6b278a3e485f0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a21979bdb812432ca976fc28567649ec",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8f7d02af645f4b15b3776629605a9406",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5ecdae6462ed4cc4a6b1e9ceca1839c9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c6f20e75b5e44a94829aedcd306086e6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "89e8362d65c54fc1af6a271d1e47a63a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "535c1ace3cdf4769bfafe6a21c52b9bd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9e68c75d78a5436ab6e8cfff772d08cb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "20fcdd7e658f4aa4bcafb8d81edb152f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bab30734714c4b65897ed0690fb7be0e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e66cd9df0acc4b138cb6072294304f61",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2608c9df5ed04b31ace6d14e08491d2f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "76775006670e49e3837cc6cd0bd1296b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ec8f030fc15f4ce190cbf1d0f752ca48",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "63a4a20944f84219bb0fa408f7a79986",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b8177e505f8849948432582599165c36",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "49a5a30cecfb48c0b108e65baaa19867",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ada9479e484046bd838427121296bb38",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "144af44cf8ab49d8a958c71f44ef4d58",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a338f5d0a7bd44d6954a9e012b71458e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a4ae5614a8954921b7f7aa1249f2afe2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c68a766543dc4345ac2f79a0a78eebca",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "af51a321498140ca8eb45e44274d8a7e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "282b80599d7a4f69a0f578466b8f7523",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f58a97fddc2b4717a67624133a6cae0b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4c6a55ec7f634dfd84d1c1401bc45600",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a41573da483a4a55a8478d394d025711",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2b9a859d151e474b8ee27b99ad7b390c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "742453e9716d49eba4a1c1d433c35f14",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6a95dd9af2df491db4a66d4a1dd459eb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ef7fb810b4574d0f95eeed3089673933",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e66d90cef0f7409fac2631405d3e70cd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "193b1d61486348d5829c50416f85c47c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "85a81def4a244606ab87bf8f66f77012",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9e02212c4bb342d68c05c745026f4374",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2b3e1aee33dd4f0a89043273a078c91c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7ea75cf43b004e51a3d0bd9fdd051992",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e4c9f48b8cc0405ca8aaeda3be592abf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e76de83b2f8847bf98975655d5e5a5b1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f1dd8af599344aea8eb35d7637b3724c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 17
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "76b6c83b32e74e16b9ced47ced8d968d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d764a0e7c986495db76412a4febffa75",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "71a34ea2101d41cb9ac2f77b65802885",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ff82307489ba4c6386bf03bf16865f8d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2480cc0a48f445a59be9c88f8c0ebfbb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a7c2e3a8cfb342389284682d9233953a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "97efed1979da4d44a2b3821eba4f6930",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d106967accd54245b9c18cee5b116952",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a06a829e3fd7451abeafb4bde9781da5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7e0be36f18db467590865988fc3ab8a9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0b0e7e2fd3ed4240b1c6611f3dfbe183",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d0f4025a63e84d82986a8dec2153ad0e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b60702a802d3404ab6791df4b87cd8d2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "685ab8d6c39344068d474fbe3c09cb36",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "491063c2746047c69ea1366b4a09ad3e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d47142dd60df45709dd207000b93b6b2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ce717832a9f042f69db4b1183c3fb93e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "325f7f08774544e0aeeed7fbd16643c5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "86fbc60564744d2ca9b4bd142eac7e1d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1821daa27db04999bd2979674ea2f97f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7503db5f6daf40a29dbbc1e369880aae",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b88caea66c834088a6f1c3defc762ffe",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f75ccb6a77d6465faa319bbf9fc872ce",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "97c937aa565b4f0d8d1286a40e48c5b4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "34efbde6f733489e9e3b79d6b03c3afd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0d90e0d647864c34a83ecbc533c337cc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e80583d7e8b14beb924202fc09aedda4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f7d0594501224052813448fadd4ca9ef",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2b7e964861b0441da2aa85981d41b5fb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "533cd8d2a23a4d77846b40ee0b58f5b4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2c23ecae6f1a40b1bd59fbb75d7646e6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3520c063b23b403997cc02e3b6d00dae",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7a8cae307c83471dbebb1d4b424b834d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "efab47b3f84e4d1fae07510b44ecfb14",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "231db17cc6da44c2b91287a91567ca0f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "26b8f0a81cc14b799b6be9308e6d2479",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "250fd32d975742bbaa60347c23e5a677",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0269d8bec47d489285caebb66b1a4f7f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1268987b182a4c6b8328d22d759c2630",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f68804256880436daa3b844d4c429481",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7ceb1d7708614823b8d1117ad53efcd2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "00073b67bdfa425a8c570c4074c7211f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f2cf7f22df4446dd8437b68f4c1f03dd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9371018901864b4f8aa0b4d280698ccd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8a598159c6bc4b46a165cfd490caa1e6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "835c97235c4d4eb48390a57568b517fd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1c4ffd6130654becbfded8515118e687",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f5b5d5a296644d018233feb0e696bd18",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b8ca71220598409ab06374320e864813",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e0c4f5d4c9324187bb1966135581e75f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 16
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "80813a9cef5b4b3cb49015c25924eaf5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "146870d90bc8494ab1c0f0ad7743fb13",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3c1df28088214d55b5ed7d06962598de",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e1827b07d85a4b7fa6eb5aacf75102a5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3d775206efa941eda8e535637cbcf6a0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "594c55a56c194ade96988f2766244316",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "186f691fb32148a19c8ae53852e6afea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9769c3c36c65453da9e41f45b156b725",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "97ba46411c81426ab455ef38e9732259",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b61c96c0e4534afa8580051059446fa5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4f199c86702744a7a13ba1604f55edaa",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "de2eb1404f694230bef37843ab945818",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4cccdfac830e4ce7a1dca34c9bccc34f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "aa4a839c23ce421fa335f6aaac8a5014",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "988e84a25f364d9d9514837c3fd92dac",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2685d0b025e746a08138ad2447e06c22",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c4587bffe020438b9b620bf879be1df6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4487d1973f584deaafe47f5b9e85a33b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1340658889484b8284c0bd003f5220b0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9161952b017d40099e11b456a27bfb26",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1df64e221f0f4a5e830ee47953d00083",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7017280de5d445cab0991fb1e66a88fd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "427ccb5f526346c7b427e3806e3824e0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "54358989a4a7405295205fcf874dedd0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "85925bf7ee1542b09d17653d2284c05e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f7b88b6fd153461b8d0c64c716631e20",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "622bb960c17544c7951271abf9762345",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "337b086e44d44e73a479d1c46ce0fac9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1c09afd1a35e4a0eac8272bd14437de6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6072a4de54464ee09d31bcfba979b5e9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f6f0f8fe0794404fbeaf404505738c6e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d106cc9ab60541919acd9b3bd0f9472d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "09d146b59dc54be6a4c2953b5238c75d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2dfe4dfb517e4e9b8c0c6c0d55805dda",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dfda499f72464de7b0ade87fd16eb661",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3efb93d4734f4b3f9f9855471e80e036",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c9986ba5a0614043bce15fc8228ab8f8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fc09e736b6a146b9bdfd68ac4ede72f5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "52564d4c22c8478a9a9248f414436339",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "736b76e1ff394b7f93d3d9e36eb22116",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cf4f9f308fbb49159903d6b377eb4e0e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "86d85041f87b4555a09b59e492fdf776",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "36796542771c4155a776508eb3fadd4e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c7c281dcbf874d1ca673fb524538240d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c5992471cbdd4b0aa79933d6fb895a11",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "898f32a8fbb1463294492a6238e2d6b3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3e644376d9b4476b97a6adec92f85756",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "34eb4d3446d14f87bd73c6df2dc53f95",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7b6d2adae22843008c9cf760998fc317",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1c970d8be5f346e1800343076ba4f199",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 15
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d86201da2fd14640ae4e271fb10c79e3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4f5b514eab6a4d0885ba89af3f50be7d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1c7d60e0e99a42d6915e4b0fcc130028",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3902ec768ec44692b7c3e975d006c839",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "008bb4cca53b49aea87888b2f6581527",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "041af7c1e2784e09a6476e19b8db0f9e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6ebebf099380452c95edae61ba808814",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a779c5968fee43b18f1ea2fa010abbe5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1bbc0c17ee7244e0b330a84cc37a6435",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8b0dbb77e3604ead9556515df5a5c1b1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "15bfcbf20ba34fbba92925deb7dc4a81",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "35f8fd884b874fcba6c02244938b7e96",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6de87bbdf6a94133beeb8f0e8793fd69",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a1f5c0545bd34357b772889b9a6c459a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4d14691f5d514a9a9581084e92d4ffaf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4d0e9c9058624fbc8aa1dd341f682173",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ce34e46e7c8e415381b2930f3a4a8e66",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "41e85106829b4530bc58caa516f057c0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dfd1a299901b4a80b0fa98181c63a98b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "86a377ea5294413e807a65d27715308f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cfdfd9f099244d158a9fa8ade3dcc95d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "18de770fa91f40678f69fffcfa48758d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "eae7849f3ce640f79ef7c94b498b6e7b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 14
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "81347819ee4840c49e8e29e2e4c1c62f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 14
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "f5599534380d405e8519f0cd1f277596",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 14
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "b0307488eb504dbc833f2208a3c701f7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 14
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "2e61772d45144eef9cf4980c033b9cea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 14
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "5c46341e4522494f9640a5d4ff3cf3b1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 14
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "765d574d6e1240c6b70c47f97371d1e4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 14
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "726c366891d148c39ebe718497e0cd0b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1bd224f5c89c45f49d61839caae2483e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d52a64d31ba84b018c9c7678da58ca80",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ae5fefb05ecf4a47a7b1ac62a19df2f8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7f905af560be43458ca40f385fada6fd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9bd091d52e614d31a006aba64ba1bde4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "50792fc56b794badaae3f8cbbb18f464",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f7fa7675b16748ae8c56c7d92cdbb84a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ed224f6027c847e782217bb9d8847f0c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a9d2c1538fd84cd3b8e38070a08e1bc2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "84c16946920845c4b6471fb7d02d23b2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "02702e805547467186a283263779f749",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e6104dba76f845f1a2a42a39d9ab72d0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6bfc0c12e6604dfc9c8b22e77d619158",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d3dbc9d3171b4b0782af358f878ae7ed",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6b520f2df7b9423ca27a8a47fe8eb833",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "474296df65b44c57a8501ef20c1b7d16",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2100d54e8f064783892712c82e492526",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0b7e2a389e2b4eaab60d44b253159451",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "054e4165aae54b2ca3c553877e61311f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "acc3bc23959042f3ad4979d070428942",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 14
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cf9fdd70e96f4047b76960c46e1a2e4a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "63dc410ec6bd4e42ae12ee748d5f1ff7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "935f7503458f4e1b97c3b59e206f25c9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b586e5acb582479db731b643e621db38",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3aa76b59d3e24ee8a48ff17926d091e4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c8ac8d9a2a774a80a8d46fafc06bed2f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3bf15e910fef483d96b7e2dcd44641a8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "971ec8e4c9214c26b232e37be12baded",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1ad28a6e88a44424840f0d309d5b3419",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "65d089b466d94ff6bcd577b0e189a0c9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "016416a6991c47129becc26a7d307bbd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e1e43c2a138543299705900d9f403b23",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e1e86ec30a6a49dc8d4f7ee118278ddd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d76c4914e94b42429e16fab272794d64",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "75e12287805e4402afeceb8535547ab0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c76e9d193f4f4f7ea7d10ef91863bfdd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3ce64730f24e4b99b0b903418ad7b6ed",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "10084e41ec1142b69a0b53f45e53b40c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9f9bb6c9dcab44e883b25ca27f1cb009",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "318ff626b3fd49a3bd6ed4a2e3c8e2d7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c05f847df5cc40709e437a0ba6636c8b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 13
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "30f2721ec6814516945ea8040bd03e25",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 13
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "56ea14e8c1df4f05a06f01dab5da36d1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 13
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "974d3366942f41b68fd6c909147a2d4f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 13
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "c2cfeafa845248aa903c191850a0c8ce",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 13
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "fe358c05932546b2b5bef51307e4952f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 13
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "50c41b03126e45de8165b44ffb794478",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 13
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "7386985b2990490b848c19596d8ce916",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 13
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "85d765a2a2ae4ee6a13f2df1c066e5f9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 13
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "379242e76ca3472caf721b396d98110b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 13
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "27958f32551d46ac9915b14a8e4913e9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 13
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1743bba0e0f7492d89a21c0b182c3546",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 13
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "64f0d666cd37475ba1119a9e77b47a67",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "489e3f8cec2d42b1b9780000ec647fc7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3eb615373f1544c996f498164cd7dd22",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f64c7a8d2a7246a0b303ee7a9d4098f1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1af23b992fda4149a9399b2b7f61118f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "39b0bd898b3e4ef3a31c359a6aa3d94f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d948556d5a2a447c80cec6328537dfbb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "791f675722494501b7b2fefd20e74152",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "33869389380c4212859a6a5659e5c6ff",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "125c489d67a3499bbb2817a2fababa32",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ec4aca91b58d4829833eafd3adddcf2b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "29b6b18ba6fb4f869194ba01015abc48",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "659a842baeb14d24be86efc722cca27e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fffe550e55424f4bae9dcd635f87a8be",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b5a0f6185ecd47ddb127a306d8229b69",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7611b0b2079c407dbdb3f60e65a5724d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bfc7e4bf69cf488c88015aa02f62399d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e63e57c32eef40cfa1a2581de50c52f9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 13
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "71708dde554741c19a776c3d2a21c2a4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "220d46a5faf44b53b94bb53408a9f850",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1535852639894dc59d7246e2b5782c3b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0f0eeec962474511b571bb03408f4e2b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dac3449763134f7f887ea58005d5c3aa",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0db764005c1a4ca5904f3e3d7efebbd6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dbb90575852148ccb65a0abc3be9f10f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f41f9892adca46b29d7b47825f886e0e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "07f0781fd7604bf4978099b2af06fe9c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "66744cd7cc584b709363739b4f0586e9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6530f1d2c14d42b09046120269a8d7d3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3db3f81aabca4cd6b79c4a93cec25e50",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bc7e6f6be4124b92953047649d602b38",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e68569fb509e44b286fc440bc8c7a4dc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "92ae6139c3b8446c80e6e8ead9354ab8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e5b3f1dcdaa844ffa44622fa5455d0c2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0ff76e72a97f4bd489d16ee8d87e2579",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0b7a75dd02f9470c84875396d4119db4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2454ddb307ff45558c20fba95df33d31",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 12
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "a31fad0205a24d84b776940ee29a059b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 12
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "41b2efd60c064d15a551a659683105a0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "a700a03fb5e043e8bbcbb609d3152eae",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "4558d5ff9d2049b2881481e7e5fed9f4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "968f9bd8adc740e089b4ce6aa30205c4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "2b0268b246aa4688bce44543518868d7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "81b6d55b84d3499794dee6bbd837e2a8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "b94d55ec5783493eaebdd9938d68c88f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "1c0850a8920a4a18906d27905dec54cb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "cebd2be2d6914648a17cd56b9abb0a47",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "93fd8a9f0e664b7babf3bd116eca6205",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "ba23d15759b14bfcbcccdad9a4a033b7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "059ace60529d46f5b332e62f777b34b8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "e3f4fc9aefa74544a75db564be30573b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "3c7e6e87841149459033e61d0e021425",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 12
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "07c61b13af2a40838a798ef5e0db6f4d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "faf37683704340929252123c08d055e5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "608f88100ab84b2a96ede21d315040d2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dc298c2940a0476f88fdba5f314f21a8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "aa9c1393f16a44af9e9eb70aef9b8e34",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f564e522d0f844148987ffd22498174b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "02420fd6bfc6462582b210755ab6adb9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "02587a9b75584ed5acfaad78971842cc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0f3e6de97282473fb12e8f274dd0db5f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "adb7782c8bd04736b06ead9b10348e52",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3e234da78d004136a9e5fac6b6d0d0f3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f48bb3299694499499c83ae6bdc8925c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d381a153cd00440db560e42e72e0439e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "19c911f9e8a84133afe9a23698d4ca07",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6677ae9089a24db8b3c559fff9598d93",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ef7b635f729c4f2588b31b5e296f5b87",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c6927536415e457ebe2fb7fe01b0d800",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8fba9f136c2144199ec42883f2aa7865",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "073b47f4e63743a6a90852f358dd37f2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4e8bb0484d044ce287992a4e23d209fa",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2107dc24dcde468182d4e1bf5cd1dfea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "12b462bdafa545ce853d62f970d135c8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "47acbf40cb774c5caa5e23e8b30f74a4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9470bba6827647fe94d8fec27a10da39",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ba44010e6ab74d38aae38dfd7ad96845",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5dd44863c06c47f6bb2cf1df242fc3f7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "afd6f0e8e5e5462d99664b66aef59593",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3ed26f5f3c464b03bd86ddfa6f00593e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0eb77dbcbbcf4a50842b1b46c02be445",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3e9f120b195d47388de26ca716c79165",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "65cdc56ae4e645f8b6dedcad3da7f8ac",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cc23017ee3d74dde9caf7ed5d9d33354",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3e820575a5b04711aa5028de2ee89774",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "9b884893d0664d4b82987431211e8228",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "28af3c2f472f4c09a47184e1dcd3ec6a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "804d9adecea644c7ae3bfde6834ab50f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "99b65b6be6ab47b5809968771bee7823",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "7b2a7aa124a349b293415ef2a8aa050b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "fbde3b36c7f14140a2b6428b6cc868d6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "b1e02f977b384374bc956d91329fb337",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "d52af0ae79234d93b36f01cf8f783b19",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "635a5615b7fd49408d722bc54c13fb18",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "b672abfaf2a64386a6c0cf575f3e1cbc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "9c7b009eb7e64eebbdf9781e5adc8b78",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "9866805f322a4c67ac93a68b3e94ce06",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "7058f8ffd3d04925aaa1fcbd53a36dd5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "0d5caa9253fc4feb9c896168c53555ed",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "edcbd3676f75486693c2f17bb5b4d94f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "3f29527e641b45bc9526fa48fa4239ad",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "de349ec1acac403cb2d9d17ff309e346",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "df1ba23c2d004d488e207abbca5c3ce6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "ae2405e8bc0442a1b3141d36d177713d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "0f1de951a33a4d028249e9f847ac90d8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6dadc4f9d63d4755a8de1f44e336fe55",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6cc2d055debc4118ae1c6589866b708a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a2f61da73460452884f80c70442a1479",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cca4a5524ed54e80a444747a77e9daae",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cf77884c1be04363b0af71fa17e068b6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e46bf8bf52224c11bc1b0e0ab774c933",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7711641aaf6740ca83dd890c8e691368",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "28614f269ad94c3e8a2b23708afd6009",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6bd2e81f5f0c4f1cb9b18eb2aadf99d4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "441ac163d7bc473aafe5d4796a0f3048",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3016cd9778d7495cbabd3e102d9abb99",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ae1c3bfb337f4dfebf6ad29b5751ca08",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "739199fe29274e32a36672be471241d3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "eec995d3a0964f5196237c91e1a78af7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f57cf1cc8847405db5d87ac8bde0f2f8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dd5605fa3fd04387814eca752f3bb18b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f8c5ff8d9cae4b05b0e164c1882ec21b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e8f58fd0690447ebb3311a4c32e8bf3a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4d628be7d3144923894f907905128124",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "272afd3559bc43e8b38320cee32a4172",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "eb6e0165aec24448a3367eb309c5da5a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "89168283f13944fba0f204b06b76c7af",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "22e72394bb214e819704179926550d3d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "77cb18975d444fbeb65a7b226707ebe9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "36aae1e89e4242639d6cff576118c82d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f96a8813419f47898e3ba93e55bb904f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f37d6939c0fd4e65a5fa06316a11e9cb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "eaeea917421c4466ab871e906162d438",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cd850004b5d644cda4d5a59ac00abb38",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dde044a04ad14662b5e605c71a2b459c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "9468ec757eec473ab4107e955b3ad4d9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "0aecd0456af446c6a33e042efb8f4e68",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "54ee4bb60ce4412eb1ccb0573b0092ef",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "8266c49f1b144e19a9b7178a1ee557d5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "07609ecb04084c6b8e79d56267c13b59",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "7dbfa956d56e4d89a248dd39e317ec4a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "062602a2825143afbd22f2c34b924ada",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "25a9a4b50f6c4f94ba8340bbccc533c1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "c05c0dc62526485c8b914c1b9349415b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "7b512fcd9a73443394a694df6080bc2b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "6ed967fd2f8547a787e95e5a97e42924",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "03bef191be594c088ea96738454d7c59",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "18c742dce8c648b085322c7e6565b4ba",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "c9ca3b2b07734e71922c03046a7d52be",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "850aaa996d4a448e82d19bae75ca21d1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "eb84514e274240b782f6ba3bec5137d4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "b28b6ac251b44aa48ff0c391294e77a0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "96a260d85ec1451c8e4029f22fe173f3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "8f0935966f384fdeb030f59bb5695139",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "968913f6a5b64dca9383ea1b33a03711",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "a6c02914ef0f417393334d535736ba21",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f5dfa85a67874733ad0e4765e8275f65",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f383e2a5c2ed49b3a4df85c27e290525",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fcd9acd6481140b3ace7ed25352f935f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fb18d23dd3804b86bd0bfdca5ecf6346",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "523b73510c824060aa4b8755ff7941cb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5ac906d2cbde45d0a08dbbf8560174f6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "56762078bec64561bef82b7e7af050d3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a27e033742d04135a4ab8f672abeef42",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "65f7f1eeb62041b9970b3c91aa29fd64",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a7ca89fd91424d72b23eaa429760912c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cddfdd78b5a9480fba328df5359b0fd6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6a061961c5c144948060775281c07018",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8039c11965e54c2881a965ded530f5f9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e64e91ffbc754c44b5a8e35d8a54402d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ab0eb98dd4ea4fd18b1b636dcbe9dab4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f5882e3b4f894dd28fca745f3f9c2b52",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5a0bb2a7c3374d16b56fcb0b3ba3eb9f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "555598b834b34e2a87fa482e07eac768",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "78ebf154ea5048e4b6af1c9a3c421164",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ffec91135e3e47bfaa456da1289c7667",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "53841d8f66c34e18969414cf8dc5d68b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6cba080ab83349faa20b30aa939764c9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5a31c992fb7c49a98b84a65ee5ebd690",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5c7730ca8d1f4994883a7dd25a80883f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1a75a7fc14ba45d381164621842ab8e2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e76869e4b39947099fe09d626deb222d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f06b502f2a934e33bcbae7a3ebd35ef1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "80d76c5d59aa43b8894133638af81cd0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "db614b65a81e47d6960a09fe4648345a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "3b922030e77342bc9544b50f8a10ff74",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "68c47b12e20b44c19a06217a7a10bf7f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "affdbe7e66424db7927aa99974734dd6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "915cb49401aa4a42a060a52285d78bc2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5d20a8c13279442eb88997e35ee2539f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b46b176986ab470991a6a67a73d5fcdc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bcc8afb65d96448dabe04bd0191b6be8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5e1bf027574b409895ee630483ffd5b7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8c4cff20677b4de190ceb2fd1b6733ad",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "aa214c49cfaa4496820c8863f6914471",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "af80528a0fe44347bbbaa96d31374513",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4842eff6d6684c4380306d5b2aee9b17",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0e7fa6796db14f4eb7c5ec7548a34fc4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d36c24a092904414a0898be7a1866c0f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "76b2606e537a4a6c9988ce451d9e076f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "27eeade64af64f569dd6b482a7127465",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "c9da49bf6b81433a940429214dddf554",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "f9b45091dad0430c869d259692569f5e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "3b2b5f025cf5405fbe819b97f3515126",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "23d6ec335f424b82a84cf399d62f525e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "01658bd5299949a7b9dee38a91dd4a5c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "9fe2ab795be14def90da6f7fc37d1853",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1e692ac11dfc44d1aaeb6b28dff301fe",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "712b10f3ca74490589e461e463ecfcb8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "870175f9e2ec4eddae7bbfadfd536cae",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4323bb04fdca4b409e28d78a78ec3daf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4e1caa03f3db41a08ff89309b5e6569b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2cb3bcd6da254528afef60908ab754e5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "78a884e48bfc4095b3a07820674f5f27",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "745dc388ef454f5cb56d05e2a923250d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ed228986d67845f9bb999578c1350147",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f721a97455d64737892b0d22e82e1595",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1a483acd730647eeaa8bfa3cb38f3273",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9dabeb028bbb49cabd7c845e7bf08dc3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "021b3f3071bc49c489b97c617bb7afcb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "81bf4cf6f54c4bb985b002dc00464eee",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9e1d2dc41a284d51896c7bf2c47171f3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f5ee799b66474804b9e0360f559b961d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "71d98d7dc3f347b4a122120353eaa279",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "41a7f833a15d4b7b919d8cdb2208e320",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "39e79918b8dd40959cc11ec6939ece8a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8f3884c0e66e4eed99faca60baa527ab",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ae1cc530bd1f4c5088fff5851c4c27e0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3d928894270b4c4dafab48518fa1e8ba",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "621737ca5a384bf0bf57ceda654cf536",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "62785a01c67c4c669eed49bd2296e6c3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7382ea0d1f9a44edb990d1e1301d70fc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "af4355a2f9604cb5b1d8e6859593d9bc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "e0c97df802734e339f4a34d7a1b874b8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 8
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "bee6813a5b774196b255d4911fbce3bc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 8
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "aed5aa0379dd40b3b84b8c5504bf0554",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "ce2dc72916c24f2da7448e1cf7b6d544",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4acba2b94c0a4b46a7c8ae9d7b8b5f9b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d3c4bef4865747ba8b92046a92ebe8d5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c92a638a4d3b43bebfc0f95af009292d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d9f03a717b834251a264b39950239f76",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "73e1a1c25b684e23a84c93fbb5073627",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cdf6d81bb59f42c8801b8afe3ca4df00",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "89b7c18443534309be81b35e808c011b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "162bc79f7b654dc4965bd795dace1d39",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2bd06eb1e6274510aa2a2697196cf7d4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "27eaa6d5264f4a49bd5c942486b1b9b0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "03de24e96d524b34a7fa166ec5cddd1b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c0f69394c67f4276a9735ba13b71d632",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ece604c3895842e1ad7ecec833f1639d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "eff03110d0414b9198f41007fedb227b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "25a97517f5dd4b7ebf7946eccd9c47d4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "427c4c32fba64117a2cc3a74dfbd636c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "b04b29af44094626b47b5ed94ddcbfb0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 8
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "194831ff88314a32a3ba73d71462e65e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 8
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "17c1360405a74e6a8adc095899dc326e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 8
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "88c2203955d645c085bc0f4bb358816a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "8b64e3a93d6e47e8ab168faf8e10d089",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f6efc54f9489435886239f1c33939996",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c935d77442bb4cc08951f5e5f3d83df7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ce816468dfe24315a75c66530ad2134f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f3eb9424b0ab49ed910a9e432dc39378",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "336c3fe24ade49b7b3fdd0cd6ebc8ac9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "37d8d6dec19942fa84046c780e75f4ce",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ad1d96b1d1274b288fec882115670dfe",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ba0e963c461b46f8a761300d26953160",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f55a4eaebb6e4740b099ba591c71b6e0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9b3b1332e5dc43c8925947c1598a3437",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1edceb7edfce48adbe58a6ff19c1ebb8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "87519c15d9864bf685bfb257d1eafeff",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f288b6d0099b4b339361e86cdba8fcef",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4e01285953514eeb863d91ae4e41aff0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "82caec05fae742e5bb9194e6f61a47c4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9c5d7049ff704224a06be59ebd411a54",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "484652b46b0b4cbf95f50fe8645f2f2e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b7ecafbaedc24cf0a2106837a5702bd0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8bd139f5b9b14898b7a0931d46a34fc0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "58c140a009c5494bac20e2efd0f5059d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6f6dc5c142ea4f8985210b3811eac505",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a08ec80c978a4a2a868211c965be85f1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fda95978d868496fa281797fb26e715c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "238e29f811c1418297c4aaaac941315c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "94b88e3c71e84f5e91882c44fa7cda2e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 7
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "ae53d5692fce42ce8fc4ef5580c7f128",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 7
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "056c8d4ca70843e4ba9190df44d4edef",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "22413d5536ba402f99bd8f33a4116a36",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "4484e32d65cd4b679a803d529c6a96cc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "64e9e1ed8b9c46218d60fbc1a3801e29",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "408708293253450b8699bb3bd4478155",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f9d28d14e0834f569869357fefe56dc1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "30aa1e49734c4297921070bf0bfbd111",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "76f33b588b3e49668a7bc3f0980c5c96",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6a926581982d4ae38d5af530fc467c79",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d775b2ccdff8459bbca7e679e4cd160b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fd26d064ceb74411beb78bcfacbdf9b7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "232c7381dd5c482da1e08b4c9dce3002",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "64b2bc75fa934957ab26b7fa87ee9418",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c0a51e4d49624a8290244980d8614ace",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c71927986dac4fe191cbf6ca3a858f53",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f5a0a1bcd4f44d3eab1ed8f773951d91",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "528c3f0782ee4cabbd384acb92ef3023",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "56e707e120724df6859424a638310208",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "013769f3a0c147f7957bc32ffecf8501",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3d72dd67df6741c3a2c4e3c64779d884",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1789c4f69d2e4c4baf2b61178817484b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "d0dada9ddfc1404e913d51cae14a3126",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "8bfa98a0b11b4b608bb5a5b21d8cb13c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "773b6872edd64e35890930483efcfe37",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "abfa2e070bda42c0b466e9ea9f359cd3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0b3b6d3159e040aeabed28403251e473",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9e2fff97cef14642bde8266a12a9d081",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "be48f848ceda4a7897d520679ea24c26",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1345a5652f214820a7943c1600cfb12f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6e893eac879649ff914f72ccb160bc39",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dcddfa99e70a4ffbab21d4d604cf2c39",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d380ae3c10124464b34da8ab5407eb5e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1acf7af06850477397c381ddc6290dd2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "524493d4c76448fda1076c9021ba55cc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e354407f3ed144fcb5e7e8e70df01090",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9c0bb233f7a242d7b2643345b4285f6e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5112746cb52242bea39c59cabf4a80e6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f77b10eaafb5405e923ba5f0d7238389",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bb447c92408a473a9502144577cf2242",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a081b5dabe484f8eb65c8d3cd3a5ab40",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cd349222e96a439296fb347563cd9078",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6ac8c45043f647938bfe0b71c6804153",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "77ef6c36cf40404bbec03e41a8b2b964",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "664f7af30008415d841996d07513ebbe",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "057adca19c214af99265b31771f35407",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "780e4570370e46a182d2e2b84f2fb46d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7cccecbe10864c8895051a464a5a5c73",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "b0146799328740ac8e1be7fa4e0100ff",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 6
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "aa27cee24c8144c3bf03a0b216977f95",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 6
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "31aed32237404134a5aa95f8567c8b25",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "325448ff13134107b6a8a949b4c704bc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "7b71d66fb1ac45e2abd604a0e9f8a641",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c6105b0383d04169983b146c469207b9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "706fadf98d044d63a913ed78297d4336",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0d54532b52c24b0d818bb61f0159b3fc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "9bc126cb58c84dd0a32b7badfa95e39a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "aa19b56455ff4bff81db2429473099d3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8b79da76d18b40a09c882a91cd7b9b30",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d50c6600f6e54ab4ab3ad6e2971cbf53",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2daa1aadf62a467cabb703d133f5a954",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9d5c5c888075465db6b81261569807e6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d07ccf134cdd445a808efcff77d56305",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7461975ff69a4fae8b6f845a06c2641c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "bff957f46cae4c2b95ac9a04e0c4b0c5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "cb36a92c65864df7b4d14be6e140b61d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "702dfc32a40e4c58ad646020cf200b06",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9f6b8cfb97584c5a893f27438f063531",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ab3e9b3b658d47c2aabf71bbb1188d06",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3722dfbc141d4730bb706240932cb4eb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1e38732a760e4a35b60308052a13f965",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "85ae6cc7346c44279eb3a98be0ae6e21",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "d3d4381cd5274d6193b2da5f3c332327",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "02f1b3016acf40adb4e540304e9264b6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "60463f160bce4248adb522628a678fff",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "23eb54c0569846138d43fecfc4ccb937",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "40f7dafb0897419b92ee09602e4d4dbe",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "12e23d65721644a1b99c44110aff0615",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8770ba54864e462f8277ae92bbf97f57",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d379d1c858a74b6c8407258e28decb7d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "83fc3efe5c044c039fedf5e97cb671ef",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e3fd8a80a14941f8b37e9414440e8c26",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0ff5b44c35134160a6ca14fe8fe504f9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ef2c77188131484f9f16b08e055ef17e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "063087d7dc7f4e83acf097d194722245",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f2a15fb6ed8f43b1ba46a4e2e691108a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c0765e59a0704752924885f30c4b1b1a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d3292c23cff0472e86b14b26b9af1949",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4639efafcbc949caa0f49ab8581aab3b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fdd670e01d6248ad9156bb7518c23336",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5bbc4257193c45eb96aa93ee642eedba",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e7e6947f0f72446bb8756bc5be0ec375",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d72aab2d604446d1b5557f18f2d77a14",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9f88c5cd1ea34f9fb788c7faf94529dd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6bfad4bd6144463e93beb0ca80724375",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "853dfc3a36f4408899059d5db7b62c95",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "327f07b44ffe41929c22821ea7dcbd51",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "0087e839f32e44cd84fe836cc8be34ab",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "8ad7416dfb5b433da94be5077ad6fe99",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "4857e6ac2ac244b8ae82f252c3856030",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "359638c8f0fa412297abc0b6d57c8da0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "b2f260344f864979a072fa4fe62401e6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "2deb1f938ea14b34a45ec046a0c7c228",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cc7ad56afe93438698cf1d43283ccba5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "28838ad21395476bb0fdeeb7316c6e95",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "707eb9e7de7a429d81705958d603d157",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "ba95c644f23442c49ff15fe4f514da01",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "3a6b25b1c09b42cca555ba611aac9472",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "491d42b9b1a744e08f55e66e74cec7a8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "97e5f295e1a5484b9c10a03d7a4dc5de",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "aaa17491e67a4810b30da9a1b5bb313b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "5753e10a25874820b504d04ca5c2f208",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "0dc8bc329d7141ce939b9a44d759ed28",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "9839c42799f04224bf3d3e0c67ab2b0b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "0d6e17ebdb41423b8cb9eced235637bd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "7a7c13b0bf9a4f118989af0ba8611379",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "84c973a55d8644d7aaba3ae053be926b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cf1da4d2a6c54b8c9c9a6a38a816ad12",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9d26abc9d4e4440cb64b291f25214b18",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "02d1a85a637c4401bbef6f3a68c15ca3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "a1d0243d9cf04890aa4fa6b7457514a1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6916ffb857cc4c209e100550aa930b03",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "461bdf0e9fe945b793720d2e7a855d49",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "4490f9942c5b44d18182f081cf3c5ede",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "9ed7444303d64376930ace57cdea95b0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "e9c555d6581d4f1a8dbbf40fd9dcfafd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "cd7b002ba2aa49809986a4311f01e3e5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ac2190441a424f028e881806cf293124",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3a853e9ba4c043bfb78b995e163c7a59",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b524c271936b484fa2fc6676aa82f17a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b36e14b53a6c43fcbac0f850a8195ca9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "41211ea7d8854c349e66aefdca841553",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6253f6aec28c43128bb35ae399e8190a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9a98e02387ad4cda8a0f0f1604c46628",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2733ff640e034985a22c5862c0098f7b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ba1d94216dea4725aa6cc90997adfb9d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "931fa5b2b62848b598fdb98c29ab2a2e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c62ca65718bf44989b1d37c436f055b6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7715d92fb4774385bd1c424d1d4feef9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e3279c990fc845f3ba4e4e5bb09f85a5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d903f12319be4064934d5b972c4a9dfa",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8a80427e72214088a10d0f8d776642cd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "54c9fa1fbe4e424f8b0b6b5a7b3af9d0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3d3cc0de63c646169bc1289e617ba64f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b5f8f02e6d5c439a93d892c609b15214",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f731cf7221d14ff59e03fa7f9c25b325",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9a76bde1481347d2a8328db3a572a233",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1b5351bc6a954c9a8aaea09fd3c198a2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "c089514315084847871eff6e64542598",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "a4a6a81afff94427bc8d892fc36dbf28",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "08cb4b70273a41f8822c5b3b16c6f91f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "9c38b28739b5474a9e67c9b07d6767a3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2669a02aa0af4804abeba03b7c5807a8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7e918019a57f428d8fa7f51ccb45f29a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5cd8b234dd3a4ba4bb403a6bd99b0810",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "405c2152a6c04703a1f6b9a6b879bff6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "0f80f229d737457eb4d8641510c642a9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b08bb8846fd94b2f8555766614741448",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f3d8b1a47cc4415b9f0a42b45a087ec5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "93514a8b7eca48daac5317b48f2e62e1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "3c5f4b08b65f44c18f244814977384fd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "5a5b71f9c3954dd8bea58d83a6687d6e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "efb0a03dd972408ab214ef8e254b781c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "48db10c964a34769b5cde0897e086031",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b1c4537ed02547d5aa046e56cde37379",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "8af34e0651ea4a71a58e64a2cdfd579e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "3cddfdd753a04098aab831b488bcaaa8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "abb0d871bfb243148ea3c71801bfcc3d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "72900265ed664cb3b328031f4b53f4d0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "68383da120c54aafbb9a3b2a25cea828",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "fb9dfc0059b548afbde2aa9e019bd506",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "92d00da24c344588aff45df60fbcf420",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "18d7f3fa94544d8e8171e6de27d5ab69",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c8bafecfb51b483cad32104947e35fe9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "c8d27f7ca09d4139bb32b2c39f7d3496",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "a8bad34b7729464c8962607f4559b801",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "5d3033798c7a42e8aacf2f1d58fae005",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b0cee3741de644689c94c35823afc47f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1a5f87368cca42ca9ceb920e5d4df549",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fcba4f17ce4f45018b3c8e17d91f0ed4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1cd758172ac2435596654d19b673c148",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ce75a0a97ebc42d49645f673f04be4af",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b2e7c166cdd340f0bc637bff7ba4f3f5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "edf11813f1ca4056bbf6060cfdd33939",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "038a35caea0446d686d120dbc1a190bf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "16330c3a57b14c8db9ad9ce40a7ce59d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "160b481fb6aa4847951b347732a31b57",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1b4220a2f53245c996c1ae2e8dd18bc1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ed03b648a0ee44f1b3edba2c167e765d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a0e74a209bef4bbfb9d17bdbce17fa47",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "775c39cb4b5f4fbc82ec5fa81cc355af",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a4eca7b6d416456ea47443cafa0e1f87",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ee9641e11c564abdbb117584d0f04e6c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "60b28f1efb0f4b818a865a6dab400f2e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a472afe058fb474ea2ceb3a475546bfc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1de8e713df5b4fbcbed18ede6f2d4cb4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "5a20eec623794c49b45a05e96fbab301",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "45d954ecc3d642f68062739ab39da91d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "3205ca679a524d0d8e84373c70e134d5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "7728189dcb3c45debb8f488a02e5a9ea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "ebdea4ab8c6c423ba43043b29719ba83",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1df1c27a1ae343e195acf3680a664974",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "047771372a8d4176a7b6353a45af0ba1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "5d681c977b3644519455e5bcab1305f3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f5ab3849a5ba4732876a6645a53d9a72",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f5cf0b76886b49428be2102d918cf9ab",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 3
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "fc1170382d854646aaf28b30f44eb2aa",
      "districtId": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/fc1170382d854646aaf28b30f44eb2aa/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": -2,
        "y": 3
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "23cbcd5962dd4a87b678a1e63fe51c2b",
      "districtId": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/23cbcd5962dd4a87b678a1e63fe51c2b/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": -1,
        "y": 3
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "1151b460dd1743c8bf61110b4e0edd04",
      "districtId": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/1151b460dd1743c8bf61110b4e0edd04/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 0,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "1d56c888d5af45ea93c37a7881df31eb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "0105280f009c45fca6d118d67d8da358",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "6e5a935e161a4fa58ad54d123a25a0d8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f9cbbacdb68349b08fb2203dde1936f8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "e4e2819aaaf941bcaf1741a83b9d5ee0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "758249bc7ce64b5983ed8911de12c008",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "43a07f93e1be4ee5982cc5b1bb1aaa43",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "e920afee31ac4e98a5666790d4f982c4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "1447241e132849dca4229f68b9816984",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "1b7ea268b4b44f2a8e29e1cc7c9c1809",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "5c47214935f54b73950e2bd25d675b30",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "b302afdca511430b94c17287c173e80d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9bf0f05a5bc64e7db68ce74a00fea6b5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f66ed4fe28594938ac335df25cba8dac",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b05939ba6bfc416f9737f5b6efa6a625",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f3a597510d7b485a8061e31581b934ec",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "235b0da4527b484aa6fc2b77cc27a545",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "d57b9c7229954627a452b30c6bbe6b30",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "c69aca5840464b1da12ea1d2513d2340",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1b4b94ffad304dcd8e32fdb2d855a6b8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c8197cd19af849afb5291be156df5776",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6ab9912993474b27a68272ce5068407f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fac35a021af846aa9128cd382fa45aae",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "83e4d50e6b184c7bb83bd1a2c7de3ca4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3479abba6d214b9b834aafbf282162d5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5d0c1550d06941e3867b780caf5c29da",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "726eedeaa29f43f3bfc36139e30f2164",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1e19437658ad4520a4970d0e85422bda",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3449327a86824eb7a8cb60eaf03d82e4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "328d8801e7154a369d0091536a20e877",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "05539b8b29dc4a6fb46a47dbae3d42ff",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "73aed7c1ec8b4f18bc3dc5deff6e0497",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6347a916e81644959a95a82aff3add16",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5712d7c68ce84b06854be8f82cbb13f1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1b2fa30e222943d59f0af9cfac3c1f74",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1e9273a01fbb4f919989a461f9d3dc49",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7fb5a86465ef4d6d90eb35d7c724e02b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "0b50eea90603448e8d68c8e5bcf20e62",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "f1d093ae3306447cb56f03c5f7f9d70a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b2f9b7ee5b074a5482b55560cd7a4d5b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "831dbe73ac284933b4d5f1b79072007a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "c32b71116f164f6d9c661eb1d16909d2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b5433ee5deba4293a7fe4111d2293e1d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "a4f8aa7c71624603aa1676fee8300d11",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "0ce6dc8c128343cf943eff09d2564820",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "a1a4662841b848b582d4371fc0572f50",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b5eb8450f533440db50896760f78765e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 2
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "ad55553b02354478a673d37a1141f871",
      "districtId": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/ad55553b02354478a673d37a1141f871/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": -2,
        "y": 2
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "d1b829c2e6354afd983e83bed26faf9a",
      "districtId": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/d1b829c2e6354afd983e83bed26faf9a/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": -1,
        "y": 2
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "b310c053b1e54e19939821bce7ef9730",
      "districtId": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/b310c053b1e54e19939821bce7ef9730/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 0,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b2ce1b8c83cb4d598eb728a54d9e4628",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "e4a1baad43a9425d95c90537d1e7f66a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "a8e0fadd068b4751823ab9b2448b2dcd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "6bd37c69acfc48daac99b2ed6b01986d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "301f2d70626e4337868bdd134dc4dfc5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "d86431a38c2e4141a854318f0d3004e9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "e9e3f0257deb4860a18d220943600c90",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "6d052478ee604d3690724ef326752724",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "5fd73fc615454005989fb6a5641e84b1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "7cb46d0796084723bd9f8ba003006028",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "d303112a7ffe4700adeda9a3925850f2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "77a84fd41049409886d66a5d3ecb5cf4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "4ed1cceeccd64ffea1caa910956077eb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "761d53a28f764ab08ae9887a19e782c5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bc4167d8c1db43e9a952e1d3a162df8f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "875772a1312745efb00bf49c5be347bd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "c18505e44bba4439b1028263aae78f14",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "e6b37c8ad4cd45c69cfab21897b6e3ea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "668661d90a7a4cc3b2b9992652b77338",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "1a0b8557d4ff4e02aebe85f7c8d3adea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3fe8be5f43984c86b7ba87372bc94da2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "baebd93332cc45b2a025bda08e433222",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7f8b5888316f428480977ec0db43019b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3109b0cf8f354493b0988cbfe925a1f0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "be97fade34cb46cf8e619ca9adbb7906",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e8ab745333d84876ab87e2d0e2732aef",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b2b927837e1a4f2baec2a0d30672f81c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "78a3b8e7657d41c39ebdde974294cefb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bed47fc4457e494bbb0bd2e02540a863",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bf9386cfc1034784bd0f9a075ea8c144",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ba2c3419ea524930bbb6dde49c5177e2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8453a817138c462cbe1cc2de5289c88a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ef792a7d01984372880fe8a78e655464",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d5102256baa1442b882fc3642985d2cc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ba063e0afd6848df9c2c4e0f38718dc9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "01e76c1d776b47ef8787ec9cf97dfa4b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "2b5177f11eb34155bffaf064a90bc122",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "4e5d54f2a4424674b2bffee0d7454141",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "6c8ad41314254022a3fd8c75550a960a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b02578546535454ba5afd7a56dc52002",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "e69e54573de14029a0e3aef21ec4fe87",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "17785351924d4594a243a2d662458034",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "8a3b679fcd1044728efb92714200c45c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f8c9e888dd8f401d8b9885bcf055a841",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f0c49a93f3de4db3afc3a726dbe07591",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "5d4fb4c59afd46abb73d8936b0a63923",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "7cf77efcf4da432e90e5db818c4a5f13",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 1
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "8ce0b28d70c442ec9ed866f0ef3fb901",
      "districtId": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/8ce0b28d70c442ec9ed866f0ef3fb901/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": -2,
        "y": 1
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "dc595fb798b8464cafac7d91dc551420",
      "districtId": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/dc595fb798b8464cafac7d91dc551420/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": -1,
        "y": 1
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "37e393d6e5ee4641ab4e50714741b3bb",
      "districtId": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/37e393d6e5ee4641ab4e50714741b3bb/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 0,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "30b522b31cbf4832aabfacde91991ea3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "56de2672dccb41ed8b862f380353ca9e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "41723cab11274751b5a53c326fe5bfd0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "d6ad57b3ca574e4cbb560b45e695aa9c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "807c2f1d857345d0b35c1ce5b0ba609b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "9a2ad676215a4b038be699a7f8171846",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "11a3060e81c64a7c880ec579e8637eec",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "a0b59e665ff64b1ab2c7213fc4a7c533",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "3fc7c28fa040489b968dd5d9ff00a51e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "eb3daf71cb854cfaa972e709e967cc05",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "0ffe7c9ed4ac45d5aace98ffcbac8206",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1049e6e631fb40bbad79fd20f3931eda",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "c27557f0aed5464bae687b6af3f74237",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "4116464d29044b4c9f90216de208b415",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "61b188f103804b9c9f1c175bc882171a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "53c479beaa9c425d94c3e5e333dc6e8d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "09ec14b2180d47d39f6c15af5ce8f52a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "d75ab289e3094350bbdae20c67d6d943",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "e0cc412c32ca44e387bee2ec09ea61c0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "883dfc31bb9d447887c1645ce59ba0fd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "090cdef41ed04443abdd36a60a5ada70",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5b1e93a871514f71bc6447dbe6366c31",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dda906455926495892c2b1636be25c21",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "23698d6e68a845b780625516aa667af9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d163206cd83c488291c3df1939548ef5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "35f2d805d98f499391ca7b2537de8f93",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "77967e2ceae24b78a738a068b8e80936",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4fd7e0363a6b49a984dea656575df198",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2304310dbd814a5c8e052f48a967b6b1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4e470c118d3a49df86ffed6496a9a66e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "95cea10ab66949a5889b95d58baf5309",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1b22805bd0c54deba1df8e8e20694ef1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c594feffecb4485f9fa0b5b7c018a34e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "22978876795b486db689709c52ad277a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4a14e92ff69c4561b2d15a998c6d4c4c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "45f042c8b7fa4057ad0bec1bf7efc5a3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": 0
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1b8cbbaa0f9c472ca269093a23edf937",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "c520d5b262a048feba8062f67ae762aa",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "9bc0eb9e54f54c23b6614510b503d950",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "9296b21e90a64a99a487e12237c1b6cb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b6e1c66d2ee94ca59b7d40909c6ed083",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "cf5d803a5d874cae8ffb7b2544030cfd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "9552009bcbaa471392fd25ce56881688",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f127b773070d4e7ea66e8341a2300985",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "3a3d1f6595fb448c9757879ea81e223e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "9d6a9df73d55437f844fa0531e414919",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "0aeb50ab84224bf2a784899a09880640",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "8a0d2fe02338495d87c1865d019c0e0c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": 0
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "cc5953efd9db480899f5e50a70e6f8b8",
      "districtId": "40e2c9ef6ba2444a83964bc3526f6fb0",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/cc5953efd9db480899f5e50a70e6f8b8/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": -1,
        "y": 0
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "c80d2fa0c763424294a8662c05117154",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "22aeb566d4a84ac59902be2ceb5f03c0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "8ad0c7be575c40738185b8876f33ba33",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "6881690bf172426093380114574fd7de",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "a03e1101f4a940adb555eb483a4785d4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "9bf5ac4864e8476ebbfa575488bb1523",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "9830bab3e96d4304963150f0979dbd55",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "fcf2a6eeabac4a84891a5e59cc641162",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "aa7e763f596f447fae2f9fd6d2c564d9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "1a77cf20fc584f869e96bdb2b7d310a7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "1e40facb522c4f61a9db92918e71d312",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": 0
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "1bbab91f138847769c847203d23102f9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": 0
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "5e5597c5a7e645c2a718af9ae3658cbf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": 0
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "b1810ff1e7cb471f939d40b44f6f4739",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": 0
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "6060ea5ce6ae48d1add4f93f9e76b430",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a74edc39765a4d0181a7b87d8adc51eb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0e9ae1a25c264dcb853fcafa737d850c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5c23d447d9ca4cdbb28869a88b872d1c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "ad728beb448348ae80b3edcdbb14ec0b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": 0
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "173dfc62a6264df7897699c57526fead",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ab4959f39d90482da06b55e033ac63c7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ae8dc0b830b64157b8b674c3437299e0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9ae6138ba97a4de3bc57e932216e9a81",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2c159b16b6b14dad9faec936339275dd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c8e9fe29b8cd4a09ac013fc17aec7769",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f78cf09677a94b2ea439a1fd19e60647",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "45a63129c3594858a4cb66cc8c9f1579",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": 0
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2291ed6f90c6410b967dbe473453e147",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c75b643da40d432095c725a4b0c86354",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3e61f214226845ac82818f71c0821843",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c40cf159c44e47388e909d9ba1a390fe",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "63b6fe13dd1e4ac5b98f9b7c83cd8a7f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3491911f46d84a25aacdb6ed0a4c015f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "24ad1e76415b4aa796c4192ce48bbf2a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a207b8a5387f43b0b6d88c158b079ea4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1fe41e14e07b4ff5bbd1f03fa28d6dcf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "43d28c165b6a4d60bf21901f8b3ea0dd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "3e34f5a93e944a59b75dc8fa58f9dea7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "74e34d9d417f430fbdf768330df0ac4d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "a893d4bfa697474eb70cee4ea176ce6f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "803753b43fce4ec6b2caff8a7cd9fe5e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "66030a2434d84146b7f5953382540a69",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f125dec947304d9dbea3836e0b9049f2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b295226442fd48959d480539050d8c25",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "52a445a230a746f6be63d22fabb7f767",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "19b8007c420e40608028c47e46822c95",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "958ae19c8e6e486dbbe4b21aeb38c1ca",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "a07c13b126344d15bf4b30d4954468d1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "e66ffeb7104d4ebfaef1ed9daacff6f0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": -1
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "c0b327fefedf4017a976b8fc79f78b2b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": -1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1cd020b69e5d4c6e9cad6825942f4a1f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "634c21c7648148f88aadd3f945aa673f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "8271990349944465a5678252fbd6e639",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "bf4bba9d7874420c902af15e39770537",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "453be30cd3f14b83b53872991d5479bd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "eb73695893c34514a3942b220fd96dc9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "0fde9a7e88a3441c9a1cf1107ed81561",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "06047674ff7048f69ffcabaa51c110a1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": -1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "d87d97e2d4f74a4a91f8a5b66de981a5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": -1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "61556bbaf3ff4481b8bd794772d68687",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": -1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "7418d2ec98954952be9d0a91f707bb7c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "fb666c57b5ab468896abba1ffde252ca",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "7676374843224e31af28493ba48fecc8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "12963b5f5a4f4522914b49cfcf58e90b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "79ff955eccea4482af23fcaf7b34402b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -1
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1aab01f3598d49779e6b0a35328a6186",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1cc96f44acab451a8843266474d5a521",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0e05faeae0654ef2b5abf0ae1e8e1567",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "b3b5ed09c4f948af94cf7c51d2c40caf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -1
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "1dd2ffbf2e1d414989bafe4e1004a935",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "798111f1515541cd8f8f31eb72d27115",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3c87955849b64acd94ec8abd64dde5f7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4ab2397b6f814bd8a3e7228ee55448af",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4b13661ce37145bb8df14b745b6499d8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "76f5785360ad4d8fa31ae364278d3747",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5303a6428001449ab95bcc1cd7ea53f1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "112726717ef14366a59b99c6532c2e28",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -1
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3a1af4fcd0af4730b806fdfea4c8577e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8372bb87c0e549c79f8558ea5fa66377",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2012385187ff45ae9fb89a8399186c8f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e3a9639b28f04dd8bcf06235293ce58c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "207efb811c664556897691aaa176789e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dc426de8291d4d708b86f683e48673e8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a884022329954b75b7f81982181cf8ca",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1ec852dc61824493980d9917bd5a5982",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "088821ccf15347b4b080d3c08bd32bdd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e4e507c905174fa68439828ef6d58a48",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "25eb14327ec140e9bd021b5aee1db763",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "a549a3d91eee4aa5803762a237069ff0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "c742c31d8f4e427db0b04396b9b1377c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "9fe53f6602184c72bab483c40485e99b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "a126d935a4ea48628b3ed163132ebba5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "3a85ba214d1f47da90df067ce08b5f30",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "620a3d2fefbe44758bc29c0f8007a7c7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "9744641d46d24d04bb3f672aa6a37b2b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "215bca09d3a640d0901d8b784e483d60",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "b054ea2fcd81446d99fbba730285da9d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "eb6c6acd206a46ba98fe7248fa88349e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": -2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "a460567dcc3248baaadab22940ffcd29",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": -2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "40614cfa80814b9ab857dae957c8ec18",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": -2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "d6d7eda480eb41c7a0f102a4e726dda6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "6355d72aa2594f609cea5334767442b2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "744e6ecb242f4628ace09d7321e08f39",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "90ce3d8ddd2e4d97a76b371e9e896b22",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "6f616669d3cc42bfbd9f0c1f7935f971",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "693e37bc0d4a4ee9934f2e28499deecc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "cf58b54f363a4b07a538a5394d4090e9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "706c6ab7b34445d381c7038aeabfb44a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "9fd982a23afe44409f04e4a0ed6cbb8b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": -2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "03d878ac6bec49e392218498aea923d7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "81a1687d3b6a492187e4cdfa1e630e5d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "35c6f696a23545199a6c621bbb3af5ce",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "9773e34488084fd79c23fdea8cfd09f4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -2
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "7c209e1d3b744aa7b6ecb260e3b1ffdd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "63c73f2c024e4199a433072fbed7836e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "360a6ced1563445aa3b463c1ccd9fe7c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -2
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "233b814510bf4102ac189a39e3fa8148",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "49f38fe4e9d042c2ad1b05502c1b0383",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ec8613e2669446ee8411b8b60d4e7d8b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -2
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "cd40b6669c8a4086af44be6b45d49ab2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6801126663484e67880319724eb1f6c7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "23cf543cd7d6458b90c7c5323a309f76",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4e4850e071504c479055041d60626bd1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "702f12f66d4e4be79ab84d6ee6ff28a8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "18f63f1128634ccd8aff154c761d9b07",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "19a850ccd06c4227b85b760da36131cb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ae3a8acd28724653a3e4cedc060f7ae9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -2
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e218e4d3a1314b22ae200abb65c104e0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f399a6cc3dda4587aed17c8b3f381ca4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "882bfe01a62c40c8bdf9e74bb1c1eb67",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "275aa85f8b274ba784bd9165e2710ba6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8e287d27026d47fba43cb6bd55c28b78",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6074b533ce4c46b0bbbe2deeef337958",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7a4e58d5cfca48f4af9ec72bdf0d2090",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5a654053bec247989f340311c77e4bed",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6f7fe235d6014396aef724f09809ac10",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "20453de7a2b0450c82f850e5e751102b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "32f88b81084b438f9c4bfd6afa095274",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "64772afecac74993b6ea0846530e82c5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "643aa1f038234a36a3faad3c3d19aaae",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "6a2dbe828c8046098f3642dd8011e33e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "259c2d5cd66646b2adeccd9e448017fb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "5ddcaf2d166f45d392a80796a7496299",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "73de67bae06d42fcbf595554ef6871e4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "ebff858dd78347bf9b30fe85c6f10af7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "9c7ceb319c7e4dd7b5d6878096bd6357",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "5cc6297160af434d81c503728458e45b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "2808980ac19b4c70a71a6212fdce6a3d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": -3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "fed748d7309f43ca8cdb49c648c6e04d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": -3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "952841d77c9048f5890d24910c71706a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": -3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "3ef0ee550ccf44c799c4d25c983bcaf4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b31193bf90f64640aa93b02c5274cebe",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "a04c7f83669e4453bca1055c92062c25",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "281ce96f5cfd404a8a71cb4ddea5bcf2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "bca287f20218480ea5c77bf88c060703",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "5a16e28300894c26a0ca242bc73ab5c4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": -3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "091ed68eb2cb408abb7f7b98c34d18bb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": -3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "2d62aade20ef4d80b462807b53fd7496",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "3402a718d0914c98aa78cb6becdb8b47",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "87933ffc56e342ffb1b962d423573835",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "96be416c1a884a46bf284f77b906a90a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "18ece27c76b5454ebac5e25903a00d9a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "0ecc3dadac0e400a8436f2d756123667",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "553c6b541137499182f5f0fe91557fbc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "766cded75b6d4bc0942dd0bd64851e82",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -3
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "ac6f11b22fcc440f88e0d5e261683c6a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -3
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "ff2924fa828e467d9ca68ee5a52c8d9b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a2be8aec58ca463ab17d430e3677e8d1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e5850734804e4186b660691cb1519bdd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f39d02e92e684e3a92ebc7fbe5b15d1f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -3
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "0f86c9637b2a4961a6932a8075034a01",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "143db8ba2def4fb68857680341d220b4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fae2015aded343cf8289a7a6dbb621d0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "352e0435ef4d4f5d9efd5d1a883b0a90",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "86e67be560034ca9aa5393a267cc5754",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2834b323d10f4f2f8b27b35fde8fb093",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dc8d04d83b2049deabfb6ab7cf5e6c0d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -3
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "58cf25fc196a416e89007900d560f9c2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4f3b7a55f0b64fa1970d5d980964246f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2f374c6736c24dae8a83c7e27ce8d200",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f2ca352aac7248238cb52e830d24c475",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a772e45f84124c0987c5da20baafa8bd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1f13ae9647294c4e8465e70caff9892b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cd44b6132bf74957b6dac11d2107785c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5a8d9990713d4995b9bb7e5cab692b7e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "def2104beb5746739be9079c06b20524",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c58d8245afa14c22a945eba9fe6415db",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "94a8c80df03c4943b5041ec104cff746",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f169c0597fa74973b60307ca08815250",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "81679dabc3c0405aa1a4279e06157992",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "0ea4231148384158aaf0f7c4b499674f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "694605f0cf8c462689a5604542ce1091",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "d1a44dc4128b486fa228ed48df95c426",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "3f0d10840f7e48679ea082027241956b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "e0f0ae539a8b41ed8e6b112b347eaef5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "97cc73493a8e4b1faa3fd33dba641b63",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "545770cbcc46439fb468004d18dac691",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "4acbc487b1104d73bbad5255143efd53",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": -4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "13abadc556d24093a96881dd6e68a501",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": -4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "0d5150e08ca84d2ab75e458196006ca4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": -4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "74a96ceb8c7649a6aa3db81634d53ac7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "fbcd3f6db18c492683ae928a6993a49c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "94e1bae1d9764642ab581fe165fb4c29",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "8cf4beb6d6054649aa9c1fc669173792",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -4
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "67c2515c81e4434397d31a8fe36c6d07",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "37562ec215dc459a976085df0f412927",
      "districtId": null,
      "image": null,
      "mapImage": "https://image-uploads.coregam.es/Dev/d36a64fb-0ecc-4938-a152-2e9d484bb18a.03df6e5121504b79aefe4d2fbca1be7f.PNG",
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": -4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "fcafb06629e74e02a144707ba9a3c9ef",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": -4
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "3ede05d30f334905a4d9f54842a3d652",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/3ede05d30f334905a4d9f54842a3d652/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 7,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "c22edcc8e5eb4d91afe3998771a72b60",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "39e75f34c3a645698a8b183d12942a31",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "6533dc1f59374fdfb92ce8bb511c0e95",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "cc1764a6869549b19d49b2cb22dcf8f1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "5d37092b02f64e28a73eaf8d355b44cf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -4
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "2ebf5d2576334ccc8a0e969bf626e663",
      "districtId": null,
      "image": null,
      "mapImage": "https://image-uploads.coregam.es/Dev/3d98a08a-196b-4876-bba4-79396b989ea4.83bafcf966a04630ad881086c0d6f1fc.PNG",
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d9c97a78b6e945758b27a5173e5ba8bd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "38461233ba514604a83532a01b01f694",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "4151a91e5dc148efbdf23623879aecfd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -4
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "a6d1f42e1d3b440ea76ff027e1c5455d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "541d3a58e60740eda5cf8100f5d1a98c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "815307c0479144069622e156bc21a928",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "315eff4fbc0149f8b79e220a5b088632",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7761985b1e83401888aeb50a717329c7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b1858c4fb1c947588e2e7ff7dc852b67",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4bf0c22c0b0846238754223a42b71616",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "804d1f86a406420d9dba8c60d7e9a170",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f05cd13b386f4080b6dc94889ee53f77",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5d5a79e3ea8748ff855f7194418f7594",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -4
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ec1d4739715f4485962bc1521c3c548f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2973cb70db204fb2b79d4b821d20d9ea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d48677af0cfb45cb9d26fe6465258636",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5055c5ad8de6437591b99bad0d7d12ea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9efdb1b7ad304158baf1cde2db8781ca",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b67ff83f4bf24ffda8abec443f2fb829",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c51e4b1e97724d618134085d60f0db60",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f617d6b2e2fc4d0e92bf583d66222a3c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "84cf3c6413a8497483fe845596b08b58",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "710cdbd340e546acbf57005d811a1d13",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "16120256b38b466db087eee25dac1d0b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "7a95c3424ce84b8fbc093fbc4c26adfc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "c2ecfdeaee494320bb28d2e3d9abba27",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "bab4d7637ab64aa19926364135f6a0bd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "738bfb2ae01e473c878feccd6a18a5f6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "58fcfed99f1c4535958b15d713adf3d5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -5
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "514c74ddfbea41308c9c06a01de472c1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "48f0f10d191f4776ada6d897e58d3401",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "eea89213ab21441f9b3860ce5ccc62da",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "2a8b58aba97f4c7199582792fa05ad9f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "3fb43cdf41f248c89e05c2b9980ffc06",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": -5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "50ef1fdc815f4c43a65a630a2639630c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": -5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "046b827bb8e74ecbab83a8de8274ee56",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": -5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "caf8c17a34a443f2809a917d35837bc8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -5
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "b9d32bb63889471e98c7da93b2cf71e2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "74bc243d747141f993fbd9154597c9ea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "5e3d2823b82946019f383fb0aaaf2a1c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "381418910855497384ae3c40c6ae90ca",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1f414a2692ab43a89cff41fd72918b4e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": -5
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "9bb78e1c51d441b59bb271c6ce4108a1",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/9bb78e1c51d441b59bb271c6ce4108a1/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 6,
        "y": -5
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "659a77938d1a470dbe596728f1e8631a",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/659a77938d1a470dbe596728f1e8631a/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 7,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "93706a1c719e436688c5c6223db52bf2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "082eba45312f460480d0345bef92f852",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "20345ee8a138499bbb279ca3a0308bce",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "40baadf3c8324c489b5cbcd117b5eabc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "e8cc7a3e91c9412ca6067fdd90195740",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "0d88f7f3d36d44a3835cfc39d01de1c4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "3197960676784fe5975ed3ac3edef063",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -5
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "dd9c9ff4bdd043b58542e4148bc46c2b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "a5817791e6b546ce88d30acba7d75d0b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "f531e3e3000547abb281e66ce894ec61",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -5
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "637496c608f74c068a07e76b4f0d3aed",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "394970dacf934159a38e53d5be9d7a2e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b454260f437542f3887b7948cd00a120",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6fe24283ae1443e5ab253de8f93c755c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dd004f1181db4e01a6888abeea0f006c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "14fd292f5a964cb7ae14454d768be667",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5df1ab0e5cba49e8a4070fb93e909a55",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dadaeb0005124a93a640519396c04520",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "64766e6f3ea84d3b9e14ef8551031c1a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -5
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "13f83e54f3554e1f97bf88236cd550c1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3a996e64bc8f4117b0d520d18f0a618c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "95afc11987a848bf95c868f19fcb7fec",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6b16246b90c14dff95f703874763f34d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "89616e83f63646b2b4dba2dee1c9752c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "130e4de3285846c39e9c57485e2492d3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f9ece7232f334a7bb1acdac8ee19806a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "964499e8c16b49209e996e546804128e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "393aa5a6a1694b17ba4c2cd2c1e4b06c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4eb32118f2404b048acc2f364d334927",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "9aeec5924908460ca0b1a9ec91364819",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -6
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "9d3b380b177246e4b4c822b3838ad3b8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -6
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "6f77d075525a42febe85056ba163bcea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -6
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "4d598d6b8f04458286533a307dd0afcf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -6
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "40acc270bfb741828f32b7fcd151d3cb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -6
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "c9de247f3949428f997d817b93bf08ba",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -6
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "36b1c5c3b5084c39afbf90d273271feb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "0549fd20e35d43b589cec9666fcb3eea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "e9911ea33eaf4a8e9bfb8149398ac2c2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "f812e008219f4807aa700f298662c502",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "52b3ffd5e81b4d7291daba4e67dee182",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": -6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "1cfc7d6747da4676b298f21868279f1b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": -6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "90ad3106df9d41d4a14b57edb7f4b95f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": -6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "eb74538e2db444ee9a0f0014773aedbf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "a5c982cddf684325b23d7389cb0111a2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "f661c627ee1e43b28c469d61a4bdf53a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "a66a66dd91a74673a833daad12fd211f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1f6c38b52a5e482880179b3b2a421813",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -6
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "e82b95554dbb4be492e8fb1f92ec014d",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/e82b95554dbb4be492e8fb1f92ec014d/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 5,
        "y": -6
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "532e5f22a9e945878c0d9e6628ef8f48",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/532e5f22a9e945878c0d9e6628ef8f48/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 6,
        "y": -6
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "a339e8cc418042ec951a5b73ae88a3dc",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/a339e8cc418042ec951a5b73ae88a3dc/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 7,
        "y": -6
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "688b7abf2fe14610af68280a51d4ff9a",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/688b7abf2fe14610af68280a51d4ff9a/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 8,
        "y": -6
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "fa6d5b838734410dbb7c951ea0c754dc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": -6
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "6e7778525d7e4860a1419d0659bd4bdc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -6
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "2887b1d8c37e48589e82e36b5178604c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "c023359696ff4fa0a4aab6e6fd6c1f03",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "0379d0018ebe4ea188b76059170c55b7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "6d00a4c9e7e84f4dbb6b687e1a267e9c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "5cf429ef0a4f41c8b3beb7b428c9772d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "185a52e921a244f0ac7977b7fdd0eb45",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "03d4658da8be4e3d92c51972bb8171ea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -6
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "02de5f4af5fd4649bb6456fd17ebf013",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -6
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "742878c7a6d5456fa29d6f93feb9e26a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "40a364ce307343c289bdfe7e5c898e89",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "de0d17aae4194526930b54e98481e50a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0d30c32bf6d14e829e50f3d13468815f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "54729edc2ad34d668a63c0a31ff978bc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "458bfc50380a4c199235777a20ae8730",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4fb9afa878c04bd7ab87c7034ad3f6ed",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "27e84b79e8e047658d0bcdf4fd8d31f1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -6
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1d6eaa754ae545498ae6668d0a982be6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "959fe17ced4941feb9a3f9a10f28fa21",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5d8d793f57224164ad3682736856f840",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "64148b3b3b764c318be658dffa71c7d4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "bfbcab557ab64531a5c64f361ec1e727",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "35426295eb9141d0bf066723798dc311",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "faf202b6340c4ce3ac9fee851010a352",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "aa4c2e83bdc649c0adac0616a3e181de",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8871ed3cb1ce4cbc8410ebab4bf8fc78",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "54eba846c6714061b1aec598cddd969e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "cd290faa76184eb6b66e98807b56f004",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -7
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "3a0630a0cc074e1db25231c5b7a0a834",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -7
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "cdddd7d0ae5640a6a54e6dfe1ce4751d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -7
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "88fecdfbc4864cca8843fdcac840631a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -7
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "c17f399f189c4aa3b0fe5cb77c02db34",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -7
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "64f9616afd6c4074b27f6b1639ce342f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -7
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "0bb9bc99b20642878ce5db0c67a21995",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "3ddcb91258a4429a8f52798d54c3816d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "81eafe9c4e614c8e943131db5a1a6a1d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "fe7ec2fe25134fc2a95ea0cb010f00ab",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "df71822d5b3d4d82a6e6aa3d717a2ae7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": -7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "6d595e5d7bf648ea9300d3b95386f2e9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": -7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "27527917a3e74fda89a7df75c312bbdf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": -7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "035e525c8c15438498e13d376b4d560d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "bce0fa755bd64c7c8fcd7d2c6b21d1e2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "1a8f6a1d6b2e4224b31587b515d17aad",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "18e6db900e9d4ff1959eb2fde6eacf7b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -7
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "5d0719332c0e4e1fb16979f88825b824",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -7
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "7e9c4c8f119e483f82f58c4f39ebf399",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": -7
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "7fe8bbd6e0244e569bf6c6a7a7ede3ec",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/7fe8bbd6e0244e569bf6c6a7a7ede3ec/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 6,
        "y": -7
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "780c05f283d945e8ab8f7a240c0517bd",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/780c05f283d945e8ab8f7a240c0517bd/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 7,
        "y": -7
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "d0d17603ff504b2d95069c4e146612bb",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/d0d17603ff504b2d95069c4e146612bb/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 8,
        "y": -7
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "d4f8d3708e41498b8488b8ed564d2c96",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/d4f8d3708e41498b8488b8ed564d2c96/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 9,
        "y": -7
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "9c1a9762163649958868bdb9c80e4e8b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -7
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "4f198b52e0e34131b02e9c4ce16d9644",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -7
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "008a84d41e06465db2838509327e9de3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "83e166c9dd824da187486c40d3a7d863",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "d26163dac81b404e98a180d8c78b1de0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "790052721b484f43b62a4a8fbd69a1e3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "575cda627f514d60a9b6fd10a1ec1527",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "02d49b2ddc8e4be0b8fe2a46794f8b15",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -7
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "85c1c8eadeac42be97526dee85a189de",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -7
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "2bed48420d4141548c1eb8dea9d7d53b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cb3c76768510438b82063b8d2eb367eb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cd31d785c5dc41059c0f16ec1c18a39a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f3110afc33994cb0865ba785f06cbd33",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "995acade6a7741e0934461120b438bca",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "68174919964c47788df16919fdd1b455",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6962fd9aa6594d7d9f8201ee975a7529",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "062817634feb41ebb0490ce137a1a195",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -7
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b60d4c06374d4741bed3f3ef38fce9c1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2af8d72d0549428f9bfca204624f0d04",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f002918e701b4c07881f2832710d9f3e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "898c997a22c940478ad1c006e7a2cab5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "cbc757ebbd144a03b1e466cbe3d0ba0b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2b6a9c86ff3247f4814beceeeb65dfdd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a4c3d2a5b9e2446c83296075bbdd3096",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2fbbf15cf445485e8cf2d0678799b11c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "31a4f96086ee473599d5fd4567d1da8b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e1b0b61c28124010a1fe0b9ecbaff4ba",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "978c76e1293d44d0bb3438633b69261a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "855948a1909b4d0b9a0872728cb07bda",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -8
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "0346d074cacc4d48a2b8e1fdfdb80ab1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -8
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "8ef01dc9190e449e9bd83feec13229b0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -8
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "09170ac6a1a146fba00b2d4ba90c377c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -8
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "eca1773a5c534a6dadf41f612f21cc42",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -8
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "59aa21a27c4742078e2c8932fc593fa8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -8
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "644f09030b8a4fd88d912b9f109ee63f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -8
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "3a47b8eec9ba4ce9b3550d5aeb187c4d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -8
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "5edee0c1c0864bb88f479c0feea1241c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -8
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "ca23f6ecd0854e2da34b6747965f79c0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": -8
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "da8a63ad28db47389bd7523b15575632",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": -8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "6bac9c3d33ce4e908b92bf4da4d5ad0b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": -8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "371b166f3193486a90747e231175722e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "fc14764f85074bb2bcee6faf6bc6e965",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "722ce354368a445087f408084f4bebcc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -8
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "00af0ddb53e0493f995706151ea9dfd3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -8
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "0f80be04024e40818649179b6112e73b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -8
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "8d5afc64253f4377862736848e4af485",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": -8
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "d0e07becc74645e49a26a9ed63dc4800",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/d0e07becc74645e49a26a9ed63dc4800/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 6,
        "y": -8
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "713463a1e22b431eb5f9b6bd57372dfd",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/713463a1e22b431eb5f9b6bd57372dfd/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 7,
        "y": -8
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "4a6a0c49e13f47b9b92f1a63b70d668e",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/4a6a0c49e13f47b9b92f1a63b70d668e/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 8,
        "y": -8
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "70150ce76d824cb6a40ee7947dc93b63",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/70150ce76d824cb6a40ee7947dc93b63/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 9,
        "y": -8
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "06d4733a9fcc4dffbb6d86da5faee670",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -8
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b913d3c572c64ba89558e5c5ad9532d6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "d72c89a9881749d882a4e7a996e8501a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "934eafb15bd147fe8aa40ca26fb25837",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "474aa0ddc3ea4ad6a03fefc22d3244e6",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7a5eae6b952147deaca63fc33dbcf538",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7c313e3991bd439494fbaea7ccfebb68",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1f9e31e4b0db481d884d79fb1c80c858",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "41be9208f10346af91b7cef4935fd8e4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -8
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "c035e41d8f47408b8677fc95be698604",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "00344e100f244bd3a8ad88e1a50efa72",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7990d867e68143019ada914efaa59d25",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8bc182955a9c49db96e60906b98a2936",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4f474d263b814e198c6221a4de1483d0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b24299df3a3243e8b9b1f8bb1e39016c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "72f555dafeb94ca894576ecf613c8f7b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "85100e11fb5540d5b34f0f56faf7bc58",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -8
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ebf9906372ce4da29eebd03a68576563",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "75b57417df5d4457a28170bb32a2e251",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4135409cfe9b4d1786d197b3a297880a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9dce185b28b5497cb0135a695699fcb4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b5f1dc21e4154d558f7bf08d68c58365",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "08fae1d9a27b4b268d844d2c32bc20cd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5b340ec788bd400686e2785ec4379f80",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "94f1d69a4ab848e4ab89d4b6fb09e0c9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5562dc76d0dc4b8994302067c9cce236",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5b5f347349ac4374a17592a740e10b33",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "018f950b3f434af6bdafa7deb9aa22d0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "d227e83ec339486e899eda83db632c7a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "6a417e4aeae741e283de5edf0dd62f23",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -9
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f746a2425ed34fdb84018d0e45afc2cb",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -9
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "cd82ed78b6dd4ddbb7102a9dfbf17b2e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -9
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "8f45f5fdcfce46f791fb80a496abe696",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "8d1b0de4d1f04234b0079ada14efebc8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "dfa6f85f8fe745d189b6c707eb32caa3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "5e209186260040e7957fe1bd827cd54d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "1fbdd433ac3a4a6f81d11e6d65773fd0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "5bb1d784b8c9425882987ca62aea103f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": -9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "6f926f9c6a4544dfa874136769dc7651",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": -9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "baf4321fdf124dc5a6f5b09d7d45ef46",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": -9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "6b168dc8cef1460f95158486bb233709",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "2d22b5b5dfba46949d4c93ac1fd10854",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -9
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "376eae1f4c2f4fe8835a58e89a78a5ba",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -9
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "e539b1ecb44c4094be1ca1cb5fc969c8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -9
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "708c4212763245109bc954c2a908f16e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -9
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "486e8c42a1504d5d80083559de37b4fd",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": -9
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "9eccfb2c699b45bea0b0c2086851829e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": -9
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "81ad1e1ad00446a192696e15d80c4d43",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/81ad1e1ad00446a192696e15d80c4d43/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 7,
        "y": -9
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "11c263d07c984bb8929d25d2828567d9",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/11c263d07c984bb8929d25d2828567d9/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 8,
        "y": -9
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "24fec0e96aba4f4aacf2f942dcde9092",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/24fec0e96aba4f4aacf2f942dcde9092/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 9,
        "y": -9
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "7c3cc287b48f4729a523c1d44454af22",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "90e2a30bfdf94daaa4493837c160cb57",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "ba78d350a1ff48cfba4c36b451b95b22",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "3b4c4ed456cd4ea4bede7f0509a74357",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -9
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "87e71399d5464cfc99d80016bf1f4014",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3de7c1fdbcbf4a1b88ddc9c1d28dff5b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2048fcf410a547ada008344d1ab8ebb0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1fade86e527c4f428ddf261ea781bf55",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -9
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "34a05dc1fdc043d7ac34b75bfe4448a8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "599ecf7e27334e68a819de2f54cb1b58",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "e70e636f5e3c40fda15cac2f58f6f750",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8cfde5351dde4f81b5e81acd9217ee0a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "66fb4cabfb0e41fe8b2fe083d3eec35a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d353b0726c3c4b4dba315c9beccccf2d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "64024545b46343738498ba7a554b91d4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b231fd06cc954c26bb02dc0739fb0507",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "852edfe0b965437c96bcb7a119aff207",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -9
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9d69adad26c54353896e60879f7f52b0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2bbe5fe5ac164f2781e8c92b95b43305",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "105f171416a5404486d782c5bedb7f68",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c69ffcf93c8b4ccc852631db7876491d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "79767cfa5072447ca12797caea0cb598",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "85011151874b4b06a5090242aa31a369",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f0d61453c8d64f0eb4f25960cd6cf36c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "6850725184ef4e03b0f1d6dfc3b1a18f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dcbe422fbfb54aa6aee5cd09ec4e3acf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ef52cd1643464ac490ab605d6a60751c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2f71f6df3e0147679d2862de59aadcf1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dcc3c2af777e4ba0be8d9c7ad483007e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "45dbc204ff1b4264b40b62dc2749f127",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "ed2c663d43a7433b91d3052a05b4be3d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "c497ea795aa64a22aaff28bd16521301",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -10
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": null,
      "layout": null,
      "id": "707a252430114e34a886b4c6e87e90d2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "f7c6659ec2164c84b5ab751267a1bc4b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "d8f363e9f1a8452f9b7e7e4b58e2f4a7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "9269801682444afc8f2f8d371dc1b9f3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "ccc72cb9428b48d1b1b67afb649c5156",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "57b56b2034104dd5885957dafc64c731",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -3,
        "y": -10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "66034272c0514152834bdee42f2cd51b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -2,
        "y": -10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "ead3cec96e9e4388a96213aa99b368e5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -1,
        "y": -10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "b78b43efbbef47a29192d4f8070d685d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -10
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "2488c51e81a5434fb5ff1df295e37555",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -10
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "1b67ac84ef4d4e1aace7fb805fba6002",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -10
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "63a602a1a1484af0b44b91d3ac5c38e8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -10
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "1651d2d20f20447d838d6cfacbf38875",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -10
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "90e993a98e7a47f29966100b5849d83b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": -10
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "4048159392b44b2ab0580424fa6d3262",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": -10
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "a649ee358c9749989da8f35664ca4fd5",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/a649ee358c9749989da8f35664ca4fd5/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 7,
        "y": -10
      },
      "timeline": "Present",
      "theme": "UrbanDowntown",
      "tier": "I",
      "layout": "F",
      "id": "3f54ef5882ed4fac88469b600fe7ec15",
      "districtId": "4db16d5a4c7d42ef82d7c71615e23083",
      "image": "https://image-uploads.coregam.es/Dev/69d1b508-6d04-4ffc-942d-01348c7b679c.5063bb6104514fa0b730e35e32e95844.PNG",
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/3f54ef5882ed4fac88469b600fe7ec15/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": 8,
        "y": -10
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "72463f646fc84cc991594a3de0b166b0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": -10
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b485eec819fc497792b97e85242ff29b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "6d831321948c4bc3ac2e66a1aa1d1078",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -10
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "c6baf2859b2b4a6e9d00b174258d3953",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -10
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "44c2c4782bea419cbaafc5a3b37793da",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -10
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "de5ece0d6e9045e2909a89a38c4866dc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -10
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "8f2a251f499141f586f490ca07b7b94e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "905b9696ec2341b29d75006a15091e74",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "dc1b01d3210843acbc6311473184b322",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "5e576d18c5ac4b6883831be82f69b7b7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fb4be1e27476401f8d6acc5d1797e60f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b0060d97d6594d57a143584a01f44f50",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a1d5d2befa9b4d7cb104313201ab2fb1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "905aec03bf7241dc99cb78cb68f5f15f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1b7106284e264729822a1560c7f5d2f4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "186abfe7a0694cdebb4161fd28553019",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "9f9e5c299a654b1b9fe92fcfa5081e7e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8a803319e2a64e988345fc5bde94022e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -10
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2142316e8434400b8c1879e9091896da",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "303e214d09f348cab5e93cc9bb95ea2e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3cc31aa226974086b6f29c5b35b03246",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3d7ce05187ba49018ad7e74d6bff8b89",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b1ef12a175e3435c98a4523854eccb18",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "741bc1a2e5c44215bfe819a5b1515527",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "233f822d4572440e936a633693e3d9e5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "8ee9f5820ec748c0907ebbeabc1dd13f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fb3195a26db1405b9a1fb56ee0e5a8e4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f4dae621217040c485495693be3a6c1e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "546149a667ce47ef857f8f256e654614",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f69d3181e7424ac996c9b23e29baa71e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "4cc20269e280417d9a2389a66e09628c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "b6aa98323eb94ef1895012d5b2d8ec54",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "546c4e867c7f4a85b7c8e25f1a3f02ea",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "e6b8e45d6ce14a2fa3a77ce5877f7bf7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "19109cfa4ec54d4f8e7ec23dfee23371",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "c3a8cf7ae00d4ab79ac5c9da19336065",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "b4d2d047015d4b95803d166ca071372e",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "86c35827e8cf431388ae58e0f29dbf34",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": "I",
      "layout": "A",
      "id": "f10ff45dded04a9782ed48b840c4ecdd",
      "districtId": "b981ca1b1a8e4957b8c756237b25c016",
      "image": null,
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/f10ff45dded04a9782ed48b840c4ecdd/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": -3,
        "y": -11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": "I",
      "layout": "B",
      "id": "ba65dc6acdfc41ae903b5bb146e0daf3",
      "districtId": "b981ca1b1a8e4957b8c756237b25c016",
      "image": null,
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/ba65dc6acdfc41ae903b5bb146e0daf3/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": -2,
        "y": -11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": "I",
      "layout": "C",
      "id": "79d4575391a74b58aead4a498406fd3f",
      "districtId": "b981ca1b1a8e4957b8c756237b25c016",
      "image": null,
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/79d4575391a74b58aead4a498406fd3f/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    },
    {
      "location": {
        "x": -1,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": "I",
      "layout": "G",
      "id": "6e9b0ac0984c4c1897d065bf9269409c",
      "districtId": "b981ca1b1a8e4957b8c756237b25c016",
      "image": null,
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 0,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "4ca2cd0cfff540a4a9ccf30aaa0cabbf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 1,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "4c3a22992b994bcf93ec80627d535ae1",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 2,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "18ca67e59a7f4e74b21927709999a5fc",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 3,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "183c16b07c5e452498f8f7a0ff2a617b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 4,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "f50f63326dce47418509d2ee109c5cf4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 5,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "26bac9c83cba49c69b2a78e1a1e506b7",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 6,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "094206755d004a55a0cdd40895d0baa0",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 7,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "fba6cb7eb8b1419d96c51f004671ee46",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 8,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "991253ee158f4ba686f699ed13e50cd2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 9,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ddb05c46249c4e6dae9613eff80c9d80",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 10,
        "y": -11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "505f22e8f1554d47818dfbdba62eabc8",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 11,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "ea6bfbdc736b4deea4197737d3dd4680",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 12,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "05d291f0410b407d9f8150bc701bce06",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 13,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "b9d99c7fbb9b4974b6add2e896da58ae",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 14,
        "y": -11
      },
      "timeline": "Future",
      "theme": "CyberpunkCity",
      "tier": null,
      "layout": null,
      "id": "ee1d982fc9a846669f3d4111400efc3b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 15,
        "y": -11
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "cd2d00e74eeb4e168e75aba27a7967ec",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 16,
        "y": -11
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "33a9aa9232af4e47932ca515f7c788af",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 17,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "1889f04e6e5b481d87b16609599ebb3c",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 18,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "f39425b7f8be427eb2b87ccca5df2256",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 19,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ae6718eb8675413ea1110b7d426c0855",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 20,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "7252c4345ec143aa8a0bf573f2c6d0f3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 21,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "834336fae894455993a87928685f48ef",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 22,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "22ea3b18b27c433185f7d6c120aea109",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 23,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3e6f00b64c2546b09575138a3721b52d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 24,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "fe1699bbe0924581bc740c846d801847",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 25,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "ba1bcf42569a42de847d14a2a62c3f7a",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": 26,
        "y": -11
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "3f4b470dc3da48d981ebe50b2da2dfaa",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -23,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "b9dd958566684718a682f3be97f6e71f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -22,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "eef5d49e8f7d4603b67933ee98f56c3d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -21,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d20f01c5902948f2bea853e9a08593ec",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -20,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0a138f409c3349f1a05fe1c9e14b5b84",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -19,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "2a615c9e058a4923b9fe67ebdf704bb5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -18,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "72e559920abf43a0a7ec05238186ef0d",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -17,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "94cd3ecd2c98443e860620a2b6b2a4cf",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -16,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "4301e7811b7245ef9b6fc814fdc0a5f5",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -15,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "d96a574579ee42c086861d1bf2bae246",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -14,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "a80d25fbcccf456b916d31803c6481d3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -13,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "0c1caaa349b34842b61e1a2a1c94657b",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -12,
        "y": -12
      },
      "timeline": null,
      "theme": "Water",
      "tier": null,
      "layout": null,
      "id": "c742a1d4a8b44bf2905c6eee9e920fa3",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -11,
        "y": -12
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "f89e3125958041ffba55ea0af7a094a4",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -10,
        "y": -12
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "a8d4af5f268449bd89e2f1879a8ff516",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -9,
        "y": -12
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "777876f6039a46f9bfff451938ab2134",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -8,
        "y": -12
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": null,
      "layout": null,
      "id": "9714ede5af864216906cb8e558c439c2",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -7,
        "y": -12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "eb4d5ea88f0b44ec9efc857904bcb92f",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -6,
        "y": -12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "0cd7e54b1afa403cac98c65cc3808548",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -5,
        "y": -12
      },
      "timeline": "Present",
      "theme": "ResidentialSubdivision",
      "tier": null,
      "layout": null,
      "id": "f9d195c814544bb3a3f98a6634299cc9",
      "districtId": null,
      "image": null,
      "mapImage": null,
      "state": "Unminted",
      "hasCustomExperience": false,
      "gameUrl": null
    },
    {
      "location": {
        "x": -4,
        "y": -12
      },
      "timeline": "Past",
      "theme": "ForestGlade",
      "tier": "I",
      "layout": "A",
      "id": "acfaae159b2c443cacaa7853ad9720d4",
      "districtId": "b981ca1b1a8e4957b8c756237b25c016",
      "image": null,
      "mapImage": null,
      "state": "Minted",
      "hasCustomExperience": false,
      "gameUrl": "/api/launch/land/neighborhoods/acfaae159b2c443cacaa7853ad9720d4/games/e7f3e46b9aee4300a83a933f1a8e4e35"
    }
  ]
  };