ServerEvents.recipes(event => {
const infuser = event.recipes.gtceu.mana_infusion
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
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('botania:mana_diamond')
        .duration(160)
        .EUt(28)

    infuser('infuse_mana_diamond_block')
        .itemInputs('#forge:storage_blocks/diamond')
        .inputFluids('manafluid:mana 9000')
        .itemOutputs('botania:mana_diamond_block')
        .duration(1440)
        .EUt(28)    

    infuser('infuse_mana_diamond_exquisite')
        .itemInputs('gtceu:exquisite_diamond_gem')
        .inputFluids('manafluid:mana 4000')
        .itemOutputs('gtceu:exquisite_mana_diamond')
        .duration(640)
        .EUt(28)    

    infuser('infuse_mana_diamond_flawless')
        .itemInputs('gtceu:flawless_diamond_gem')
        .inputFluids('manafluid:mana 2000')
        .itemOutputs('gtceu:flawless_mana_diamond')
        .duration(320)
        .EUt(28) 
    
    infuser('infuse_mana_pearl')
        .itemInputs('minecraft:ender_pearl')
        .inputFluids('manafluid:mana 600')
        .itemOutputs('botania:mana_pearl')
        .duration(100)
        .EUt(14)

    infuser('infuse_mana_cloth')
        .itemInputs('farmersdelight:canvas')
        .inputFluids('manafluid:mana 500')
        .itemOutputs('botania:manaweave_cloth')
        .duration(160)
        .EUt(7)

    infuser('infuse_string')
        .itemInputs('1x minecraft:string')
        .inputFluids('manafluid:mana 125')
        .itemOutputs('botania:mana_string')
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
        .inputFluids('manafluid:mana 2000')
        .itemOutputs('botania:mana_cookie')
        .duration(400)
        .EUt(28)

    infuser('infuse_relay')
        .itemInputs('minecraft:piston')
        .inputFluids('manafluid:mana 1500')
        .itemOutputs('botania:piston_relay')
        .duration(400)
        .EUt(28)

    infuser('infused_grass')
        .itemInputs('#forge:grass')
        .inputFluids('manafluid:mana 250')
        .itemOutputs('botania:grass_seeds')
        .duration(80)
        .EUt(7)

    infuser('infused_mycelium')
        .itemInputs('#forge:mushroom')
        .inputFluids('manafluid:mana 250')
        .itemOutputs('botania:mycelium_seeds')
        .duration(80)
        .EUt(7)

    infuser('infused_podzol')
        .itemInputs('minecraft:dead_bush')
        .inputFluids('manafluid:mana 250')
        .itemOutputs('botania:podzol_seeds')
        .duration(80)
        .EUt(7)

//#endregion



//#region alchemy



//#endregion



//#region conjuration



//#endregion



//#region purification



//#endregion

    // infuser('infuse_')
    //     .itemInputs()
    //     .inputFluids('manafluid:mana ')
    //     .itemOutputs()
    //     .duration()
    //     .EUt()
})