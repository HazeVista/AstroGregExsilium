GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rune_inscription')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.LASER_ENGRAVERS)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('runic_engraver', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([GTRecipeTypes.get('runic_inscription')])
        .appearanceBlock(() => Block.getBlock('gtceu:manasteel_machine_casing'))
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAA','AAA','AAA')
            .aisle('AGA','APA','AAA')
            .aisle('A@A','AAA','AAA')
            .where('A', Predicates.blocks('gtceu:manasteel_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('P', Predicates.blocks('botania:mana_pylon'))
            .where('G', Predicates.blocks('botania:managlass'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .build()    
        )

    .workableCasingModel(
            "kubejs:block/casings/machine_casing_manasteel_plated_bricks",
            "gtceu:block/multiblock/gcym/large_engraving_laser"
        )
})