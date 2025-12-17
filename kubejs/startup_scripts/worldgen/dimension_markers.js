GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
    //planet id, icon id, planet name, mod source
    const celestialBodies = [
        { id: 'kuiper_belt', icon: 'gtceu:asteroid_stone', name: 'Kuiper Belt', namespace: 'ad_astra' },
        { id: 'moon', icon: 'ad_astra:moon_globe', name: 'The Moon', namespace: 'ad_astra' },
        { id: 'mars', icon: 'ad_astra:mars_globe', name: 'Mars', namespace: 'ad_astra' },
        { id: 'mercury', icon: 'ad_astra:mercury_globe', name: 'Mercury', namespace: 'ad_astra' },
        { id: 'venus', icon: 'ad_astra:venus_globe', name: 'Venus', namespace: 'ad_astra' },
        { id: 'ceres', icon: 'ad_extendra:ceres_globe', name: 'Ceres', namespace: 'ad_extendra' },
        { id: 'jupiter', icon: 'ad_extendra:jupiter_globe', name: 'Jupiter', namespace: 'ad_extendra' },
        { id: 'saturn', icon: 'ad_extendra:saturn_globe', name: 'Saturn', namespace: 'ad_extendra' },
        { id: 'uranus', icon: 'ad_extendra:uranus_globe', name: 'Uranus', namespace: 'ad_extendra' },
        { id: 'neptune', icon: 'ad_extendra:neptune_globe', name: 'Neptune', namespace: 'ad_extendra' },
        { id: 'pluto', icon: 'ad_extendra:pluto_globe', name: 'Pluto', namespace: 'ad_extendra' }
    ];

    celestialBodies.forEach(body => {
        event.create(`${body.namespace}:${body.id}`)
            .iconSupplier(() => Item.of(body.icon).getItem())
            .tier(0)
            .overrideName(`§b${body.name}`)
    })
})