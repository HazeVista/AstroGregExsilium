ServerEvents.recipes(event => {

const burn = event.recipes.gtceu.mana_boiler

    // event.recipes.gtceu.chemical_reactor('aetherize_wither_rose')

    burn('boil_mana')
        .inputFluids(Fluid.of('manafluid:mana', 1))
        .duration(100)
        
    // burn('boil_lotus')
    //     .itemInputs('botania:black_lotus')
    //     .duration(8000)
                
    // burn('boil_blacker_lotus')
    //     .itemInputs('botania:blacker_lotus')
    //     .duration(1000000)

    event.recipes.gtceu.shaped('astrogreg:manasteel_mana_large_boiler', [
        'ADA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:copper_single_cable',
        B: '#gtceu:circuits/mv',
        C: 'astrogreg:manasteel_firebox_casing',
        D: 'astrogreg:lv_stabilizer'
    })
    .addMaterialInfo()

    event.recipes.gtceu.shaped('astrogreg:terrasteel_mana_large_boiler', [
        'ADA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:gold_single_cable',
        B: '#gtceu:circuits/hv',
        C: 'astrogreg:terrasteel_firebox_casing',
        D: 'astrogreg:mv_stabilizer'
    })
    .addMaterialInfo()
    
    event.recipes.gtceu.shaped('astrogreg:alfsteel_mana_large_boiler', [
        'ADA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:aluminium_single_cable',
        B: '#gtceu:circuits/ev',
        C: 'astrogreg:alfsteel_firebox_casing',
        D: 'astrogreg:ev_stabilizer'
    })
    .addMaterialInfo()
})