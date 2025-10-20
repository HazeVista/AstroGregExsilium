ServerEvents.recipes(event => {
    //basic components
    event.shaped('powah:binding_card', [
        'ABA'
    ], {
        A: 'powah:dielectric_rod',
        B: 'powah:battery_starter'
    });

    event.shaped('2x powah:dielectric_casing', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'powah:dielectric_rod',
        B: '#forge:tools/wrenches'
    });

    event.recipes.gtceu.assembler('assembler_dielectric_casing')
        .inputItems('4x powah:dielectric_rod')
        .outputItems('powah:dielectric_frame')
        .duration(64)
        .EUt(7)

    event.shaped('8x powah:dielectric_rod', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: 'powah:dielectric_paste',
        B: 'gtceu:iron_rod'
    });

        event.shaped('16x powah:dielectric_rod', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: 'powah:dielectric_paste',
        B: 'gtceu:steel_rod'
    });
    event.shaped('24x powah:dielectric_rod', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: 'powah:dielectric_paste',
        B: 'gtceu:aluminium_rod'
    });

    event.shaped('48x powah:dielectric_rod', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: 'powah:dielectric_paste',
        B: 'gtceu:stainless_steel_rod'
    });

    event.shaped('64x powah:dielectric_rod', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: 'powah:dielectric_paste',
        B: 'gtceu:titanium_rod'
    });

    event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:carbon_dust',
        B: 'clay_dust',
        C: 'minecraft:blaze_powder'
    })

    event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:carbon_dust',
        B: 'clay_dust',
        C: 'minecraft:lava_bucket'
    })

        event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:charcoal_dust',
        B: 'clay_dust',
        C: 'minecraft:blaze_powder'
    })

    event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:charcoal_dust',
        B: 'clay_dust',
        C: 'minecraft:lava_bucket'
    })

        event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:coal_dust',
        B: 'clay_dust',
        C: 'minecraft:blaze_powder'
    })

    event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:coal_dust',
        B: 'clay_dust',
        C: 'minecraft:lava_bucket'
    })

    event.recipes.gtceu.mixer('mixing_dielectric_paste')
        .itemInputs('gtceu:charcoal_dust', 'gtceu:clay_dust', 'gtceu:small_blaze_dust')
        .itemOutputs('4x dielectric_paste')
        .EUt(20)
        .duration(200)

    event.recipes.gtceu.mixer('mixing_dielectric_paste1')
        .itemInputs('gtceu:coal_dust', 'gtceu:clay_dust', 'gtceu:small_blaze_dust')
        .itemOutputs('4x dielectric_paste')
        .EUt(20)
        .duration(200)

    event.recipes.gtceu.mixer('mixing_dielectric_paste2')
        .itemInputs('gtceu:carbon_dust', 'gtceu:clay_dust', 'gtceu:small_blaze_dust')
        .itemOutputs('4x dielectric_paste')
        .EUt(20)
        .duration(200)

    event.recipes.gtceu.mixer('mixing_dielectric_paste_lava')
        .itemInputs('gtceu:charcoal_dust', 'gtceu:clay_dust')
        .itemOutputs('4x dielectric_paste')
        .EUt(20)
        .duration(200)

    event.recipes.gtceu.mixer('mixing_dielectric_paste_lava1')
        .itemInputs('gtceu:coal_dust', 'gtceu:clay_dust')
        .itemOutputs('4x dielectric_paste')
        .EUt(20)
        .duration(200)

    event.recipes.gtceu.mixer('mixing_dielectric_paste_lava2')
        .itemInputs('gtceu:carbon_dust', 'gtceu:clay_dust')
        .inputFluids('minecraft:lava 100')
        .itemOutputs('4x dielectric_paste')
        .EUt(20)
        .duration(200)

    //player transmitters

})