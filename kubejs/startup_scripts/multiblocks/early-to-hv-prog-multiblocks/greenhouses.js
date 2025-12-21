GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('greenhouse_trees')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 3, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHAINSAW_TOOL)

    event.create('greenhouse_crops')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 3, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
        
    event.create('greenhouse_flowers')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 3, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
    });
    
GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('greenhouse', 'multiblock')
        .recipeTypes([
            GTRecipeTypes.get('greenhouse_trees'),
            GTRecipeTypes.get('greenhouse_crops'),
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
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(2))
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
            "gtceu:block/multiblock/primitive_pump"
        )

    
    
    event.create('conservatory', 'multiblock')
    .recipeTypes([
            GTRecipeTypes.get('greenhouse_trees'),
            GTRecipeTypes.get('greenhouse_crops'),
            GTRecipeTypes.get('greenhouse_flowers')
        ])
    .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
    .appearanceBlock(() => Block.getBlock('gtceu:robust_machine_casing'))
    .pattern(definition => FactoryBlockPattern.start()
        .aisle('RRRRRRR', 'FBGGGBF', 'FBGGGBF', 'FBGGGBF', '#FBBBF#', '##FFF##')
        .aisle('RDDPDDR', 'G#####G', 'G#####G', 'G#####G', '#G###G#', '##GFG##')
        .aisle('RDDPDDR', 'G#####G', 'G#####G', 'G#####G', '#G###G#', '##GFG##')
        .aisle('RDDPDDR', 'G#####G', 'G#####G', 'G#####G', '#G###G#', '##GFG##')
        .aisle('RDDPDDR', 'G#####G', 'G#####G', 'G#####G', '#G###G#', '##GFG##')
        .aisle('RPPWPPR', 'F#####F', 'F#####F', 'F#####F', '#F###F#', '##FFF##')
        .aisle('RDDPDDR', 'G#####G', 'G#####G', 'G#####G', '#G###G#', '##GFG##')
        .aisle('RDDPDDR', 'G#####G', 'G#####G', 'G#####G', '#G###G#', '##GFG##')
        .aisle('RDDPDDR', 'G#####G', 'G#####G', 'G#####G', '#G###G#', '##GFG##')
        .aisle('RDDPDDR', 'G#####G', 'G#####G', 'G#####G', '#G###G#', '##GFG##')
        .aisle('RRR@RRR', 'FBGGGBF', 'FBGGGBF', 'FBGGGBF', '#FBBBF#', '##FFF##')
            .where('R', Predicates.blocks('gtceu:robust_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setPreviewCount(1)))
            .where('D', Predicates.blocks('minecraft:farmland'))
            .where('F', Predicates.blocks('gtceu:tungsten_steel_frame'))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .where('W', Predicates.blocks('minecraft:water')) 
            .where('B', Predicates.blocks('gtceu:extreme_engine_intake_casing'))           
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .build()    
    )
    .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
            "gtceu:block/multiblock/primitive_pump"
        )
    });

