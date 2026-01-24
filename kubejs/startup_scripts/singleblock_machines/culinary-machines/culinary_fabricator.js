GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('culinary_fabricator', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
            .definition((tier, builder) => {
                return builder
                    .recipeType('culinary_fabricator')
                    .workableTieredHullModel('astrogreg:block/machines/culinary_fabricator')
    })
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('culinary_fabricator')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(6, 1, 3, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(AstroSoundEntries.CULINARY_FABRICATOR)
})