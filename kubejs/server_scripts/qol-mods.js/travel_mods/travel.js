ServerEvents.recipes(event => {
    
    event.shaped('travelanchors:travel_staff', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'minecraft:ender_pearl',
        B: 'gtceu:steel_rod'
    });

    event.shaped('travelanchors:travel_anchor', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'gtceu:double_steel_plate',
        B: 'minecraft:ender_pearl',
        C: '#forge:tools/hammers'
    });
    

    event.shaped('waystones:warp_stone', [
        'BCB',
        'CAC',
        'BCB'
    ], {
        A: 'minecraft:ender_pearl',
        B: 'create:rose_quartz',
        C: 'minecraft:quartz'
    });

    event.shaped('2x waystones:warp_dust', [
        'AB'
    ], {
        A: 'gtceu:ender_pearl_dust',
        B: 'gtceu:flint_dust'
    });

    event.recipes.gtceu.mixer('mixing_warp_dust')
        .itemInputs('gtceu:ender_pearl_dust', 'gtceu:flint_dust')
        .itemOutputs('2x waystones:warp_dust')
        .duration(80)
        .EUt(7)
})