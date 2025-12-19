GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('beverage_processor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            return builder
                .recipeType('beverage_processor')
				.workableTieredHullModel('astrogreg:block/machines/beverage_processor')
    })
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('beverage_processor')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(6, 1, 3, 0)
		.setProgressBar(AstroGUITextures.PROGRESS_BAR_BEVERAGE, FillDirection.DOWN_TO_UP)
		.setSound(AstroSoundEntries.BEVERAGE_PROCESSOR)
})