ServerEvents.recipes(event => {
    
const burn = event.recipes.gtceu.aether_engine

//recipes will be base 1536 EU

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

    burn('burn_aether')
        .inputFluids('gtceu:aether 4')
        .outputFluids('gtceu:depleted_aether 1')
        .duration(60)
        .EUt(-2048)
})