ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region misc
    gt.brewery('brew_salt_water')
        .notConsumable('gtceu:salt_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:salt_water 1000')
        .duration(80)
        .EUt(3)

    gt.fluid_solidifier('soldify_tempered_glass')
        .inputFluids('minecraft:lava 250')
        .itemInputs('minecraft:glass')
        .itemOutputs('gtceu:tempered_glass')
        .duration(300)
        .EUt(30)

    gt.extractor('extract_blaze_block')
        .itemInputs('botania:blaze_block')
        .outputFluids(Fluid.of('gtceu:blaze', 5184))
        .duration(792)
        .EUt(30)

    gt.alloy_smelter('smelt_brick_from_clay')
        .itemInputs('minecraft:clay_ball')
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs('minecraft:brick')
        .duration(200)
        .EUt(2)

    gt.compressor('compress_cardboard')
        .itemInputs('4x minecraft:paper')
        .itemOutputs('create:cardboard')
        .duration(200)
        .EUt(2)

    gt.chemical_reactor('plastic_board_pai')
        .itemInputs('astrogreg:polyamide_imide_plate', '4x gtceu:copper_foil')
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs('16x gtceu:plastic_circuit_board')
        .duration(500)
        .EUt(10)

    gt.bender('fluid_cell_pai')
        .circuit(12)
        .itemInputs('astrogreg:polyamide_imide_plate')
        .itemOutputs('32x gtceu:fluid_cell')
        .duration(100)
        .EUt(7)

    gt.chemical_reactor('ethylbenzene_to_styrene')
        .circuit(2)
        .inputFluids('gtceu:ethylbenzene')
        .outputFluids('gtceu:styrene')
        .outputFluids('gtceu:hydrogen 2000')
        .duration(200)
        .EUt(28)
    //#endregion



    //#region damascus steel
    gt.mixer('mix_damascus_steel_dust')
        .itemInputs('gtceu:steel_dust', 'gtceu:coal_dust')
        .itemOutputs('gtceu:damascus_steel_dust')
        .circuit(1)
        .duration(400)
        .EUt(16)

    gt.mixer('mix_damascus_steel_dust_alt')
        .itemInputs('gtceu:steel_dust', 'gtceu:charcoal_dust')
        .itemOutputs('gtceu:damascus_steel_dust')
        .circuit(1)
        .duration(400)
        .EUt(16)

    gt.mixer('mix_damascus_steel_dust_alt1')
        .itemInputs('gtceu:steel_dust', 'gtceu:carbon_dust')
        .itemOutputs('gtceu:damascus_steel_dust')
        .circuit(1)
        .duration(400)
        .EUt(16)
    //#endregion



    //#region ender air
    gt.centrifuge('centrifuge_ender_air')
        .inputFluids('gtceu:ender_air 10000')
        .chancedOutput('gtceu:ender_pearl_dust', 2500, 0)
        .outputFluids('gtceu:nitrogen_dioxide 6100', 'gtceu:deuterium 2500')
        .duration(400)

    gt.gas_collector('collect_end_air_kuiper_belt')
        .outputFluids(Fluid.of('gtceu:ender_air', 10000))
        .dimension('ad_astra:kuiper_belt')
        .duration(200)
        .circuit(1)
        .EUt(16)
    //#endregion



    //#region asteroid dust proc
    gt.ore_washer('washing_asteroid_dust')
        .itemInputs('astrogreg:asteroid_stone_dust')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:stone_dust')
        .chancedOutput('gtceu:iron_dust', 2000, 0)
        .duration(200)
        .EUt(16)

    gt.ore_washer('washing_asteroid_dust_alt')
        .itemInputs('astrogreg:asteroid_stone_dust')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('gtceu:stone_dust')
        .chancedOutput('gtceu:iron_dust', 2000, 0)
        .duration(100)
        .EUt(16)        

    gt.chemical_bath('treating_asteroid_dust')
        .itemInputs('astrogreg:asteroid_stone_dust')
        .inputFluids('gtceu:sodium_persulfate')
        .itemOutputs('gtceu:stone_dust')
        .chancedOutput('gtceu:ilmenite_slag_dust', 3000, 0)
        .duration(200)
        .EUt(30)

    gt.electrolyzer('electrolyze_to_stone_dust')
        .itemInputs('astrogreg:asteroid_stone_dust')
        .itemOutputs('gtceu:stone_dust')
        .duration(20)
        .EUt(30)
    //#endregion



    //#region etrium

    gt.mixer('mix_etrium_dust')
        .itemInputs('3x astrogreg:ostrum_dust', '2x gtceu:electrum_dust')
        .itemOutputs('5x astrogreg:etrium_dust')
        .duration(200)
        .EUt(28)

    gt.alloy_smelter('alloy_blast_etrium')
        .itemInputs('3x astrogreg:ostrum_dust', '2x gtceu:electrum_dust')
        .outputFluids('astrogreg:etrium 720')
        .duration(200)
        .EUt(28)

    gt.mixer('mix_blazing_etrium_dust')
        .itemInputs('2x astrogreg:etrium_dust', 'minecraft:blaze_powder')
        .itemOutputs('3x astrogreg:blazing_etrium_dust')
        .duration(300)
        .EUt(28)

    gt.alloy_smelter('alloy_blast_blazing_etrium')
        .itemInputs('2x astrogreg:etrium_dust', 'minecraft:blaze_powder')
        .outputFluids('astrogreg:blazing_etrium 432')
        .duration(300)
        .EUt(28)

    //#endregion


        
    //#region bottling
    gt.assembler('bottle_ender_air')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('gtceu:ender_air 250')
        .itemOutputs('botania:ender_air_bottle')
        .duration(20)
        .EUt(7)

    gt.assembler('bottle_milk')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('minecraft:milk 250')
        .itemOutputs('farmersdelight:milk_bottle')
        .duration(20)
        .EUt(7)

    gt.assembler('bottle_water')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('minecraft:water 250')
        .itemOutputs(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'))
        .duration(20)
        .EUt(7)

    gt.assembler('bottle_mana')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('manafluid:mana 250')
        .itemOutputs('botania:mana_bottle')
        .duration(20)
        .EUt(7)

    gt.extractor('unbottle_ender_air')
        .itemOutputs('minecraft:glass_bottle')
        .outputFluids('gtceu:ender_air 250')
        .itemInputs('botania:ender_air_bottle')
        .duration(20)
        .EUt(7)

    gt.extractor('unbottle_milk')
        .itemOutputs('minecraft:glass_bottle')
        .outputFluids('minecraft:milk 250')
        .itemInputs('farmersdelight:milk_bottle')
        .duration(20)
        .EUt(7)

    gt.extractor('unbottle_water')
        .itemInputs(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'))
        .itemOutputs('minecraft:glass_bottle')
        .outputFluids('minecraft:water 250')
        .duration(20)
        .EUt(7)

    gt.extractor('unbottle_mana')
        .itemInputs('botania:mana_bottle')
        .itemOutputs('minecraft:glass_bottle')
        .outputFluids('manafluid:mana 250')
        .duration(20)
        .EUt(7)
    //#endregion

})