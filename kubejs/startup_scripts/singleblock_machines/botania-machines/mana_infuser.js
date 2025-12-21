GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('mana_infuser', 'simple')
		.tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
		.definition((tier, builder) => {
			return builder
				.recipeType('mana_infusion')
                .recipeType('botanic_purification')
				.workableTieredHullModel('gtceu:block/machines/replicator')
	})
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('mana_infusion')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 1, 1, 1)
        .setSlotOverlay(false, false, true, GuiTextures.BREWER_OVERLAY)
		.setProgressBar(AstroGUITextures.PROGRESS_BAR_MANA_INFUSION, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.REPLICATOR)

    event.create('botanic_purification')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 1, 1, 1)
        .setSlotOverlay(false, false, true, GuiTextures.BREWER_OVERLAY)
		.setProgressBar(AstroGUITextures.PROGRESS_BAR_MANA_INFUSION, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.REPLICATOR)
});