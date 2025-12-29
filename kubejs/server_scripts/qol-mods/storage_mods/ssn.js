ServerEvents.recipes(event => {
    //greggified by @tobyxlebron
    //#region with machines
    event.recipes.gtceu.assembler('assembler_kabels')
        .itemInputs('#forge:glass', 'gtceu:steel_double_wire')
        .inputFluids('gtceu:rubber 576')
        .itemOutputs('32x storagenetwork:kabel')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.assembler('assembler_kabels_alt')
        .itemInputs('#forge:glass', 'gtceu:iron_double_wire')
        .inputFluids('gtceu:rubber 576')
        .itemOutputs('16x storagenetwork:kabel')
        .duration(100)
        .EUt(7)
    //#endregion

    

    //#region without machines
    event.shaped('8x storagenetwork:kabel', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'gtceu:rubber_plate',
        B: 'gtceu:iron_double_wire',
        C: '#forge:glass'
    })

    event.shaped('storagenetwork:import_filter_kabel', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'storagenetwork:import_kabel',
        B: 'gtceu:item_filter'
    })

    event.shaped('2x storagenetwork:stock_upgrade', [
        ' B ',
        'ACA',
        ' B '
    ], {
        A: 'gtceu:wood_crate',
        B: 'minecraft:redstone',
        C: 'laserio:logic_chip'
    })

    event.shaped('storagenetwork:import_kabel', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'minecraft:piston',
        B: 'storagenetwork:kabel'
    })

    event.shaped('storagenetwork:export_kabel', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'minecraft:sticky_piston',
        B: 'storagenetwork:kabel'
    })

    event.shaped('storagenetwork:storage_kabel', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'storagenetwork:kabel',
        B: 'gtceu:wood_crate'
    })

    event.shaped('storagenetwork:filter_kabel', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'storagenetwork:storage_kabel',
        B: 'gtceu:item_filter'
    })

    event.shaped('storagenetwork:storage_kabel', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'storagenetwork:kabel',
        B: 'gtceu:wood_crate'
    })

    event.shaped('storagenetwork:operation_upgrade', [
        ' B ',
        'CAC',
        ' B '
    ], {
        A: 'laserio:logic_chip',
        B: 'minecraft:redstone',
        C: 'create:polished_rose_quartz'
    })

    event.shaped('storagenetwork:single_upgrade', [
        ' B ',
        'CAC',
        ' B '
    ], {
        A: 'laserio:logic_chip',
        B: 'minecraft:redstone',
        C: 'gtceu:iron_plate'
    })

    event.shaped('storagenetwork:slow_upgrade', [
        ' B ',
        'CAC',
        ' B '
    ], {
        A: 'laserio:logic_chip',
        B: 'gtceu:fine_tin_wire',
        C: 'gtceu:magnetic_iron_rod'
    })

    event.shaped('storagenetwork:speed_upgrade', [
        ' B ',
        'CAC',
        ' B '
    ], {
        A: 'laserio:logic_chip',
        B: 'gtceu:fine_copper_wire',
        C: 'gtceu:magnetic_iron_rod'
    })

    event.shaped('storagenetwork:stack_upgrade', [
        ' B ',
        'CAC',
        ' B '
    ], {
        A: 'laserio:logic_chip',
        B: 'gtceu:fine_gold_wire',
        C: 'gtceu:magnetic_iron_rod'
    })

    event.shaped('storagenetwork:inventory', [
        'CBC',
        'BAB',
        'CBC'
    ], {
        A: 'gtceu:wood_crate',
        B: 'storagenetwork:kabel',
        C: 'gtceu:potin_screw'
    })

    event.shaped('storagenetwork:request', [
        'CBC',
        'BAB',
        'CBC'
    ], {
        A: 'storagenetwork:inventory',
        B: 'minecraft:crafting_table',
        C: 'gtceu:double_gold_plate'
    })

    event.shaped('storagenetwork:collector', [
        'CBC',
        'BAB',
        'CBC'
    ], {
        A: 'storagenetwork:inventory',
        B: 'storagenetwork:speed_upgrade',
        C: 'gtceu:potin_screw'
    })

    event.shaped('storagenetwork:exchange', [
        'CBC',
        'BAB',
        'CBC'
    ], {
        A: 'storagenetwork:inventory',
        B: 'storagenetwork:stack_upgrade',
        C: 'gtceu:potin_screw'
    })

    event.shaped('storagenetwork:inventory_remote', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:sticky_resin',
        B: 'gtceu:red_alloy_rod',
        C: 'gtceu:double_gold_plate',
        D: 'storagenetwork:master',
        E: '#forge:tools/screwdrivers'
    })

    event.shaped('storagenetwork:crafting_remote', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'minecraft:crafting_table',
        B: 'gtceu:red_alloy_rod',
        C: 'gtceu:potin_gear',
        D: 'storagenetwork:master',
        E: 'gtceu:steel_crate',
        F: '#forge:tools/screwdrivers'
    })

    event.shaped('storagenetwork:request_expanded', [
        'BBB',
        'BAB',
        'BBB'
    ], {
        A: 'storagenetwork:request',
        B: 'minecraft:crafting_table'
    })

    event.shaped('storagenetwork:master', [
        'CBC',
        'BAB',
        'CBC'
    ], {
        A: 'gtceu:potin_gear',
        B: 'storagenetwork:kabel',
        C: '#gtceu:circuits/ulv'
    })

});