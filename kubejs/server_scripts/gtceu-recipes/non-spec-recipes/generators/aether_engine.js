ServerEvents.recipes(event => {
    
    event.shaped('astrogreg:aether_turbine', [
        'ABA',
        'BCB',
        'DBD'
    ], {
        A: '#gtceu:circuits/iv',
        B: 'gtceu:elementium_gear',
        C: 'gtceu:iv_machine_hull',
        D: 'gtceu:elementium_large_fluid_pipe'
    })

    event.recipes.gtceu.aether_engine('burn_aether')
        .inputFluids('astrogreg:aether 4')
        .outputFluids('manafluid:mana 1')
        .duration(60)
        .EUt(-2048)
})