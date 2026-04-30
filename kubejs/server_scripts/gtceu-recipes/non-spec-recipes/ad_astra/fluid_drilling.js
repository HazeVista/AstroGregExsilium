GTCEuServerEvents.fluidVeins(event => {

    //#region pluto
    event.add('gtceu:pluto_bedrock_ammonia_vein', vein => {
        vein.dimensions('ad_extendra:pluto') 
        vein.fluid(() => Fluid.of('gtceu:ammonia').fluid) 
        vein.weight(200)
        vein.minimumYield(120)
        vein.maximumYield(600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
    
    event.add('gtceu:pluto_bedrock_natural_gas_vein', vein => {
        vein.dimensions('ad_extendra:pluto') 
        vein.fluid(() => Fluid.of('gtceu:natural_gas').fluid) 
        vein.weight(400)
        vein.minimumYield(150)
        vein.maximumYield(750)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(40)
    })

    event.add('gtceu:pluto_bedrock_ice_vein', vein => {
        vein.dimensions('ad_extendra:pluto') 
        vein.fluid(() => Fluid.of('gtceu:ice').fluid) 
        vein.weight(800)
        vein.minimumYield(75)
        vein.maximumYield(300)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })

    event.add('gtceu:pluto_bedrock_ice_vein', vein => {
        vein.dimensions('ad_extendra:pluto') 
        vein.fluid(() => Fluid.of('gtceu:methane').fluid) 
        vein.weight(150)
        vein.minimumYield(100)
        vein.maximumYield(400)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
    //#endregion 

})