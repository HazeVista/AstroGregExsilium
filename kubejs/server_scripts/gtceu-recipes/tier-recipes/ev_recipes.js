ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region alloys
    gt.mixer('alfsteel_dust')
        .itemInputs('3x gtceu:titanium_dust', '2x gtceu:rhodium_dust', 'gtbotania:dragonstone_dust')
        .itemOutputs('6x gtbotania:elementium_dust')
        .duration(600)
        .EUt(1920)

    gt.centrifuge('alfsteel_decomp')
        .itemInputs('6x gtbotania:elementium_dust')
        .itemOutputs('3x gtceu:titanium_dust', '2x gtceu:rhodium_dust', 'gtbotania:dragonstone_dust')
        .duration(600)
        .EUt(20)

    gt.mixer('vesnium_dust')
        .itemInputs('4x gtceu:red_steel_dust', '3x gtceu:molybdenum_disilicide_dust', 'gtceu:tungsten_carbide_dust')
        .itemOutputs('8x astrogreg:vesnium_dust')
        .duration(400)
        .EUt(1920)

    gt.centrifuge('vesnium_decomp')
        .itemInputs('8x astrogreg:vesnium_dust')
        .itemOutputs('4x gtceu:red_steel_dust', '3x gtceu:molybdenum_disilicide_dust', 'gtceu:tungsten_carbide_dust')
        .duration(400)
        .EUt(20)
    //#endregion

})