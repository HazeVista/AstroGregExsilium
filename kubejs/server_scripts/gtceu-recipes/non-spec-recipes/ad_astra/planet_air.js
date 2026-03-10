ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region gas collecting
    //planetary air type builder
    // air fluid id, amount collected, dimension, duration, circuit, EU/t
    const planetAirs = [
        ['pluto', 5000, 'ad_extendra:pluto', 400, 2, 64],
        ['neptune', 12000, 'ad_extendra:neptune', 400, 3, 256],
        ['uranus', 13000, 'ad_extendra:uranus', 400, 4, 256],
        ['saturn', 14000, 'ad_extendra:saturn', 400, 5, 256],
        ['jupiter', 15000, 'ad_extendra:jupiter', 400, 6, 256],
        ['mars', 7000, 'ad_astra:mars', 400, 7, 256],
        ['moon', 5000, 'ad_astra:moon', 400, 8, 256],
        ['venus', 8000, 'ad_astra:venus', 400, 10, 256],
        ['mercury', 6000, 'ad_astra:mercury', 400, 11, 256],
    ]

    planetAirs.forEach(([ air, amount, dimension, duration, circuit, EU ]) => {
        gt.gas_collector(`collect_${air}`)
            .outputFluids(Fluid.of(`astrogreg:${air}_air`, amount))
            .dimension(dimension)
            .duration(duration)
            .circuit(circuit)
            .EUt(EU)

        gt.vacuum_freezer(`cool_${air}_air`)
            .inputFluids(`astrogreg:${air}_air 4000`)
            .outputFluids(`astrogreg:liquid_${air}_air 4000`)
            .duration(80)
            .EUt(7680)
    })

    gt.gas_collector('collect_air')
        .outputFluids(Fluid.of('gtceu:air', 10000))
        .dimension('minecraft:overworld')
        .duration(200)
        .circuit(9)
        .EUt(64)
    //#endregion



    //#region air centrifuging
    // planet, output 1, output 2, output 3, duration in seconds
    const airCentrifuging = [
        ['pluto', 'gtceu:nitrogen_dioxide 8000', 'gtceu:methane 1200', 'gtceu:carbon_monoxide 800', 20],
        // ['neptune', '', '', '', 24],
        // ['uranus', '', '', '', 32],
        // ['saturn', '', '', '', 40],
        // ['jupiter', '', '', '', 50],
        // ['ceres', '', '', '', 50],
        // ['mars', '', '', '', 60],
        // ['venus', '', '', '', 60],
        // ['mercury', '', '', '', 60]
    ]

    airCentrifuging.forEach(([ planet, output1, output2, output3, duration ]) => {

        gt.centrifuge(`${planet}`)
            .inputFluids(`astrogreg:${planet}_air`)
            .outputFluids(output1)
            .outputFluids(output2)
            .outputFluids(output3)
            .duration(duration * 20)
            .EUt(120)

    })


    //#endregion
    
})