GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('beverage_processor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            return builder
                .recipeType('beverage_processor')
				.workableTieredHullModel('gtceu:block/machines/fluid_heater')
    })
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

})