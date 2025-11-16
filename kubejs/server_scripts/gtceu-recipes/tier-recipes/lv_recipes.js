ServerEvents.recipes(event => {

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

    event.recipes.gtceu.assembler('bottle_mana')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('manafluid:mana 250')
        .itemOutputs('botania:mana_bottle')
        .duration(20)
        .EUt(7)
})