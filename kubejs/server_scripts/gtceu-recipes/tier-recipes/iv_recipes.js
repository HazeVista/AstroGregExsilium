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
    //#endregion 

})