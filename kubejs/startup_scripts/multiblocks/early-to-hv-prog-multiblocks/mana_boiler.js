GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mana_boiling')
    .setMaxIOSize(1, 1, 1, 1)
    .setSteamProgressBar(GuiTextures.PROGRESS_BAR_BOILER_FUEL, FillDirection.DOWN_TO_UP)
    .setSound(GTSoundEntries.FURNACE)
});

let $LargeBoiler = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.LargeBoilerMachine')
console.log('loaded the boiler class')

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mana_boiler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .allowExtendedFacing(false)
        .machine((holder) => new $LargeBoiler(holder, 1800, 1))
        .recipeTypes('mana_boiling')
        .partAppearance((controller, part, side) => 
            controller.self().getPos().below().getY() == part.self().getPos().getY() ? fireboxBlockState : casingBlockState)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FFF', 'CCC', 'CCC', 'CCC')
            .aisle('FFF', 'CPC', 'CPC', 'CCC')
            .aisle('FFF', 'C@C', 'CCC', 'CCC')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:manasteel_firebox_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(2).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.MUFFLER)))
            .where('C', Predicates.blocks('gtceu:manasteel_machine_casing')                
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setExactLimit(1)))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('#', Predicates.any())
        .build()
    )

    .workableCasingModel(
        "kubejs:block/casings/machine_casing_manasteel_plated_bricks",
        "kubejs:textures/block/multiblock/generator/large_manasteel_boiler"
    )
})