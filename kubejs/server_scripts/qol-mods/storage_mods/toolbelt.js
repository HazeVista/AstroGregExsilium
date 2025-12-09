ServerEvents.recipes(event => {
    event.shaped('toolbelt:belt', [
        'ABA',
        'B B',
        'ACA'
    ], {
        A: 'minecraft:string',
        B: 'farmersdelight:canvas',
        C: 'gtceu:iron_plate'
    })

    event.shaped('toolbelt:belt', [
        'ABA',
        'B B',
        'ACA'
    ], {
        A: 'minecraft:string',
        B: 'minecraft:leather',
        C: 'gtceu:iron_plate'
    })

    event.shaped('toolbelt:pouch', [
        'BBB',
        'ACA',
        'BBB'
    ], {
        A: 'minecraft:string',
        B: 'minecraft:leather',
        C: 'gtceu:gold_ring'
    })
    
    event.shaped('toolbelt:pouch', [
        'BBB',
        'ACA',
        'BBB'
    ], {
        A: 'minecraft:string',
        B: 'farmersdelight:canvas',
        C: 'gtceu:gold_ring'
    })
})