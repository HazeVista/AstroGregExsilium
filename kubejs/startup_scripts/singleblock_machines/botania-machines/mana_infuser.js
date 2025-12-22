GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('mana_infuser', 'simple')
		.tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
		.definition((tier, builder) => {
			return builder
				.recipeType('mana_infusion')
				.workableTieredHullModel('astrogreg:block/machines/mana_infuser')
	})
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('mana_infusion')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 1, 1, 1)
        .setSlotOverlay(false, true, AstroGUITextures.SHIMMER_OVERLAY)
        .setSlotOverlay(false, false, true, AstroGUITextures.CATALYST_OVERLAY)
		.setProgressBar(AstroGUITextures.PROGRESS_BAR_MANA_INFUSION, FillDirection.LEFT_TO_RIGHT)
		.setSound(AstroSoundEntries.MANAFIELD_SIMULATOR)
})