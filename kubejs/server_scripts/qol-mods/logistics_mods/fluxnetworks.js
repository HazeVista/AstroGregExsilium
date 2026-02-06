 ServerEvents.recipes(event => {
 
    const gt = event.recipes.gtceu

    gt.shaped('fluxnetworks:flux_configurator', [
        ' B',
        'A '
    ], {
        A: 'powah:dielectric_rod',
        B: 'fluxnetworks:flux_core'
    })
    .addMaterialInfo()

})