ServerEvents.recipes(event => {
const infuser = event.recipes.gtceu.mana_infusion
const purify = event.recipes.gtceu.botanic_purification

//#region no catalyst
    infuser('infuse_mana_powder')
        .itemInputs('gtceu:asteroid_stone_dust')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('botania:mana_powder')
        .duration(100)
        .EUt(7)
  
    infuser('infuse_mana_powder_alt')
        .itemInputs('gtceu:stone_dust')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('botania:mana_powder')
        .duration(100)
        .EUt(7)

    infuser('infuse_mana_diamond')
        .itemInputs('minecraft:diamond')
        .inputFluids('manafluid:mana 100')
        .itemOutputs('botania:mana_diamond')
        .duration(160)
        .EUt(28)

    infuser('infuse_mana_diamond_block')
        .itemInputs('#forge:storage_blocks/diamond')
        .inputFluids('manafluid:mana 900')
        .itemOutputs('botania:mana_diamond_block')
        .duration(1440)
        .EUt(28)    

    infuser('infuse_mana_diamond_exquisite')
        .itemInputs('gtceu:exquisite_diamond_gem')
        .inputFluids('manafluid:mana 400')
        .itemOutputs('gtceu:exquisite_mana_diamond_gem')
        .duration(640)
        .EUt(28)    

    infuser('infuse_mana_diamond_flawless')
        .itemInputs('gtceu:flawless_diamond_gem')
        .inputFluids('manafluid:mana 200')
        .itemOutputs('gtceu:flawless_mana_diamond_gem')
        .duration(320)
        .EUt(28) 
    
    infuser('infuse_mana_pearl')
        .itemInputs('minecraft:ender_pearl')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('botania:mana_pearl')
        .duration(100)
        .EUt(14)

    infuser('infuse_mana_cloth')
        .itemInputs('farmersdelight:canvas')
        .inputFluids('manafluid:mana 50')
        .itemOutputs('botania:manaweave_cloth')
        .duration(160)
        .EUt(7)

    infuser('infuse_string')
        .itemInputs('2x minecraft:string')
        .inputFluids('manafluid:mana 25')
        .itemOutputs('2x botania:mana_string')
        .duration(40)
        .EUt(7)

    infuser('infuse_glass')
        .itemInputs('gtceu:tempered_glass')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('botania:mana_glass')
        .duration(200)
        .EUt(7)

    infuser('infuse_cookie')
        .itemInputs('minecraft:cookie')
        .inputFluids('manafluid:mana 200')
        .itemOutputs('botania:mana_cookie')
        .duration(400)
        .EUt(28)

    infuser('infuse_relay')
        .itemInputs('minecraft:piston')
        .inputFluids('manafluid:mana 150')
        .itemOutputs('botania:piston_relay')
        .duration(400)
        .EUt(28)

    infuser('infused_grass')
        .itemInputs('#forge:grass')
        .inputFluids('manafluid:mana 25')
        .itemOutputs('botania:grass_seeds')
        .duration(80)
        .EUt(7)

    infuser('infused_mycelium')
        .itemInputs('#forge:mushrooms')
        .inputFluids('manafluid:mana 25')
        .itemOutputs('botania:mycelium_seeds')
        .duration(80)
        .EUt(7)

    infuser('infused_podzol')
        .itemInputs('minecraft:dead_bush')
        .inputFluids('manafluid:mana 25')
        .itemOutputs('botania:podzol_seeds')
        .duration(80)
        .EUt(7)

//#endregion



//#region alchemy
    infuser('infused_terrasteel')
        .itemInputs('gtceu:inactive_terrasteel_dust')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 100')
        .itemOutputs('gtceu:terrasteel_dust')
        .duration(150)
        .EUt(120)

    // infuser('')
    //     .itemInputs('')
    //     .notConsumable('botania:alchemy_catalyst')
    //     .inputFluids('manafluid:mana)
    //     .itemOutputs('')
    //     .duration(100)
    //     .EUt(120)
//#endregion



//#region conjuration



//#endregion



//#region purification



//#endregion



//#region machine recipes



//#endregion

    // infuser('infuse_')
    //     .itemInputs()
    //     .inputFluids('manafluid:mana ')
    //     .itemOutputs()
    //     .duration()
    //     .EUt()
})