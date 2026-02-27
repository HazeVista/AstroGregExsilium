ServerEvents.recipes(event => {
const simulation = event.recipes.gtceu.manafield_simulation

// #region mana production
simulation('hydroangeas_water')
    .chancedInput('botania:hydroangeas', 1000, 0)
    .inputFluids('minecraft:water')
    .outputFluids('manafluid:mana 4')
    .duration(200)
    .EUt(16)
 
simulation('thermalily_lava')
    .chancedInput('botania:thermalily', 1000, 0)
    .inputFluids('minecraft:lava')
    .outputFluids('manafluid:mana 40')
    .duration(200)
    .EUt(16)
 
simulation('thermalily_blaze')
    .chancedInput('botania:thermalily', 500, 0)
    .inputFluids('gtceu:blaze 144')
    .outputFluids('manafluid:mana 40')
    .duration(200)
    .EUt(16)

simulation('kekimurus_pies')
    .itemInputs('#forge:pies')
    .notConsumable('botania:kekimurus')
    .outputFluids('manafluid:mana 108')
    .duration(1200)
    .EUt(16)

simulation('kekimurus_cakes')
    .itemInputs('#forge:cakes')
    .notConsumable('botania:kekimurus')
    .outputFluids('manafluid:mana 108')
    .duration(1200)
    .EUt(16)
    
simulation('entropinnyum_powderbarrel')
    .itemInputs('8x gtceu:powderbarrel')
    .notConsumable('botania:entropinnyum')
    .outputFluids('manafluid:mana 90')
    .duration(1200)
    .EUt(16)
    
simulation('entropinnyum_dynamite')
    .itemInputs('2x gtceu:dynamite')
    .notConsumable('botania:entropinnyum')
    .outputFluids('manafluid:mana 90')
    .duration(1200)
    .EUt(16)
    
simulation('entropinnyum_tnt')
    .itemInputs('4x minecraft:tnt')
    .notConsumable('botania:entropinnyum')
    .outputFluids('manafluid:mana 90')
    .duration(1200)
    .EUt(16)
        
simulation('entropinnyum_itnt')
    .itemInputs('gtceu:industrial_tnt')
    .notConsumable('botania:entropinnyum')
    .outputFluids('manafluid:mana 90')
    .duration(1200)
    .EUt(16)
        
simulation('entropinnyum_mana_bomb')
    .itemInputs('botania:mana_bomb')
    .notConsumable('botania:entropinnyum')
    .outputFluids('manafluid:mana 400')
    .duration(1200)
    .EUt(16)

simulation('munchdew_leaves')
    .itemInputs('64x #minecraft:leaves')
    .notConsumable('botania:munchdew')
    .outputFluids('manafluid:mana 64')
    .duration(1600)
    .EUt(16)

simulation('endoflame_logs')
    .itemInputs('#minecraft:logs')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 18')
    .duration(300)
    .EUt(16)

simulation('endoflame_blaze_block')
    .itemInputs('botania:blaze_block')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 1440')
    .duration(24000)
    .EUt(16)

simulation('endoflame_blaze_rod')
    .itemInputs('minecraft:blaze_rod')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 144')
    .duration(2400)
    .EUt(16)

simulation('endoflame_leaves')
    .itemInputs('#minecraft:leaves')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 6')
    .duration(100)
    .EUt(16)

simulation('endoflame_saplings')
    .itemInputs('#minecraft:saplings')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 6')
    .duration(100)
    .EUt(16)

simulation('endoflame_planks')
    .itemInputs('#minecraft:planks')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 18')
    .duration(300)
    .EUt(16)

simulation('endoflame_coals')
    .itemInputs('#minecraft:coals')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 96')
    .duration(1600)
    .EUt(16)

simulation('endoflame_coke')
    .itemInputs('gtceu:coke_gem')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 192')
    .duration(3200)
    .EUt(16)

simulation('endoflame_coal_block')
    .itemInputs('minecraft:coal_block')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 960')
    .duration(16000)
    .EUt(16)

simulation('endoflame_charcoal_block')
    .itemInputs('gtceu:charcoal_block')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 864')
    .duration(14400)
    .EUt(16)

simulation('endoflame_coke_block')
    .itemInputs('gtceu:coke_block')
    .notConsumable('botania:endoflame')
    .outputFluids('manafluid:mana 1728')
    .duration(28800)
    .EUt(16)
// #endregion



// #region shaped singleblocks
const tieredParts = [
['lv', 'tin', 'botania:managlass'],
['mv', 'copper', 'botania:managlass'],
['hv', 'gold', 'botania:managlass'],
['ev', 'aluminium', 'botania:alfglass'],
['iv', 'platinum', 'botania:alfglass'],
['luv', 'niobium_titanium', 'botania:alfglass'],
['zpm', 'vanadium_gallium', 'botania:bifrost_perm'],
['uv', 'yttrium_barium_cuprate', 'botania:bifrost_perm']
]

tieredParts.forEach(singleblocks)

function singleblocks(part) {
    const tier = part[0]
    const cable = part[1] 
    const glass = part[2] 

    event.recipes.gtceu.shaped(`gtceu:${tier}_manafield_simulator`, [
        'DAD',
        'FEF',
        'BCB'
    ], {
        A: `gtceu:${tier}_emitter`,
        B: `astrogreg:${tier}_stabilizer`,
        C: `gtceu:${cable}_single_cable`,
        D:  glass,
        E: `gtceu:${tier}_machine_hull`,
        F: `#gtceu:circuits/${tier}`
    })
    .addMaterialInfo()
}
// #endregion
})