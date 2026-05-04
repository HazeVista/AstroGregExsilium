ServerEvents.recipes(event => {
    
    event.recipes.gtceu.shaped('travelanchors:travel_staff', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'minecraft:ender_pearl',
        B: 'gtceu:steel_rod'
    })
    .addMaterialInfo()

    event.recipes.gtceu.shaped('travelanchors:travel_anchor', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:double_steel_plate',
        B: 'minecraft:ender_pearl',
        C: '#forge:tools/hammers'
    })
    .addMaterialInfo()

    event.shaped('2x waystones:warp_stone', [
        'BCB',
        'CAC',
        'BCB'
    ], {
        A: 'minecraft:ender_pearl',
        B: 'gtceu:ruby_gem',
        C: 'gtceu:sapphire_gem'
    })

    event.shaped('2x waystones:warp_dust', [
        'AB'
    ], {
        A: 'gtceu:ender_pearl_dust',
        B: 'gtceu:flint_dust'
    })

    event.shaped('astrogreg:asteroid_waystone', [
        ' A ',
        'ABA',
        'CCC'
    ], {
        A: 'astrogreg:asteroid_stone_bricks',
        B: 'waystones:warp_stone', 
        C: 'minecraft:obsidian'
    })

    event.recipes.gtceu.mixer('mixing_warp_dust')
        .itemInputs('gtceu:ender_pearl_dust', '2x gtceu:flint_dust')
        .itemOutputs('3x waystones:warp_dust')
        .duration(80)
        .EUt(7)
})