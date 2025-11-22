GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('water_source', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => {
			return builder
				.recipeType('water_source')
				.workableTieredHullModel('gtceu:block/machines/ore_washer')
		})
	})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('water_source')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(1, 0, 0, 1)
		.setSlotOverlay(false, false, GuiTextures.CIRCUIT_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.BATH);
});