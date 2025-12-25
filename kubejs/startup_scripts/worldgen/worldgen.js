GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {

    const planets = [
        { name: 'moon', dimension: 'ad_astra:moon' },
        { name: 'venus', dimension: 'ad_astra:venus' },
        { name: 'mercury', dimension: 'ad_astra:mercury' },
        { name: 'mars', dimension: 'ad_astra:mars' }
    ];

    planets.forEach(planet => {
        event.create(`${planet.name}_stone`)
            .targets(`ad_astra:${planet.name}_stone`)
            .dimensions(planet.dimension);
    })
        
})

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
        'ad_extendra:neptune_ice_shard_ore',
        'powah:uraninite_ore_dense',
        'powah:uraninite_ore_poor',
        'powah:uraninite_ore',
        'powah:deepslate_uraninite_ore_dense',
        'powah:deepslate_uraninite_ore_poor',
        'powah:deepslate_uraninite_ore'
    ];

    event.removeOres(props => {
        props.blocks = removeOres
    });

    event.removeFeatureById('raw_generation', removeOres)
    event.removeFeatureById('underground_ores', removeOres)
});