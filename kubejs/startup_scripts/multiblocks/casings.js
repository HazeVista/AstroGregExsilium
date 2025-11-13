StartupEvents.registry('block', event => {

    event.create('futura_casing')
        .displayName('Futura Casing')
        .hardness(5)
        .resistance(1)
        .soundType('copper')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('mineable/wrench')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/futura_assembler_casing')
		.fullBlock(true)
		.opaque(true);
})