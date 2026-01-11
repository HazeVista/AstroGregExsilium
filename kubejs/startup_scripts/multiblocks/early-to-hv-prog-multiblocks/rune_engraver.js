GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('runic_engraver', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([GTRecipeTypes.get('rune_inscription')])
        .appearanceBlock(() => Block.getBlock('astrogreg:manasteel_brick_machine_casing'))
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAA','AAA','AAA')
            .aisle('AAA','GPG','AAA')
            .aisle('AAA','A@A','AAA')
            .where('A', Predicates.blocks('astrogreg:manasteel_brick_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('P', Predicates.blocks('botania:mana_pylon'))
            .where('G', Predicates.blocks('botania:managlass'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
        .build()
        )

    .workableCasingModel(
            "kubejs:block/casings/machine_casing_manasteel_plated_bricks",
            "astrogreg:block/multiblock/rune_engraver"
        )
})