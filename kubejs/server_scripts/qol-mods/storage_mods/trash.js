ServerEvents.recipes(event => {

    event.shaped('trashcans:energy_trash_can', [
        'ABA',
        'ACA',
        'DDD'
    ], {
        A: 'gtceu:iron_plate',
        B: 'minecraft:ender_pearl',
        C: 'minecraft:redstone_block',
        D: 'gtceu:wrought_iron_plate'
    })

    event.shaped('trashcans:item_trash_can', [
        'ABA',
        'ACA',
        'DDD'
    ], {
        A: 'gtceu:iron_plate',
        B: 'minecraft:ender_pearl',
        C: 'minecraft:chest',
        D: 'gtceu:wrought_iron_plate'
    })

    event.shaped('trashcans:liquid_trash_can', [
        'ABA',
        'ACA',
        'DDD'
    ], {
        A: 'gtceu:iron_plate',
        B: 'minecraft:ender_pearl',
        C: 'minecraft:bucket',
        D: 'gtceu:wrought_iron_plate'
    })

    event.shaped('trashcans:ultimate_trash_can', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:iron_plate',
        B: 'trashcans:liquid_trash_can',
        C: 'gtceu:wrought_iron_plate',
        D: 'trashcans:energy_trash_can',
        E: 'trashcans:item_trash_can'
    })

})