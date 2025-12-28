ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //planetary air type builder
    // air fluid id, amount collected, dimension, duration, circuit, EU
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
})