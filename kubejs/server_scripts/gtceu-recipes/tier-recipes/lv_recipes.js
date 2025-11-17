ServerEvents.recipes(event => {

    //misc
    event.recipes.gtceu.brewery('brew_salt_water')
        .notConsumable('gtceu:salt_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:salt_water 1000')
        .duration(80)
        .EUt(3)

    event.recipes.gtceu.fluid_solidifier('soldify_tempered_glass')
        .inputFluids('minecraft:lava 250')
        .itemInputs('minecraft:glass')
        .itemOutputs('gtceu:tempered_glass')
        .duration(300)
        .EUt(30)


    
    //ender air
    event.recipes.gtceu.centrifuge('centrifuge_ender_air')
        .inputFluids('gtceu:ender_air 10000')
        .chancedOutput('gtceu:ender_pearl_dust', 2500, 0)
        .outputFluids('gtceu:nitrogen_dioxide 6100', 'gtceu:deuterium 2500')
        .duration(400)

    event.recipes.gtceu.gas_collector('collect_end_air_kuiper_belt')
        .outputFluids(Fluid.of('gtceu:ender_air', 10000))
        .dimension('ad_astra:kuiper_belt')
        .duration(200)
        .circuit(1)
        .EUt(16)



    //asteroid dust processing
    event.recipes.gtceu.ore_washer('washing_asteroid_dust')
        .itemInputs('gtceu:asteroid_stone_dust')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:stone_dust')
        .chancedOutput('gtceu:iron_dust', 2000, 0)
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.ore_washer('washing_asteroid_dust_alt')
        .itemInputs('gtceu:asteroid_stone_dust')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('gtceu:stone_dust')
        .chancedOutput('gtceu:iron_dust', 2000, 0)
        .duration(100)
        .EUt(16)        

    event.recipes.gtceu.chemical_bath('treating_asteroid_dust')
        .itemInputs('gtceu:asteroid_stone_dust')
        .inputFluids('gtceu:sodium_persulfate')
        .itemOutputs('gtceu:stone_dust')
        .chancedOutput('gtceu:ilmenite_slag_dust', 3000, 0)
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.electrolyzer('electrolyze_to_stone_dust')
        .itemInputs('gtceu:asteroid_stone_dust')
        .itemOutputs('gtceu:stone_dust')
        .duration(20)
        .EUt(30)


        
    //bottling
    event.recipes.gtceu.assembler('bottle_ender_air')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('gtceu:ender_air 250')
        .itemOutputs('botania:ender_air_bottle')
        .duration(20)
        .EUt(7)

    event.recipes.gtceu.assembler('bottle_milk')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('minecraft:milk 250')
        .itemOutputs('farmersdelight:milk_bottle')
        .duration(20)
        .EUt(7)

    event.recipes.gtceu.assembler('bottle_water')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('minecraft:water 250')
        .itemOutputs(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'))
        .duration(20)
        .EUt(7)

    event.recipes.gtceu.extractor('bottle_mana')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('manafluid:mana 250')
        .itemOutputs('botania:mana_bottle')
        .duration(20)
        .EUt(7)

    event.recipes.gtceu.extractor('unbottle_ender_air')
        .itemOutputs('minecraft:glass_bottle')
        .outputFluids('gtceu:ender_air 250')
        .itemInputs('botania:ender_air_bottle')
        .duration(20)
        .EUt(7)

    event.recipes.gtceu.extractor('unbottle_milk')
        .itemOutputs('minecraft:glass_bottle')
        .outputFluids('minecraft:milk 250')
        .itemInputs('farmersdelight:milk_bottle')
        .duration(20)
        .EUt(7)

    event.recipes.gtceu.extractor('unbottle_water')
        .itemOutputs('minecraft:glass_bottle')
        .outputFluids('minecraft:water 250')
        .itemInputs(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'))
        .duration(20)
        .EUt(7)

    event.recipes.gtceu.extractor('unbottle_mana')
        .itemOutputs('minecraft:glass_bottle')
        .outputFluids('manafluid:mana 250')
        .itemInputs('botania:mana_bottle')
        .duration(20)
        .EUt(7)
})