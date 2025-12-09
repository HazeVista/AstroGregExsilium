ServerEvents.recipes(event => {
    const gt = event.recipes.gtceu

    const planets = [['ad_astra:mercury', 'mercury'], ['ad_astra:venus', 'venus'], ['ad_astra:moon', 'moon'], ['ad_astra:mars', 'mars'], ['ad_extendra:ceres', 'ceres'], 
        ['ad_extendra:jupiter', 'jupiter'], ['ad_extendra:saturn', 'saturn'], ['ad_extendra:uranus', 'uranus'], ['ad_extendra:neptune', 'neptune'], ['ad_extendra:pluto', 'pluto']]

    planets.forEach((planetType) => {
        const planet = planetType[0]
        const name = planetType[1]
        
        gt.rock_breaker(`rock_dupe_${name}_stone`)
            .notConsumable(`${planet}_stone`)
            .itemOutputs(`${planet}_stone`)      
            .adjacentFluids('minecraft:water', 'minecraft:lava')
            .dimension(planet)
            .duration(16)
            .EUt(112)
                    
        gt.rock_breaker(`rock_dupe_${name}_cobblestone`)
            .notConsumable(`${planet}_cobblestone`)
            .itemOutputs(`${planet}_cobblestone`)      
            .adjacentFluids('minecraft:water', 'minecraft:lava')
            .dimension(planet)
            .duration(16)
            .EUt(112)

        gt.forge_hammer(`crush_${name}_stone`)
            .itemInputs(`${planet}_stone`)
            .itemOutputs(`${planet}_cobblestone`)
            .duration(12)
            .EUt(4)

        gt.assembler(`assemble_${name}_bricks`)
            .itemInputs(`${planet}_stone`)
            .itemOutputs(`${planet}_stone_bricks`)
            .circuit(4)
            .duration(80)
            .EUt(1)

        gt.assembler(`assemble_${name}_cobblestone_stairs`)
            .itemInputs(`3x ${planet}_cobblestone`)
            .itemOutputs(`4x ${planet}_cobblestone_stairs`)
            .circuit(7)
            .duration(80)
            .EUt(8)
        
        gt.assembler(`assemble_${name}_stone_brick_stairs`)
            .itemInputs(`3x ${planet}_stone_bricks`)
            .itemOutputs(`4x ${planet}_stone_brick_stairs`)
            .circuit(7)
            .duration(80)
            .EUt(8)
                
        gt.assembler(`assemble_${name}_stone_stairs`)
            .itemInputs(`3x ${planet}_stone`)
            .itemOutputs(`4x ${planet}_stone_stairs`)
            .circuit(7)
            .duration(80)
            
        gt.assembler(`assemble_${name}_stone_brick_wall`)
            .itemInputs(`${planet}_stone_bricks`)
            .itemOutputs(`${planet}_stone_brick_wall`)
            .circuit(13)
            .duration(80)
            .EUt(8)

    })
})