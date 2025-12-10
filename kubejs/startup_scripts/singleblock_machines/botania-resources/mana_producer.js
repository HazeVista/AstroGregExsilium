GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('mana_producer', 'simple')
		.tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
		.definition((tier, builder) => {
			return builder
				.recipeType('mana_production')
				.workableTieredHullModel('gtceu:block/machines/replicator')
	})
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('mana_production')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.BREWER_OVERLAY)
		.setProgressBar(AstroGUITextures.PROGRESS_BAR_MANA_INFUSION, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.REPLICATOR)

});