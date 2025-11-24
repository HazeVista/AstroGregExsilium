GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('inscription')
        .category('advanced')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR)

})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('inscription_matrix', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([GTRecipeTypes.get('inscription')])
        .appearanceBlock(() => Block.getBlock('gtceu:futura_casing'))
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('F###F','AAAAA','AAAAA','#AAA#')
            .aisle('#####','ASSSA','A#P#A','ASSSA')
            .aisle('#####','ASSSA','AP#PA','ASSSA')
            .aisle('#####','ASSSA','A#P#A','ASSSA')
            .aisle('F###F','AAAAA','AA@AA','#AAA#')
            .where('A', Predicates.blocks('gtceu:futura_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('F', Predicates.blocks('gtceu:futura_alloy_frame'))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('S', Predicates.blocks('gtceu:clean_machine_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .build()    
        )

    .workableCasingModel(
            "kubejs:block/casings/futura_assembler_casing",
            "gtceu:block/machines/laser_engraver"
        )
})