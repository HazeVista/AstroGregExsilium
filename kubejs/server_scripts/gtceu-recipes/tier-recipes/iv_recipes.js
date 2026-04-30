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

    gt.shaped('astrogreg:large_rock_crusher', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:grinding_head_tungsten',
        B: '#gtceu:circuits/iv',
        C: 'gtceu:tungsten_steel_gear',
        D: 'gtceu:iv_rock_crusher',
        E: 'gtceu:iv_electric_piston',
        F: 'gtceu:iv_electric_motor'
    })

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