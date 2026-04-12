ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region alloys
    gt.mixer('alfsteel_dust')
        .itemInputs('3x gtceu:titanium_dust', '2x gtceu:rhodium_dust', 'gtbotania:dragonstone_dust')
        .itemOutputs('6x botania:pixie_dust')
        .duration(600)
        .EUt(1920)

    gt.centrifuge('alfsteel_decomp')
        .itemInputs('6x botania:pixie_dust')
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



    //#region misc
    gt.shaped('astrogreg:oxygenated_maintenance_hatch', [
        'BAB',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:auto_maintenance_hatch',
        B: '#gtceu:circuits/ev',
        C: 'gtceu:ev_robot_arm',
        D: 'gtceu:ev_machine_hull',
        E: 'gtceu:aluminium_single_cable',
        F: 'ad_astra:oxygen_distributor'
    })
    //#endregion

})