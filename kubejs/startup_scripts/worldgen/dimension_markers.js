GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
    //planet id, icon id, planet name, mod source
    const celestialBodies = [
        { id: 'kuiper_belt', icon: 'astrogreg:asteroid_stone', name: 'Kuiper Belt', namespace: 'ad_astra' },
        { id: 'moon', icon: 'ad_astra:moon_stone', name: 'The Moon', namespace: 'ad_astra' },
        { id: 'mars', icon: 'ad_astra:mars_stone', name: 'Mars', namespace: 'ad_astra' },
        { id: 'mercury', icon: 'ad_astra:mercury_stone', name: 'Mercury', namespace: 'ad_astra' },
        { id: 'venus', icon: 'ad_astra:venus_stone', name: 'Venus', namespace: 'ad_astra' },
        { id: 'ceres', icon: 'ad_extendra:ceres_stone', name: 'Ceres', namespace: 'ad_extendra' },
        { id: 'jupiter', icon: 'ad_extendra:jupiter_stone', name: 'Jupiter', namespace: 'ad_extendra' },
        { id: 'saturn', icon: 'ad_extendra:saturn_stone', name: 'Saturn', namespace: 'ad_extendra' },
        { id: 'uranus', icon: 'ad_extendra:uranus_stone', name: 'Uranus', namespace: 'ad_extendra' },
        { id: 'neptune', icon: 'ad_extendra:neptune_stone', name: 'Neptune', namespace: 'ad_extendra' },
        { id: 'pluto', icon: 'ad_extendra:pluto_stone', name: 'Pluto', namespace: 'ad_extendra' }
    ];

    celestialBodies.forEach(body => {
        event.create(`${body.namespace}:${body.id}`)
            .iconSupplier(() => Item.of(body.icon).getItem())
            .tier(0)
            .overrideName(`§b${body.name}`)
    })
})