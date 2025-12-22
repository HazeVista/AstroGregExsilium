GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

event.create('deionization_plant')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(2, 0, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    // event.create('deionization_plant', 'multiblock')
    //     .recipeTypes([
    //         GTRecipeTypes.get('deionization_plant'),
    //         GTRecipeTypes.get('distillery')
    //     ])
    // .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])

})