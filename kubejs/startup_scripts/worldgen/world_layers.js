GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('moon_stone')
        .targets('ad_astra:moon_stone')
        .dimensions('ad_astra:moon') 
    
    event.create('venus_stone')
        .targets('ad_astra:venus_stone')
        .dimensions('ad_astra:venus') 

    event.create('mercury_stone')
        .targets('ad_astra:mercury_stone')
        .dimensions('ad_astra:mercury') 

    event.create('mars_stone')
        .targets('ad_astra:mars_stone')
        .dimensions('ad_astra:mars')
        
})