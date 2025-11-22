GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('mana_infuser', 'simple')
		.tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
		.definition((tier, builder) => {
			return builder
				.recipeType('mana_infuser')
                .recipeType('botanic_purification')
				.workableTieredHullModel('gtceu:block/machines/replicator')
	})
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('mana_infusion')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.BREWER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.REPLICATOR)

    event.create('botanic_purification')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.BREWER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.REPLICATOR)
});