export const items = [
    {
        imageSrc: "/images/items/item_01.jpg",
        name: "Adrenaline Shot",
        special:{
            trigger: "Roll",
            prerequisite: null,
            effects:[
                {
                    type: "trait-roll",
                    mod: 4
                }
            ],
            discard: true,
            lost_effect: null
        }
    },
    {
        imageSrc: "/images/items/item_02.jpg",
        name: "Amulet of The Ages",
        special:{
            trigger: "Use",
            prerequisite: null,
            effects:[
                {
                    type: "stat",
                    stat: "might",
                    mod: 1
                },
                {
                    type: "stat",
                    stat: "speed",
                    mod: 1
                },
                {
                    type: "stat",
                    stat: "sanity",
                    mod: 1
                },
                {
                    type: "stat",
                    stat: "knowledge",
                    mod: 1
                }
            ],
            discard: false,
            lost_effect: [
                {
                    type: "stat",
                    stat: "might",
                    mod: -3
                },
                {
                    type: "stat",
                    stat: "speed",
                    mod: -3
                },
                {
                    type: "stat",
                    stat: "sanity",
                    mod: -3
                },
                {
                    type: "stat",
                    stat: "knowledge",
                    mod: -3
                }
            ]
        }
    },
    {
        imageSrc: "/images/items/item_03.jpg",
        name: "Angel Feather",
        special:{
            trigger: "Roll",
            prerequisite: null,
            effects:[
                {
                    type: "roll-result",
                    mod: null,
                }
            ],
            discard: true,
            lost_effect: null
        }
    },
    {
        imageSrc: "/images/items/item_04.jpg",
        name: "Armor",
        special:{
            trigger: "attacked",
            prerequisite: {
                
            },
        }
    },
]