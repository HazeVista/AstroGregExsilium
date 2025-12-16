//inspired by a file made by Cosmic Frontiers, albeit significantly improved for our specific use
WorldgenEvents.remove(event => {

    const removeOres = [
        'create:zinc_ore',
        'create:deepslate_zinc_ore',
        'ad_astra:moon_iron_ore',
        'ad_astra:deepslate_desh_ore',
        'ad_astra:moon_desh_ore',
        'ad_astra:moon_cheese_ore',
        'ad_astra:moon_ice_shard_ore',
        'ad_astra:mars_diamond_ore',
        'ad_astra:mars_ice_shard_ore',
        'ad_astra:mars_iron_ore',
        'ad_astra:mars_ostrum_ore',
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
    ];

    event.removeOres(props => {
        props.blocks = removeOres
    });

    event.removeFeatureById('raw_generation', removeOres)
    event.removeFeatureById('underground_ores', removeOres)
});

GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    function oreStone(type, properties) {
        // Handle undefined properties parameter
        if (properties === undefined) {
            properties = {};
        }
        
        const defaults = {
            baseModel: type.namespace + ':block/' + type.path,
            material: null,
            blockState: function() { return Block.getBlock(type).defaultBlockState(); }
        };

        // Manual merge of properties into defaults
        const config = {};
        for (var key in defaults) {
            config[key] = defaults[key];
        }
        for (var key in properties) {
            config[key] = properties[key];
        }

        e.create(type.path, 'ore')
            .stateSupplier(config.blockState)
            .baseModelLocation(config.baseModel)
            .materialSupplier(config.material)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .miningToolTag("mineable/pickaxe")
            .generationCondition(ItemGenerationCondition.hasOreProperty);
    }

    const stoneTypes = [
        'ad_astra:moon_stone',
        'ad_astra:mars_stone',
        'ad_astra:venus_stone',
        'ad_astra:mercury_stone',
        'ad_extendra:pluto_stone',
        'ad_extendra:ceres_stone',
        'ad_extendra:jupiter_stone',
        'ad_extendra:saturn_stone',
        'ad_extendra:neptune_stone',
        'ad_extendra:uranus_stone',
        'gtceu:asteroid_stone',
        'gtceu:hard_asteroid_stone'
    ];

    stoneTypes.forEach(function(type) { 
        oreStone(type)
    });
})
