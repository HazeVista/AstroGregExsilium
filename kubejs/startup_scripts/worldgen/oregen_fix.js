//"Borrowed" parts of this file from Cosmic Frontiers
WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.blocks = [
        'create:zinc_ore',
        'create:deepslate_zinc_ore',
        "ad_astra:mars_diamond_ore",
        "ad_astra:mars_ice_shard_ore",
        "ad_astra:mars_iron_ore",
        "ad_astra:mars_ostrum_ore",
        'ad_astra:venus_coal_ore',
        'ad_astra:venus_gold_ore',
        'ad_astra:venus_diamond_ore',
        'ad_astra:venus_calorite_ore',
        'ad_extendra:jupiter_juperium_ore',
        'ad_extendra:saturn_saturlyte_ore',
        'ad_extendra:uranus_uranium_ore',
        'ad_extendra:uranus_ice_shard_ore',
        'ad_extendra:uranus_lapis_ore',
        'ad_extendra:neptune_neptunium_ore',
        'ad_extendra:sedna_electrolyte_ore',
        'ad_extendra:b_redstone_ore',
        'ad_extendra:pluto_plutonium_ore',
        'ad_extendra:pluto_ice_shard_ore',
        'ad_extendra:orcus_radium_ore',
        'ad_extendra:neptune_ice_shard_ore'
    ]
  })

  event.removeFeatureById('raw_generation', [
        'ad_astra:moon_iron_ore',
        'ad_astra:deepslate_desh_ore',
        'ad_astra:moon_desh_ore',
        'ad_astra:moon_cheese_ore',
        'ad_astra:moon_ice_shard_ore',
        "ad_astra:mars_diamond_ore",
        "ad_astra:mars_ice_shard_ore",
        "ad_astra:mars_iron_ore",
        "ad_astra:mars_ostrum_ore",
        'ad_astra:venus_coal_ore',
        'ad_astra:venus_gold_ore',
        'ad_astra:venus_diamond_ore',
        'ad_astra:venus_calorite_ore',
        'ad_extendra:jupiter_juperium_ore',
        'ad_extendra:saturn_saturlyte_ore',
        'ad_extendra:uranus_uranium_ore',
        'ad_extendra:uranus_ice_shard_ore',
        'ad_extendra:uranus_lapis_ore',
        'ad_extendra:neptune_neptunium_ore',
        'ad_extendra:sedna_electrolyte_ore',
        'ad_extendra:b_redstone_ore',
        'ad_extendra:pluto_plutonium_ore',
        'ad_extendra:pluto_ice_shard_ore',
        'ad_extendra:orcus_radium_ore',
        'ad_extendra:neptune_ice_shard_ore'
  ])
  
  event.removeFeatureById('underground_ores', [
        'ad_astra:moon_iron_ore',
        'ad_astra:deepslate_desh_ore',
        'ad_astra:moon_desh_ore',
        'ad_astra:moon_cheese_ore',
        'ad_astra:moon_ice_shard_ore',
        "ad_astra:mars_diamond_ore",
        "ad_astra:mars_ice_shard_ore",
        "ad_astra:mars_iron_ore",
        "ad_astra:mars_ostrum_ore",
        'ad_astra:venus_coal_ore',
        'ad_astra:venus_gold_ore',
        'ad_astra:venus_diamond_ore',
        'ad_astra:venus_calorite_ore',
        'ad_extendra:jupiter_juperium_ore',
        'ad_extendra:saturn_saturlyte_ore',
        'ad_extendra:uranus_uranium_ore',
        'ad_extendra:uranus_ice_shard_ore',
        'ad_extendra:uranus_lapis_ore',
        'ad_extendra:neptune_neptunium_ore',
        'ad_extendra:sedna_electrolyte_ore',
        'ad_extendra:b_redstone_ore',
        'ad_extendra:pluto_plutonium_ore',
        'ad_extendra:pluto_ice_shard_ore',
        'ad_extendra:orcus_radium_ore',
        'ad_extendra:neptune_ice_shard_ore'
  ])
  
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {

    function createStoneTypeOre(type, properties) {
        if (properties === undefined)
            properties = {}

        if (properties.baseModel === undefined)
            properties.baseModel = type.namespace + ":block/" + type.path

        if (properties.material === undefined)
            properties.material = null

        if (properties.blockState === undefined)
            properties.blockState = (() => Block.getBlock(type).defaultBlockState())

        e.create(type.path, 'ore')
            .stateSupplier(properties.blockState)
            .baseModelLocation(properties.baseModel)
            .materialSupplier(properties.material)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .miningToolTag("mineable/pickaxe")
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    }

    createStoneTypeOre('ad_astra:moon_stone')
    createStoneTypeOre('ad_astra:mars_stone')
    createStoneTypeOre('ad_astra:venus_stone')
    createStoneTypeOre('ad_astra:mercury_stone')
    createStoneTypeOre('ad_extendra:pluto_stone')
    createStoneTypeOre('ad_extendra:ceres_stone')
    createStoneTypeOre('ad_extendra:jupiter_stone')
    createStoneTypeOre('ad_extendra:saturn_stone')
    createStoneTypeOre('ad_extendra:neptune_stone')
    createStoneTypeOre('ad_extendra:uranus_stone')
    createStoneTypeOre('gtceu:asteroid_stone')
    createStoneTypeOre('gtceu:hard_asteroid_stone')


})
