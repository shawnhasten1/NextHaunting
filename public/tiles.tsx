const basementTiles = [
    {
        directions: [
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_21.gif", 
        name: "Gymnasium", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "down"
        ], 
        floor: [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_58.gif", 
        name: "Furnace Room", 
        special:{
            "status":"end",
            "effect":"health",
            "mod":-1
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_06.gif", 
        name: "Dusty Hallway", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "right",
        ], 
        floor: [
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_50.gif", 
        name: "Kitchen", 
        special:{}
    },
    {
        directions: [ 
            "up"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_25.gif", 
        name: "Storeroom", 
        special:{}
    },
    {
        directions: [ 
            "up",
            "down"
        ], 
        floor: [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_59.gif", 
        name: "Larder", 
        special:{
            "status":"end",
            "effect":"might",
            "mod":1
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_08.gif", 
        name: "Junk Room", 
        special:{
            "status":"exit",
            "effect":"speed",
            "mod":-1,
            "challenge":"might",
            "challenge_mod":3
        }
    },
    {
        directions: [ 
            "right"
        ], 
        floor: [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_60.gif", 
        name: "Pentagram Room", 
        special:{
            "status":"exit",
            "effect":"sanity",
            "mod":-1,
            "challenge":"knowledge",
            "challenge_mod":4
        }
    },
    {
        directions: [ 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_22.gif", 
        name: "Operating Laboratory", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_24.gif", 
        name: "Servants Quarters", 
        special:{}
    },
    {
        directions: [
            "up"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_26.gif", 
        name: "Junk Room", 
        special:{
            "status":"challenge",
            "effect":"item",
            "mod":2,
            "challenge":"knowledge",
            "challenge_mod":6
        }
    },
    {
        directions: [ 
            "up"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_09.gif", 
        name: "Mystic Elevator", 
        special:{
            "status":"move",
            "effect":"elevator"
        }
    },
    {
        directions: [ 
          "up", 
          "down"
        ], 
        floor: [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_61.gif", 
        name: "Stairs From Basement", 
        special:{
            "status":"move",
            "tile":"foyer.jpg"
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_48.gif", 
        name: "Abandoned Room", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        floor: [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_53.gif", 
        name: "Catacombs", 
        special:{
            "status":"challenge",
            "effect":"move",
            "challenge":"sanity",
            "challenge_mod":6
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_05.gif", 
        name: "Creaky Hallway", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_11.gif", 
        name: "Statuary Corridor", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_07.gif", 
        name: "Game Room", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "right"
        ], 
        floor: [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_55.gif", 
        name: "Chasm", 
        special:{
            "status":"challenge",
            "effect":"move",
            "challenge":"speed",
            "challenge_mod":3
        }
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        floor: [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_64.gif", 
        name: "Wine Cellar", 
        special:{}
    },
    {
        directions: [ 
            "left",
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_10.gif", 
        name: "Organ Room", 
        special:{}
    },
    {
        directions: [
            "up"
        ], 
        floor: [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_56.gif", 
        name: "Crypt", 
        special:{
            "status":"end",
            "effect":"mental",
            "mod":-1
        }
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_23.gif", 
        name: "Research Laboratory", 
        special:{}
    }
];

const groundTiles = [
    {
        directions: [
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_37.gif", 
        name: "Collapsed Room", 
        special:{}
    },
    {
        directions: [ 
            "up"
        ], 
        floor: [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_42.gif", 
        name: "Coal Chute", 
        special:{
            "status":"move",
            "tile":"tile_03.jpg"
        }
    },
    {
        directions: [ 
            "right", 
            "up"
        ], 
        floor: [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_43.gif", 
        name: "Dining Room", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_06.gif", 
        name: "Dusty Hallway", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "right",
        ], 
        floor: [
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_50.gif", 
        name: "Kitchen", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "down"
        ], 
        floor: [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_46.gif", 
        name: "Patio", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "down"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_39.gif", 
        name: "Library", 
        special:{
            "status":"end",
            "effect":"knowledge",
            "mod":1
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_08.gif", 
        name: "Junk Room", 
        special:{
            "status":"exit",
            "effect":"speed",
            "mod":-1,
            "challenge":"might",
            "challenge_mod":3
        }
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        floor: [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_44.gif", 
        name: "Gardens", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_41.gif", 
        name: "Ballroom", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_36.gif", 
        name: "Charred Room", 
        special:{}
    },
    {
        directions: [
            "up"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_35.gif", 
        name: "Chapel", 
        special:{
            "status":"end",
            "effect":"sanity",
            "mod":1
        }
    },
    {
        directions: [ 
            "up"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_09.gif", 
        name: "Mystic Elevator", 
        special:{
            "status":"move",
            "effect":"elevator"
        }
    },
    {
        directions: [ 
            "up"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_38.gif", 
        name: "Consevatory", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_48.gif", 
        name: "Abandoned Room", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_05.gif", 
        name: "Creaky Hallway", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_11.gif", 
        name: "Statuary Corridor", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_07.gif", 
        name: "Game Room", 
        special:{}
    },
    {
        directions: [ 
            "left",
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_10.gif", 
        name: "Organ Room", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_34.gif", 
        name: "Bloody Room", 
        special:{}
    },
    {
        directions: [
            "down"
        ], 
        floor: [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_45.gif", 
        name: "Graveyard", 
        special:{
            "status":"exit",
            "effect":"knowledge",
            "mod":-1,
            "challenge":"sanity",
            "challenge_mod":4
        }
    },
];

const upperTiles = [
    {
        directions: [
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_21.gif", 
        name: "Gymnasium", 
        special:{}
    },
    {
        directions: [
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_37.gif", 
        name: "Collapsed Room", 
        special:{}
    },
    {
        directions: [ 
            "down"
        ], 
        floor: [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_27.gif", 
        name: "Attic", 
        special:{
            "status":"end",
            "effect":"might",
            "mod":-1,
            "challenge":"speed",
            "challenge_mod":3
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_06.gif", 
        name: "Dusty Hallway", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "right",
        ], 
        floor: [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_63.gif", 
        name: "Underground Lake", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "right"
        ], 
        floor: [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_29.gif", 
        name: "Bedroom", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "down"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_39.gif", 
        name: "Library", 
        special:{
            "status":"end",
            "effect":"knowledge",
            "mod":1
        }
    },
    {
        directions: [ 
            "up"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_25.gif", 
        name: "Storeroom", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_08.gif", 
        name: "Junk Room", 
        special:{
            "status":"exit",
            "effect":"speed",
            "mod":-1,
            "challenge":"might",
            "challenge_mod":3
        }
    },
    {
        directions: [ 
            "up",  
            "down"
        ], 
        floor: [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_28.gif", 
        name: "Balcony", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_36.gif", 
        name: "Charred Room", 
        special:{}
    },
    {
        directions: [ 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_22.gif", 
        name: "Operating Laboratory", 
        special:{}
    },
    {
        directions: [
            "up"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_35.gif", 
        name: "Chapel", 
        special:{
            "status":"end",
            "effect":"sanity",
            "mod":1
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_24.gif", 
        name: "Servants Quarters", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up"
        ], 
        floor: [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_31.gif", 
        name: "Junk Room", 
        special:{}
    },
    {
        directions: [
            "up"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_26.gif", 
        name: "Junk Room", 
        special:{
            "status":"challenge",
            "effect":"item",
            "mod":2,
            "challenge":"knowledge",
            "challenge_mod":6
        }
    },
    {
        directions: [ 
            "up"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_09.gif", 
        name: "Mystic Elevator", 
        special:{
            "status":"move",
            "effect":"elevator"
        }
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        floor: [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_30.gif", 
        name: "Gallery", 
        special:{
            "status":"move_optional",
            "tile":"tile_41.jpg",
            "effect":"physical",
            "mod":-1
        }
    },
    {
        directions: [ 
            "up"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_38.gif", 
        name: "Consevatory", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "right"
        ], 
        floor: [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_32.gif", 
        name: "Tower", 
        special:{
            "status":"challenge",
            "effect":"move",
            "challenge":"might",
            "challenge_mod":3
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_05.gif", 
        name: "Creaky Hallway", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_11.gif", 
        name: "Statuary Corridor", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_07.gif", 
        name: "Game Room", 
        special:{}
    },
    {
        directions: [ 
            "left",
            "down"
        ], 
        floor: [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_10.gif", 
        name: "Organ Room", 
        special:{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        floor: [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_34.gif", 
        name: "Bloody Room", 
        special:{}
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        floor: [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_23.gif", 
        name: "Research Laboratory", 
        special:{}
    }
]

export default {basementTiles, groundTiles, upperTiles}