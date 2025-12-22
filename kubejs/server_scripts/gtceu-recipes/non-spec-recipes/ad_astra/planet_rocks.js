ServerEvents.recipes(event => {

    //#region helpers
    const gt = event.recipes.gtceu

    const planets = [
        ['ad_astra:mercury', 'mercury'], 
        ['ad_astra:venus', 'venus'], 
        ['ad_astra:moon', 'moon'], 
        ['ad_astra:mars', 'mars'], 
        ['ad_extendra:ceres', 'ceres'], 
        ['ad_extendra:jupiter', 'jupiter'], 
        ['ad_extendra:saturn', 'saturn'], 
        ['ad_extendra:uranus', 'uranus'], 
        ['ad_extendra:neptune', 'neptune'], 
        ['ad_extendra:pluto', 'pluto']
    ]
    //#endregion



    //#region gtceu integration
    planets.forEach(([dimension, planet]) => {
        const modId = dimension.split(':')[0]
        
        // rock breaker stone duping
        gt.rock_breaker(`rock_dupe_${planet}_stone`)
            .notConsumable(`${dimension}_stone`)
            .itemOutputs(`${dimension}_stone`)      
            .adjacentFluids('minecraft:water', 'minecraft:lava')
            .dimension(dimension)
            .duration(16)
            .EUt(112)
        
        // rock breaker cobblestone duping       
        gt.rock_breaker(`rock_dupe_${planet}_cobblestone`)
            .notConsumable(`${dimension}_cobblestone`)
            .itemOutputs(`${dimension}_cobblestone`)      
            .adjacentFluids('minecraft:water', 'minecraft:lava')
            .dimension(dimension)
            .duration(16)
            .EUt(112)

        // forge hammer stone
        gt.forge_hammer(`crush_${planet}_stone`)
            .itemInputs(`${dimension}_stone`)
            .itemOutputs(`${dimension}_cobblestone`)
            .duration(12)
            .EUt(4)

        // assemble bricks
        gt.assembler(`assemble_${planet}_bricks`)
            .itemInputs(`${dimension}_stone`)
            .itemOutputs(`${dimension}_stone_bricks`)
            .circuit(4)
            .duration(80)
            .EUt(1)

        // assemble polished stone
        gt.assembler(`assemble_${planet}_polished_stone`)
            .itemInputs(`${dimension}_stone`)
            .itemOutputs(`${modId}:polished_${planet}_stone`)
            .circuit(4)
            .duration(80)
            .EUt(1)

        // assemble cobblestone stairs
        gt.assembler(`assemble_${planet}_cobblestone_stairs`)
            .itemInputs(`3x ${dimension}_cobblestone`)
            .itemOutputs(`4x ${dimension}_cobblestone_stairs`)
            .circuit(7)
            .duration(80)
            .EUt(8)
        
        // assemble stone stairs
        gt.assembler(`assemble_${planet}_stone_stairs`)
            .itemInputs(`3x ${dimension}_stone`)
            .itemOutputs(`4x ${dimension}_stone_stairs`)
            .circuit(7)
            .duration(80)
            .EUt(8)
        
        // assemble stone brick stairs
        gt.assembler(`assemble_${planet}_stone_brick_stairs`)
            .itemInputs(`3x ${dimension}_stone_bricks`)
            .itemOutputs(`4x ${dimension}_stone_brick_stairs`)
            .circuit(7)
            .duration(80)
            .EUt(8)

        // assemble polished stone stairs
        gt.assembler(`assemble_${planet}_polished_stone_stairs`)
            .itemInputs(`3x ${modId}:polished_${planet}_stone`)
            .itemOutputs(`4x ${modId}:polished_${planet}_stone_stairs`)
            .circuit(7)
            .duration(80)
            .EUt(8)

        // assemble stone brick wall
        gt.assembler(`assemble_${planet}_stone_brick_wall`)
            .itemInputs(`${dimension}_stone_bricks`)
            .itemOutputs(`${dimension}_stone_brick_wall`)
            .circuit(13)
            .duration(80)
            .EUt(8)

        // macerator stone
        gt.macerator(`macerate_${planet}_stone`)
            .itemInputs(`${dimension}_stone`)
            .itemOutputs(`astrogreg:${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator cobblestone
        gt.macerator(`macerate_${planet}_cobblestone`)
            .itemInputs(`${dimension}_cobblestone`)
            .itemOutputs(`astrogreg:${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator stone bricks
        gt.macerator(`macerate_${planet}_stone_bricks`)
            .itemInputs(`${dimension}_stone_bricks`)
            .itemOutputs(`astrogreg:${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator polished stone
        gt.macerator(`macerate_${planet}_polished_stone`)
            .itemInputs(`${modId}:polished_${planet}_stone`)
            .itemOutputs(`astrogreg:${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator stone brick wall
        gt.macerator(`macerate_${planet}_stone_brick_wall`)
            .itemInputs(`${dimension}_stone_brick_wall`)
            .itemOutputs(`astrogreg:${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator cobblestone stairs
        gt.macerator(`macerate_${planet}_cobblestone_stairs`)
            .itemInputs(`${dimension}_cobblestone_stairs`)
            .itemOutputs(`3x astrogreg:small_${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator stone stairs
        gt.macerator(`macerate_${planet}_stone_stairs`)
            .itemInputs(`${dimension}_stone_stairs`)
            .itemOutputs(`3x astrogreg:small_${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator stone brick stairs
        gt.macerator(`macerate_${planet}_stone_brick_stairs`)
            .itemInputs(`${dimension}_stone_brick_stairs`)
            .itemOutputs(`3x astrogreg:small_${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator polished stone stairs
        gt.macerator(`macerate_${planet}_polished_stone_stairs`)
            .itemInputs(`${modId}:polished_${planet}_stone_stairs`)
            .itemOutputs(`3x astrogreg:small_${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator cobblestone slab
        gt.macerator(`macerate_${planet}_cobblestone_slab`)
            .itemInputs(`${dimension}_cobblestone_slab`)
            .itemOutputs(`2x astrogreg:small_${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator stone slab
        gt.macerator(`macerate_${planet}_stone_slab`)
            .itemInputs(`${dimension}_stone_slab`)
            .itemOutputs(`2x astrogreg:small_${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator stone brick slab
        gt.macerator(`macerate_${planet}_stone_brick_slab`)
            .itemInputs(`${dimension}_stone_brick_slab`)
            .itemOutputs(`2x astrogreg:small_${planet}_stone_dust`)
            .duration(20)
            .EUt(2)

        // macerator polished stone slab
        gt.macerator(`macerate_${planet}_polished_stone_slab`)
            .itemInputs(`${modId}:polished_${planet}_stone_slab`)
            .itemOutputs(`2x astrogreg:small_${planet}_stone_dust`)
            .duration(20)
            .EUt(2)
    })
    //#endregion



    //#region sandstone
    gt.compressor('compress_sandstone')
        .itemInputs('minecraft:sand')
        .itemOutputs('minecraft:sandstone')
        .duration(300)
        .EUt(2)

    event.shaped('minecraft:sandstone', [
        'AA',
        'AA'
    ], {
        A: 'minecraft:sand'
    })

    gt.compressor('compress_venus_sandstone')
        .itemInputs('4x ad_astra:venus_sand')
        .itemOutputs('ad_astra:venus_sandstone')
        .duration(300)
        .EUt(2)

    gt.assembler('assemble_venus_sandstone_brick_stairs')
        .itemInputs('3x ad_astra:venus_sandstone_bricks')
        .itemOutputs('4x ad_astra:venus_sandstone_brick_stairs')
        .duration(80)
        .circuit(7)
        .EUt(8)

    gt.assembler('assemble_venus_sandstone_bricks')
        .itemInputs('ad_astra:venus_sandstone')
        .itemOutputs('ad_astra:venus_sandstone_bricks')
        .duration(80)
        .circuit(4)
        .EUt(8)

    gt.macerator('recycle_venus_sandstone')
        .itemInputs('ad_astra:venus_sandstone')
        .itemOutputs('gtceu:quartz_sand_dust')
        .duration(20)
        .EUt(4)
        
    gt.macerator('recycle_venus_sandstone_bricks')
        .itemInputs('ad_astra:venus_sandstone_bricks')
        .itemOutputs('gtceu:quartz_sand_dust')
        .duration(20)
        .EUt(4)
        
    gt.macerator('recycle_cracked_venus_sandstone_bricks')
        .itemInputs('ad_astra:cracked_venus_sandstone_bricks')
        .itemOutputs('gtceu:quartz_sand_dust')
        .duration(20)
        .EUt(4)
        
    gt.macerator('recycle_venus_sandstone_brick_slab')
        .itemInputs('ad_astra:venus_sandstone_brick_slab')
        .itemOutputs('2x gtceu:small_quartz_sand_dust')
        .duration(10)
        .EUt(4)
        
    gt.macerator('recycle_venus_sandstone_brick_stairs')
        .itemInputs('ad_astra:venus_sandstone_brick_stairs')
        .itemOutputs('3x gtceu:small_quartz_sand_dust')
        .duration(15)
        .EUt(4)
    //#endregion
})