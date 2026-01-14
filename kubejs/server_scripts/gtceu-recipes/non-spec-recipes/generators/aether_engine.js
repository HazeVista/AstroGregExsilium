ServerEvents.recipes(event => {
    
    event.recipes.gtceu.shaped('astrogreg:aether_turbine', [
        'ABA',
        'BCB',
        'DBD'
    ], {
        A: '#gtceu:circuits/iv',
        B: 'gtbotania:elementium_gear',
        C: 'gtceu:iv_machine_hull',
        D: 'astrogreg:iv_stabilizer'
    })
    .addMaterialInfo()

    event.recipes.gtceu.aether_engine('burn_aether')
        .inputFluids('gtbotania:aether 4')
        .outputFluids('manafluid:mana 1')
        .duration(60)
        .EUt(-2048)
})