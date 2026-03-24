ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region misc
    gt.shaped('astrogreg:large_gas_collector', [
        'BCB',
        'CAC',
        'DED'
    ], {
        A: 'gtceu:iv_gas_collector',
        B: 'gtceu:hsse_plate',
        C: 'gtceu:iv_electric_pump',
        D: 'gtceu:platinum_single_cable',
        E: '#gtceu:circuits/iv'
    })
    .addMaterialInfo()

    // gt.assembly_line('large_charging_station')
    //     .itemInputs('')    
    //     .itemInputs('')    
    //     .itemInputs('')    
    //     .itemInputs('')    
    //     .itemInputs('')    
    //     .itemInputs('')    
    //     .inputFluids('')
    //     .inputFluids('')    
    //     .itemOutputs('astrogreg:large_charging_station')
    // ["scannerResearch(java.util.function.UnaryOperator)"]
    //     (b => b
    //         .researchStack("gtmutils:iv_auto_charger_4x")
    //         .duration(600)
    //         .EUt(1920)
    //     )
    //     .addMaterialInfo(true)
    //#endregion 

})