GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('manafield_simulator', 'simple')
		.tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
		.definition((tier, builder) => {
			return builder
				.recipeType('manafield_simulation')
				.workableTieredHullModel('astrogreg:block/machines/manafield_simulator')
	})
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('manafield_simulation')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 0, 1, 1)
        .setSlotOverlay(true, true, AstroGUITextures.SHIMMER_OVERLAY)
        .setSlotOverlay(false, false, true, AstroGUITextures.FLOWER_OVERLAY)
		.setProgressBar(AstroGUITextures.PROGRESS_BAR_BLUE_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(AstroSoundEntries.MANAFIELD_SIMULATOR)

});