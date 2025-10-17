GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('greenhouse')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
        
    event.create('greenhouse_flowers')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(2, 14, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
    });
    
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            GTRecipeTypes.get('greenhouse'),
            GTRecipeTypes.get('greenhouse_flowers')
        ])
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#AAAAA#','#TTFTT#','#TTFTT#','#TTFTT#','#######')
            .aisle('ADDPDDA','T#####T','T#####T','T#####T','#TTFTT#')
            .aisle('ADDPDDA','T#####T','T#####T','T#####T','#T#F#T#')
            .aisle('APPWPPA','F#####F','F#####F','F#####F','#FF#FF#')
            .aisle('ADDPDDA','T#####T','T#####T','T#####T','#T#F#T#')
            .aisle('ADDPDDA','T#####T','T#####T','T#####T','#TTFTT#')
            .aisle('#AA@AA#','#TTFTT#','#TTFTT#','#TTFTT#','#######')
            .where('A', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('D', Predicates.blocks('minecraft:farmland'))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('T', Predicates.blocks('gtceu:tempered_glass'))
            .where('W', Predicates.blocks('minecraft:water'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .build()    
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/compressor"
        )
    });