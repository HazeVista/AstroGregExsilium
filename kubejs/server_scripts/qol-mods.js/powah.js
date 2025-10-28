ServerEvents.recipes(event => {
    //basic components
    event.shaped('powah:player_aerial_pearl', [
        'BCB',
        'CAC',
        'BCB'
    ], {
        A: 'minecraft:ender_eye',
        B: 'minecraft:blaze_powder',
        C: 'powah:dielectric_paste'
    })

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
        B: '#gtceu:tools/crafting_wrenches'
    });

    event.recipes.gtceu.assembler('assembler_dielectric_casing')
        .itemInputs('4x powah:dielectric_rod')
        .itemOutputs('powah:dielectric_casing')
        .duration(64)
        .circuit(4)
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
    event.shaped('20x powah:dielectric_rod', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: 'powah:dielectric_paste',
        B: 'gtceu:aluminium_rod'
    });

    event.shaped('24x powah:dielectric_rod', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: 'powah:dielectric_paste',
        B: 'gtceu:stainless_steel_rod'
    });

    event.shaped('32x powah:dielectric_rod', [
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
        B: 'gtceu:clay_dust',
        C: 'minecraft:blaze_powder'
    })

    event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:carbon_dust',
        B: 'gtceu:clay_dust',
        C: 'minecraft:lava_bucket'
    })

        event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:charcoal_dust',
        B: 'gtceu:clay_dust',
        C: 'minecraft:blaze_powder'
    })

    event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:charcoal_dust',
        B: 'gtceu:clay_dust',
        C: 'minecraft:lava_bucket'
    })

        event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:coal_dust',
        B: 'gtceu:clay_dust',
        C: 'minecraft:blaze_powder'
    })

    event.shaped('4x powah:dielectric_paste', [
        'AAA',
        'BBC'
    ], {
        A: 'gtceu:coal_dust',
        B: 'gtceu:clay_dust',
        C: 'minecraft:lava_bucket'
    })

    event.recipes.gtceu.mixer('mixing_dielectric_paste')
        .itemInputs('3x gtceu:charcoal_dust', '2x gtceu:clay_dust', 'gtceu:small_blaze_dust')
        .itemOutputs('4x powah:dielectric_paste')
        .EUt(20)
        .duration(200)

    event.recipes.gtceu.mixer('mixing_dielectric_paste1')
        .itemInputs('3x gtceu:coal_dust', '2x gtceu:clay_dust', 'gtceu:small_blaze_dust')
        .itemOutputs('4x powah:dielectric_paste')
        .EUt(20)
        .duration(200)

    event.recipes.gtceu.mixer('mixing_dielectric_paste2')
        .itemInputs('3x gtceu:carbon_dust', '2x gtceu:clay_dust', 'gtceu:small_blaze_dust')
        .itemOutputs('4x powah:dielectric_paste')
        .EUt(20)
        .duration(200)

    event.recipes.gtceu.mixer('mixing_dielectric_paste_lava')
        .itemInputs('3x gtceu:charcoal_dust', '2x gtceu:clay_dust')
        .itemOutputs('4x powah:dielectric_paste')
        .inputFluids('minecraft:lava 100')
        .EUt(20)
        .duration(200)

    event.recipes.gtceu.mixer('mixing_dielectric_paste_lava1')
        .itemInputs('3x gtceu:coal_dust', '2x gtceu:clay_dust')
        .itemOutputs('4x powah:dielectric_paste')
        .inputFluids('minecraft:lava 100')
        .EUt(20)
        .duration(200)

    event.recipes.gtceu.mixer('mixing_dielectric_paste_lava2')
        .itemInputs('3x gtceu:carbon_dust', '2x gtceu:clay_dust')
        .inputFluids('minecraft:lava 100')
        .itemOutputs('4x powah:dielectric_paste')
        .EUt(20)
        .duration(200)


    //capacitors
    event.shaped('4x powah:capacitor_basic', [
        ' CB',
        'CAC',
        'BC '
    ], {
        A: 'gtceu:magnetic_iron_rod',
        B: 'powah:dielectric_paste',
        C: 'gtceu:fine_red_alloy_wire'
    })

    event.shaped('4x powah:capacitor_hardened', [
        ' CB',
        'CAC',
        'BC '
    ], {
        A: 'gtceu:magnetic_iron_rod',
        B: 'powah:dielectric_paste',
        C: 'gtceu:fine_energized_steel_wire'
    })

    // event.shaped('4x powah:capacitor_blazing', [
    //     ' CB',
    //     'CAC',
    //     'BC '
    // ], {
    //     A: 'gtceu:magnetic_steel_rod',
    //     B: 'powah:dielectric_paste',
    //     C: 'gtceu:fine__wire'
    // })

    //     event.shaped('4x powah:capacitor_niotic', [
    //     ' CB',
    //     'CAC',
    //     'BC '
    // ], {
    //     A: 'gtceu:magnetic_steel_rod',
    //     B: 'powah:dielectric_paste',
    //     C: 'gtceu:fine__wire'
    // })
    // event.shaped('4x powah:capacitor_spirited', [
    //     ' CB',
    //     'CAC',
    //     'BC '
    // ], {
    //     A: 'gtceu:magnetic_neodymium_rod',
    //     B: 'powah:dielectric_paste',
    //     C: 'gtceu:fine__wire'
    // })
    // event.shaped('4x powah:capacitor_nitro', [
    //     ' CB',
    //     'CAC',
    //     'BC '
    // ], {
    //     A: 'gtceu:magnetic_neodymium_rod',
    //     B: 'powah:dielectric_paste',
    //     C: 'gtceu:fine__wire'
    // })

    //player transmitters

    //batteries
    event.shaped('powah:battery_starter', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'powah:capacitor_basic',
        B: 'minecraft:redstone',
        C: 'powah:dielectric_rod'
    })

    event.shaped('powah:battery_basic', [
        'BAB',
        'CDC',
        'BAB'
    ], {
        A: 'powah:battery_starter',
        B: 'powah:dielectric_rod',
        C: 'powah:capacitor_hardened',
        D: 'gtceu:red_alloy_single_wire'
    })

    // event.shaped('powah:battery_', [
    //     'BAB',
    //     'CDC',
    //     'BAB'
    // ], {
    //     A: 'powah:battery_',
    //     B: 'powah:dielectric_rod',
    //     C: 'powah:capacitor_',
    //     D: 'gtceu:_single_wire'
    // })
});