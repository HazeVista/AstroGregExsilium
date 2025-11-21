/*
//#region generator example

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('example_generator', 'generator', GTValues.LV, GTValues.MV, GTValues.HV, etc.)
		.definition((tier, builder) => (
			builder
				.recipeType('example_generator')
                .workableTieredHullRenderer("kubejs:block/singleblocks/generators") 
		))
}); 

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('example_generator',)
		.category('example_category')
		.setEUIO('in')
		.setMaxIOSize(itemin#, fluidin#, itemout#, fluidout#)
		.setSlotOverlay(false, false, GuiTextures.MOLECULAR_OVERLAY_1)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.TURBINE);
});

//#endregion

//#region machine example

--- for custom casing type machine ---
GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('example_machine', 'example_category' GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('example_type')
				.workableCasingRenderer('minecraft:/block/example_casing_block', 'gtceu:block/machines/any_overlay', false)
		))
	})

--- for tiered hull version ---
    event.create('example_machine', 'example_category')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            return builder
                .recipeType('example_type')
                .workableTieredHullRenderer("gtceu:block/machines/any_overlay")
    });
recipe type creator is the same as the generator example

//#endregion */